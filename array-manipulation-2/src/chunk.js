'use strict';
/* exported chunk */
function chunk(array, size) {
  const chunkArray = [];
  for (let i = 0; i < array.length; i += size) {
    const subArray = [];
    for (
      let subIndex = i;
      subIndex < i + size && subIndex < array.length;
      subIndex++
    ) {
      subArray.push(array[subIndex]);
    }
    chunkArray.push(subArray);
  }
  return chunkArray;
}
