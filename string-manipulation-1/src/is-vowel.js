'use strict';
/* exported isVowel */
function isVowel(char) {
  char = char.toLowerCase();
  if (['a', 'e', 'i', 'o', 'u'].includes(char)) {
    return true;
  } else {
    return false;
  }
}
