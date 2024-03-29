/* exported countdown */

function countdown(num: number): number[] {
  const newArr = [];
  for (let initialNum = num; initialNum >= 0; initialNum--) {
    newArr.push(initialNum);
  }
  return newArr;
}
