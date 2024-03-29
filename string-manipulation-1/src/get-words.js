'use strict';
/* exported getWords */
function getWords(string) {
  const words = string.split(' ');
  const getWordsArray = words.filter((word) => word.length > 0);
  return getWordsArray;
}
