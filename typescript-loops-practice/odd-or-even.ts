/* exported oddOrEven */

function oddOrEven(numbers: number[]): string[] {
  const oddOrEvenResult = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      oddOrEvenResult.push('even');
    } else {
      oddOrEvenResult.push('odd');
    }
  }
  return oddOrEvenResult;
}
