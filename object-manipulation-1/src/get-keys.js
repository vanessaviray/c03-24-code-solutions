'use strict';
/* exported getKeys */
function getKeys(object) {
  const getKeysArray = [];
  for (const prop in object) {
    getKeysArray.push(prop);
  }
  return getKeysArray;
}
