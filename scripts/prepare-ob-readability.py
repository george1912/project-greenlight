"""Compile reviewed exact-span formatting; never mutate the authored study text."""
import csv
import hashlib
import json
import re
import subprocess
import sys
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'docs/readability/ob-final-readability-flags.csv'
REVIEW = ROOT / 'docs/readability/ob-readability-review.json'
STYLES = {'bold', 'italic', 'red', 'underline', 'bold+red', 'bold+underline'}
model = json.loads(subprocess.check_output(['node', '-e', """
const fs=require('fs'),vm=require('vm'),c={};vm.createContext(c);
for(const file of ['ob-content.js','ob-objectives.js'])vm.runInContext(fs.readFileSync(file,'utf8'),c);
process.stdout.write(vm.runInContext('JSON.stringify({objectives:obStudyObjectives,course:obCourse})',c));
"""], cwd=ROOT, text=True))
review = json.loads(REVIEW.read_text())
objectives = model['objectives']
by_id = {o['id']: o for o in objectives}
rules, records = {}, []


def fields(blocks, section='', prefix='answer'):
    found = []
    for i, block in enumerate(blocks):
        location = f'{prefix}.{i}'
        if isinstance(block, str):
            found.append((section, location, block, False))
        elif block['type'] == 'group':
            found += fields(block['blocks'], block['title'], location + '.blocks')
        elif block['type'] in ('overview', 'list'):
            target = 'Quick answer' if block['type'] == 'overview' else section
            found += [(target, f'{location}.items.{n}', item, False) for n, item in enumerate(block['items'])]
        elif block['type'] == 'facts':
            for n, item in enumerate(block['items']):
                found += [(section, f'{location}.items.{n}.{key}', item[key], key == 'label') for key in ('label', 'text')]
        elif block['type'] != 'heading':
            found.append((section, location + '.text', block['text'], False))
    return found


def locate(objective, section, text):
    candidates = [('prompt', 'text', objective['text'], False)] + fields(objective['answer'])
    return [(field, value, label) for target, field, value, label in candidates if target == section and text in value]


def add_rule(key, text, style):
    assert style in STYLES, style
    entry = {'text': text, 'style': style}
    if entry not in rules.setdefault(key, []):
        rules[key].append(entry)


with SOURCE.open(newline='', encoding='utf-8-sig') as handle:
    rows = list(csv.DictReader(handle))
for line, row in enumerate(rows, 2):
    record = {'row': line, **row}
    if row['page'] == '#/ob-final/study-guide':
        scopes = {'Intro': ('guide|intro', 'the topic list is not exhaustive'),
                  'How to organize your notes': ('guide|outline', None),
                  'Cumulative review': ('guide|cumulative', 'Selected material from Exams I and II.')}
        key, value = scopes[row['section']]
        if value is None:
            matches = [s['title'] for s in model['course']['sections'] if row['exact_text'] in s['title']]
            assert len(matches) == 1, record
            value = matches[0]
        assert value.count(row['exact_text']) == 1, record
        record.update(key=key, field=row['section'])
    else:
        match = re.fullmatch(r'Objective (\d+) — (.+) \| (.+)', row['section'])
        assert match, record
        number, title, section = match.groups()
        week = row['page'].removeprefix('#/ob-final/')
        objective = [o for o in objectives if week in o['weekIds']][int(number) - 1]
        assert objective['title'] == title, record
        matches = locate(objective, section, row['exact_text'])
        if len(matches) != 1 or matches[0][1].count(row['exact_text']) != 1:
            record.update(status='unmatched', reason='The exact span is missing or ambiguous in its named field.')
            records.append(record)
            continue
        field, value, label = matches[0]
        key = objective['id'] + '|' + section
        record.update(key=key, objectiveId=objective['id'], field=field)
        if label:
            assert review['decisions'].get(str(line), {}).get('action') == 'already-emphasized', record
    decision = review['decisions'].get(str(line), {})
    if decision.get('action') in ('omit', 'already-emphasized'):
        record.update(status=decision['action'], reviewReason=decision['reason'])
    else:
        style = decision.get('style', row['transformation'])
        add_rule(key, row['exact_text'], style)
        record.update(status='adjusted' if style != row['transformation'] else 'applied', appliedStyle=style)
        if decision:
            record['reviewReason'] = decision['reason']
    records.append(record)

for addition in review['additions']:
    objective = by_id[addition['objectiveId']]
    matches = locate(objective, addition['section'], addition['exact_text'])
    assert len(matches) == 1 and matches[0][1].count(addition['exact_text']) == 1 and not matches[0][2], addition
    add_rule(objective['id'] + '|' + addition['section'], addition['exact_text'], addition['style'])

output = '/* Reviewed exact spans; authored wording remains unchanged in its original content files. */\n'
output += 'const obReadabilityRules = ' + json.dumps(rules, ensure_ascii=False, indent=2) + ';\n'
(ROOT / 'ob-readability-data.js').write_text(output)
audit = {
    'reviewedOn': review['reviewedOn'],
    'basis': review['basis'],
    'source': {'path': str(SOURCE.relative_to(ROOT)), 'sha256': hashlib.sha256(SOURCE.read_bytes()).hexdigest(), 'rows': len(rows), 'originalSha256': review['sourceOriginalSha256'], 'normalization': review['sourceNormalization']},
    'counts': dict(Counter(r['status'] for r in records)),
    'uniqueRules': sum(map(len, rules.values())),
    'scopes': len(rules),
    'additions': review['additions'],
    'records': records,
    'boundaries': 'Formatting applies only to named OB prompts, quick answers, note-topic text, and four guide spans. Shared objectives reuse the same rules. Headings, sources, navigation, quiz/practice content, video text, posters and question counts retain their existing appearance. No wording, capitalization, note order or objective mappings are changed.',
    'contentHashes': {file: hashlib.sha256((ROOT / file).read_bytes()).hexdigest() for file in ['ob-objectives.js', 'ob-content.js', 'ob-videos.js', 'ob-question-map.js', 'ob-practice-data.js']}
}
audit_path = ROOT / 'docs/ob-readability-audit.json'
if audit_path.exists():
    previous = json.loads(audit_path.read_text())
    if previous.get('contentHashes') == audit['contentHashes'] and 'baselineRenderHashes' in previous:
        audit['baselineRenderHashes'] = previous['baselineRenderHashes']
if '--refresh-baseline' in sys.argv:
    # Use only after an intentional, separately authorized wording/layout change.
    audit['baselineRenderHashes'] = json.loads(subprocess.check_output(['node', '-e', """
const fs=require('fs'),vm=require('vm'),crypto=require('crypto');
const main={innerHTML:'',querySelector:()=>null,querySelectorAll:()=>[],focus(){}};
const c={URL,console,document:{querySelector:()=>main,title:''},location:{hash:'#/'},window:{addEventListener(){},scrollTo(){}},PresentationViewer:{mount:()=>()=>{}}};vm.createContext(c);
for(const match of fs.readFileSync('index.html','utf8').matchAll(/<script src="([^?]+)\\?[^\\"]+" defer><\\/script>/g))if(!['viewer.js','analytics.js'].includes(match[1]))vm.runInContext(fs.readFileSync(match[1],'utf8'),c);
vm.runInContext('OBReadability.format=value=>escapeHTML(value)',c);
const course=vm.runInContext('obCourse',c);
const routes=['#/ob-final','#/ob-final/study-guide',...course.weeks.map(w=>'#/ob-final/'+w.id),...course.topics.map(t=>'#/ob-final/topic/'+t.id),'#/ob-final/memory-notes','#/ob-final/practice','#/ob-final/practice/exam-1','#/ob-final/podcast','#/final','#/final/study-guide','#/final/week-7','#/final/condition/osteoporosis','#/final/focused-review'];
const hashes={};for(const route of routes){c.location.hash=route;vm.runInContext('render()',c);hashes[route]=crypto.createHash('sha256').update(main.innerHTML).digest('hex');}
process.stdout.write(JSON.stringify(hashes));
"""], cwd=ROOT, text=True))
if 'baselineRenderHashes' not in audit:
    raise SystemExit('Authored text changed: review the new matches and use --refresh-baseline only for an intentional wording/layout update.')
audit_path.write_text(json.dumps(audit, ensure_ascii=False, indent=2) + '\n')
print(json.dumps({key: audit[key] for key in ('counts', 'uniqueRules', 'scopes')}, indent=2))
