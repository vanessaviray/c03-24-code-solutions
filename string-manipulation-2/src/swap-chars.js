'use strict';
/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  const chars = string.split('');
  const charSwap = chars[firstIndex];
  chars[firstIndex] = chars[secondIndex];
  chars[secondIndex] = charSwap;
  return chars.join('');
}
