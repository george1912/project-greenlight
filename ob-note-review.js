/* Same-page review for embedded OB questions. Navigation never redraws the quiz. */
const OBNoteReview = (() => {
  const links = new Map(obNoteReviewLinks.flatMap(group=>group.questionIds.map(id=>[id,group])));
  function feedback(question) {
    const link=links.get(question.id);
    return link ? `<p class="ob-note-review-action"><button type="button" class="ob-note-review-button" data-ob-note-review="${escapeHTML(question.id)}" aria-label="Review this in the notes: ${escapeHTML(link.heading)}">Review this in the notes <span aria-hidden="true">→</span></button></p>` : '';
  }
  function mount(root) {
    let returnControl=null,returnTarget=null,disposed=false;
    const clear=()=>{returnControl?.remove();returnControl=null;returnTarget=null;};
    const reveal=target=>{
      for(let parent=target;parent&&parent!==root;parent=parent.parentElement)if(parent.tagName==='DETAILS')parent.open=true;
    };
    function click(event) {
      if(disposed)return;
      const back=event.target.closest('[data-ob-note-return]');
      if(back&&back===returnControl?.querySelector('button')){
        const target=returnTarget;
        clear();
        if(target&&root.contains(target)){
          reveal(target);
          target.focus({preventScroll:true});
          target.scrollIntoView({behavior:'instant',block:'start'});
        }
        return;
      }
      const button=event.target.closest('[data-ob-note-review]');
      if(!button)return;
      const link=links.get(button.dataset.obNoteReview),form=button.closest('.section-practice-question');
      if(!link||!form||form.dataset.practiceQuestion!==button.dataset.obNoteReview||form.closest('.section-practice')?.dataset.practiceSection!==link.sectionId)return;
      const objective=[...root.querySelectorAll('.ob-study-objective')].find(item=>item.dataset.objective===link.objectiveId);
      const topic=objective&&[...objective.querySelectorAll('.ob-note-topic')].find(item=>item.querySelector('summary h4')?.textContent===link.heading);
      const body=topic?.querySelector('.ob-note-topic-body'),summary=topic?.querySelector('summary');
      if(!body||!summary)return;
      clear();
      returnTarget=form.querySelector('.section-practice-feedback');
      returnControl=document.createElement('p');
      returnControl.className='ob-note-review-return';
      returnControl.innerHTML='<button type="button" class="ob-note-review-button" data-ob-note-return>Back to practice question <span aria-hidden="true">↩</span></button>';
      body.prepend(returnControl);
      reveal(topic);
      summary.focus({preventScroll:true});
      topic.scrollIntoView({behavior:'instant',block:'start'});
    }
    root.addEventListener?.('click',click);
    return ()=>{disposed=true;root.removeEventListener?.('click',click);clear();};
  }
  return {feedback,mount};
})();
