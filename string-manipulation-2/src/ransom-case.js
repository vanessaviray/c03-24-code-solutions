'use strict';
/* exported ransomCase */
function ransomCase(string) {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      result += string[i].toLowerCase();
    } else {
      result += string[i].toUpperCase();
    }
  }
  return result;
}
