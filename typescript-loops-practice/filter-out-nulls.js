'use strict';
/* exported filterOutNulls */
function filterOutNulls(values) {
  const filteredValues = [];
  for (let index = 0; index < values.length; index++) {
    if (values[index] !== null) {
      filteredValues.push(values[index]);
    }
  }
  return filteredValues;
}
