/* exported dropRight */

function dropRight(array: unknown[], count: number): any[] {
  if (count >= array.length) {
    const copy: any[] = [];
    for (let i = 0; i < array.length; i++) {
      copy.push();
    }
    return copy;
  } else {
    const dropRightArray = [];
    const newLength = array.length - count;
    for (let i = 0; i < newLength; i++) {
      dropRightArray.push(array[i]);
    }
    return dropRightArray;
  }
}
