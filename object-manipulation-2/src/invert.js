'use strict';
/* exported invert */
function invert(source) {
  const inverted = {};
  for (const key in source) {
    const value = source[key];
    if (typeof value !== 'object') {
      inverted[value] = key;
    }
  }
  return inverted;
}
