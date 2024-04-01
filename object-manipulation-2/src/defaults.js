'use strict';
/* exported defaults */
function defaults(target, source) {
  for (const key in source) {
    let isInTarget = false;
    for (const targetKey in target) {
      if (targetKey === key) {
        isInTarget = true;
        break;
      }
    }
    if (!isInTarget) {
      target[key] = source[key];
    }
  }
}
