'use strict';
/* exported filterOutStrings */
function filterOutStrings(values) {
  const filteredValues = [];
  for (let index = 0; index < values.length; index++) {
    if (typeof values[index] !== 'string') {
      filteredValues.push(values[index]);
    }
  }
  return filteredValues;
}
