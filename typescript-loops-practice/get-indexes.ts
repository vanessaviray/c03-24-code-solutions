/* exported getIndexes */

function getIndexes(array: unknown[]): any {
  const indexes = [];
  for (let index = 0; index < array.length; index++) {
    indexes.push(index);
  }
  return indexes;
}
