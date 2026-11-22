/* Exact-span presentation only. Text and rules are always escaped before markup is emitted. */
const OBReadability = (() => {
  const allowedStyles = new Set(['bold', 'italic', 'red', 'underline']);
  function format(value, scope) {
    const text = String(value);
    const rules = (typeof obReadabilityRules !== 'undefined' && Object.hasOwn(obReadabilityRules, scope) ? obReadabilityRules[scope] : []).concat(typeof OBQuestionNotes!=='undefined'?OBQuestionNotes.rules(scope):[]);
    const ranges = [];
    for (const rule of rules) {
      const start = text.indexOf(rule.text);
      if (!rule.text || start < 0 || text.indexOf(rule.text, start + 1) >= 0) continue;
      const styles = rule.style.split('+');
      if (styles.some(style => !allowedStyles.has(style))) continue;
      ranges.push({start, end: start + rule.text.length, styles});
    }
    if (!ranges.length) return escapeHTML(text);
    const boundaries = [...new Set([0, text.length, ...ranges.flatMap(range => [range.start, range.end])])].sort((a,b) => a-b);
    const segments = [];
    for (let i = 0; i < boundaries.length - 1; i++) {
      const start = boundaries[i], end = boundaries[i+1];
      const styles = [...new Set(ranges.filter(range => range.start <= start && range.end >= end).flatMap(range => range.styles))].sort().join(' ');
      const previous = segments.at(-1);
      if (previous?.styles === styles) previous.text += text.slice(start,end);
      else segments.push({text:text.slice(start,end),styles});
    }
    return segments.map(segment => {
      const text = escapeHTML(segment.text);
      if (!segment.styles) return text;
      const styles = segment.styles.split(' ');
      const tag = styles.includes('bold') ? 'strong' : styles.includes('italic') ? 'em' : 'span';
      return `<${tag} data-ob-emphasis="${segment.styles}">${text}</${tag}>`;
    }).join('');
  }
  return {format};
})();
