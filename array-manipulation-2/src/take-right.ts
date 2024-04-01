/* exported takeRight */

function takeRight(array: unknown[], count: number): any[] {
  if (count >= array.length) {
    const copy = [];
    for (let i = 0; i < array.length; i++) {
      copy.push(array[i]);
    }
    return copy;
  } else {
    const takeRightArray = [];
    for (let i = array.length - count; i < array.length; i++) {
      takeRightArray.push(array[i]);
    }
    return takeRightArray;
  }
}
