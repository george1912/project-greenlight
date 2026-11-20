/* Shared section-practice behavior, with one question visible per OB objective. */
const OBReinforcement = (() => {
  const practice = SectionQuizzes.create({directory:'ob-practice-questions',version:'20261120-ob-reinforcement',oneAtATime:true,intro:'questions to reinforce this topic. Check each answer for a brief explanation.'});
  function section(id) { return obQuestionMap.sections[id] ? practice.section('ob-review',id) : ''; }
  function weeklyExtras(week) {
    const groups=obQuestionMap.extras.filter(group=>group.weekIds.includes(week.id));
    return groups.length?`<section class="ob-supplemental-practice"><h2>Additional infant & child review</h2><p class="section-copy">These questions extend into later infant development and preventive follow-up. Use them after your newborn exam review.</p>${groups.map(group=>`<section class="ob-supplemental-group"><h3>${escapeHTML(group.title)}</h3>${section(group.id)}</section>`).join('')}</section>`:'';
  }
  return {section,weeklyExtras,mount:practice.mount};
})();
