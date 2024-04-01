'use strict';
/* exported capitalizeWord */
function capitalizeWord(word) {
  word = word.toLowerCase();
  let capWord = word.charAt(0).toUpperCase() + word.slice(1);
  if (capWord === 'Javascript') {
    capWord = 'JavaScript';
  }
  return capWord;
}
