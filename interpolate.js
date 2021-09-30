function interpolate(text, data, options) {
  const {leftDelimiter: ld, rightDelimiter: rd} = options;
  const regex =  new RegExp(`${ld}\\w*${rd}`,'g'); 
  let arr = text.match(regex);

  (arr || []).forEach(elem => {
    let prop = elem.substring(ld.length, elem.length - rd.length);
    let replacement = data[prop] || "";
    text = text.replace(elem, replacement);
  });

  return text;
}