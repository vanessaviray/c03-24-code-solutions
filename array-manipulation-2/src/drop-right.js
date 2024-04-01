'use strict';
/* exported dropRight */
function dropRight(array, count) {
  if (count >= array.length) {
    const copy = [];
    for (let i = 0; i < array.length; i++) {
      copy.push();
    }
    return copy;
  } else {
    const dropRightArray = [];
    const newLength = array.length - count;
    for (let i = 0; i < newLength; i++) {
      dropRightArray.push(array[i]);
    }
    return dropRightArray;
  }
}
