'use strict';
/* exported reverseWord */
function reverseWord(word) {
  if (word === '') {
    return '';
  } else {
    return reverseWord(word.substring(1)) + word.charAt(0);
  }
}
