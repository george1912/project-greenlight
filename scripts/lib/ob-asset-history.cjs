const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'../..'),audit=require('../../docs/ob-note-review-audit.json'),coverage=require('../../docs/ob-embedded-note-coverage-audit.json'),skills=require('../../docs/ob-skills-audit.json');
const sha=value=>crypto.createHash('sha256').update(value).digest('hex');
// Keep earlier audits as historical snapshots. Only these exact, separately
// audited feedback/navigation changes may resolve to their previous checksum.
function historicalAssetHash(file){
 let actual=sha(fs.readFileSync(path.join(root,file)));
 for(const change of [skills,coverage,audit]){
  const record=change.uiChanges.find(item=>item.path===file);
  if(!record)continue;
  assert.equal(actual,record.afterSha256,'Current UI matches the bounded reviewed change: '+file);
  actual=record.beforeSha256;
 }
 return actual;
}
module.exports={historicalAssetHash};
