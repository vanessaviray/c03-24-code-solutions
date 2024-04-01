'use strict';
/* exported take */
function take(array, count) {
  const takeArray = [];
  for (let i = 0; i < count; i++) {
    if (i < array.length) takeArray.push(array[i]);
  }
  return takeArray;
}
