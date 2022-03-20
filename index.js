function getIndent(data, shortCode) {
  const serializedData = JSON.stringify(data);
  const indexOfSubstring = serializedData.indexOf("{{%" + shortCode + "}}");
  const textBefore = serializedData.slice(0, indexOfSubstring);
  const lastN = textBefore.lastIndexOf("\\n");
  return textBefore.length - lastN - 2;
}

function propagateChar(char, length) {
  let str = "";
  for (let x = 0; x < length; x++) {
    str += char;
  }
  return str;
}

function addIndents(data, indent) {
  const str = JSON.stringify(data);
  const formatted = str.replace(/\\n/g, "\\n" + indent);
  return JSON.parse(formatted);
}

export { getIndent, propagateChar, addIndents };
