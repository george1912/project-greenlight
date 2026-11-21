const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const source = JSON.parse(fs.readFileSync(path.join(root, 'resources/video-sources/ob-tiktok/ob_tiktok_videos.json'), 'utf8'));
const main = {innerHTML:'', querySelector:()=>null, querySelectorAll:()=>[], focus(){}};
const context = {URL, console, document:{querySelector:()=>main, title:''}, location:{hash:'#/'}, window:{addEventListener(){}, scrollTo(){}}, PresentationViewer:{mount:()=>()=>{}}};
vm.createContext(context);
for (const match of html.matchAll(/<script src="([^?]+)\?[^\"]+" defer><\/script>/g)) {
  if (['viewer.js', 'analytics.js'].includes(match[1])) continue;
  vm.runInContext(fs.readFileSync(path.join(root, match[1]), 'utf8'), context, {filename:match[1]});
}
const {course, objectives, videos} = vm.runInContext('({course:obCourse, objectives:obStudyObjectives, videos:obVideoResources})', context);
const rows = source.topics.flatMap(t => t.videos.map(v => ({...v, topic:t.topic_id, topicType:t.topic_type})));
assert.equal(videos.length, 115);
assert.equal(new Set(videos.map(v => v.id)).size, 115);
assert.equal(new Set(videos.map(v => v.objectiveId)).size, 71);
for (const row of rows) {
  const v = videos.find(v => v.id === row.video_id);
  const o = objectives.find(o => o.id === row.section_id);
  assert(o && v, row.video_id);
  assert.equal(v.objectiveId, o.id);
  assert.equal(v.topic, row.topic);
  assert.equal(v.url, row.url);
  assert.equal(v.title, row.title);
  assert.equal(v.description, row.covers);
  assert.equal(v.notes, row.notes);
  assert.equal(v.duration, `${Math.floor(row.duration_sec/60)}:${String(row.duration_sec%60).padStart(2,'0')}`);
  assert.equal(v.videoType, row.video_type);
  assert(/^\d{19}$/.test(v.id));
  assert.equal(v.url, `https://www.tiktok.com/@${row.creator}/video/${v.id}`);
  assert.deepEqual(Array.from(o.weekIds).sort(), row.week_ids.split(';').sort());
  assert((row.topicType === 'exam_topic' ? o.topicIds : o.weekIds).includes(v.topic));
  assert(videos.filter(item => item.objectiveId === o.id).length <= 2);
}
const gaps = objectives.filter(o => !videos.some(v => v.objectiveId === o.id)).map(o => o.id).sort();
assert.deepEqual(Array.from(gaps), ['missed-contraception','obstetric-history-gtpal','postpartum-mental-health','pregnancy-psychosocial-care']);
function render(route) {
  context.location.hash = route;
  vm.runInContext('render()', context);
  return main.innerHTML;
}
function verifyPage(route, expectedObjectives) {
  const markup = render(route);
  // Objectives can contain nested source and practice disclosures.
  const markers = [...markup.matchAll(/data-objective="([^"]+)"/g)];
  const actual = markers.map((match, index) => [markup.slice(match.index, markers[index + 1]?.index), match[1]]);
  assert.equal(actual.length, expectedObjectives.length, route);
  for (const [, id] of actual) assert(expectedObjectives.some(o => o.id === id));
  for (const objective of expectedObjectives) {
    const block = actual.find(m => m[1] === objective.id)[0];
    const indices = [...block.matchAll(/data-video-index="(\d+)" data-video-collection="ob"/g)].map(m => Number(m[1]));
    const expected = videos.filter(v => v.objectiveId === objective.id);
    assert.deepEqual(indices.map(i => videos[i].id).sort(), Array.from(expected, v => v.id).sort(), `${route}: ${objective.id}`);
    if (expected.length) assert(block.includes('Creator videos supplement your course materials'));
  }
  assert(!markup.includes('<iframe'), 'No eager third-party players');
  assert(!markup.includes('embed.js') && !markup.includes('<blockquote'), 'Do not inject supplied embed HTML');
}
for (const topic of course.topics) verifyPage(`#/ob-final/topic/${topic.id}`, objectives.filter(o => o.topicIds.includes(topic.id)));
for (const week of course.weeks) verifyPage(`#/ob-final/${week.id}`, objectives.filter(o => week.reviewOf ? o.weekIds.some(id => week.reviewOf.includes(id)) : o.weekIds.includes(week.id)));
for (const route of ['#/final/videos', '#/final/condition/parkinsons']) assert(!render(route).includes('data-video-collection="ob"'));
assert.equal(vm.runInContext('VideoLibrary.available().length', context), 78);
const workflow = fs.readFileSync(path.join(root, '.github/workflows/pages.yml'), 'utf8');
assert(workflow.includes('ob-videos.js'));
assert(html.indexOf('src="ob-videos.js?') < html.indexOf('src="video-library.js?'));
console.log('Passed: 115 source-matched TikToks, 71/75 objectives, all 11 OB topics and 10 weekly/review routes, exact per-objective placement, honest gaps, lazy players, isolated Med-Surg library and deployment assets.');
