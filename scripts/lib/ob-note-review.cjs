const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),assert=require('node:assert/strict');
const review=JSON.parse(fs.readFileSync(path.resolve(__dirname,'../../docs/ob-final-notes-review.json')));
const revised=new Map(review.objectives.filter(o=>o.beforeSha256!==o.afterSha256).map(o=>[o.id,o]));
const sha=value=>crypto.createHash('sha256').update(value).digest('hex');
// Older weekly audits remain immutable historical snapshots. Only the exact
// reviewed current object may resolve to its recorded pre-review checksum.
function historicalObjectiveHash(objective){
 const actual=sha(JSON.stringify(objective)),record=revised.get(objective.id);
 if(!record||!objective.answer?.length)return actual;
 assert.equal(actual,record.afterSha256,'Current object matches the authorized final review: '+objective.id);
 return record.beforeSha256;
}
const beforeFinalReview=addition=>!addition.reason.startsWith('Final OB review:');
module.exports={historicalObjectiveHash,beforeFinalReview};
