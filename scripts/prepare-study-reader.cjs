const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');

function loadReader() {
  const context = {escapeHTML:value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]))};
  vm.createContext(context);
  for (const file of ['content.js', 'conditions.js', 'ob-content.js', 'ob-objectives.js', 'ob-question-notes.js', 'ob-readability-data.js', 'ob-readability.js', 'study-reader.js']) {
    vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context, {filename:file});
  }
  return vm.runInContext('StudyReader', context);
}

function prepare(output) {
  const reader = loadReader();
  const pages = reader.pages();
  for (const page of pages) {
    if (!/^reader\/(ob|med-surg)\/[a-z0-9-]+\.html$/.test(page.path)) throw new Error('Invalid reader path: ' + page.path);
    const target = path.join(output, page.path);
    fs.mkdirSync(path.dirname(target), {recursive:true});
    fs.writeFileSync(target, reader.documentFor(page));
  }
  fs.mkdirSync(output, {recursive:true});
  fs.copyFileSync(path.join(root, 'study-reader.css'), path.join(output, 'study-reader.css'));
  return pages;
}

if (require.main === module) {
  const output = process.argv[2];
  if (!output) throw new Error('Usage: node scripts/prepare-study-reader.cjs <website-output-directory>');
  console.log(`Prepared ${prepare(path.resolve(output)).length} continuous study articles from the original notes.`);
}
module.exports = {loadReader, prepare};
