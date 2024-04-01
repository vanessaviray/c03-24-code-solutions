/* exported chunk */

function chunk(array: unknown[], size: number): any[] {
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
