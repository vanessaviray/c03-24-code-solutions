'use strict';
/* exported getValues */
function getValues(object) {
  const getValuesArray = [];
  for (const key in object) {
    getValuesArray.push(object[key]);
  }
  return getValuesArray;
}
