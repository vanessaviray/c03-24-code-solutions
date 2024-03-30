'use strict';
/* exported includes */
function includes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return array[i] === value;
    }
  }
  return false;
}
includes(['foo', 'bar', 'baz', 'qux'], 'baz');
