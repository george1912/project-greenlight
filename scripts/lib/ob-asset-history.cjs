const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'../..'),audit=require('../../docs/ob-note-review-audit.json');
const sha=value=>crypto.createHash('sha256').update(value).digest('hex');
// Keep earlier audits as historical snapshots. Only these exact, separately
// audited feedback/navigation changes may resolve to their previous checksum.
function historicalAssetHash(file){
 const actual=sha(fs.readFileSync(path.join(root,file))),record=audit.uiChanges.find(item=>item.path===file);
 if(!record)return actual;
 assert.equal(actual,record.afterSha256,'Current UI matches the bounded note-review change: '+file);
 return record.beforeSha256;
}
module.exports={historicalAssetHash};
