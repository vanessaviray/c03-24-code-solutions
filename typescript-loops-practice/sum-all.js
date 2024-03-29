'use strict';
/* exported sumAll */
function sumAll(numbers) {
  let sum = 0;
  for (let index = 0; index <= numbers.length - 1; index++) {
    sum += numbers[index];
  }
  return sum;
}
