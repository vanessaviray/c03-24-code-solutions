/* exported take */

function take(array: unknown[], count: number): any[] {
  const takeArray = [];
  for (let i = 0; i < count; i++) {
    if (i < array.length) takeArray.push(array[i]);
  }
  return takeArray;
}
