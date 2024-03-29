'use strict';
/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const addSuffix = [];
  for (let index = 0; index < words.length; index++) {
    const newWord = (words[index] += suffix);
    addSuffix.push(newWord);
  }
  return addSuffix;
}
