'use strict';
/* exported getLastCharacter */
function getLastCharacter(string) {
  const lastCharIndex = string.length - 1;
  const lastChar = string.charAt(lastCharIndex);
  return lastChar;
}
