'use strict';
/* exported compact */
function compact(array) {
  const newArr = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index]) {
      newArr.push(array[index]);
    }
  }
  return newArr;
}
