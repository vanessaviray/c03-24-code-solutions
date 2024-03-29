'use strict';
/* exported countdown */
function countdown(num) {
  const newArr = [];
  for (let initialNum = num; initialNum >= 0; initialNum--) {
    newArr.push(initialNum);
  }
  return newArr;
}
