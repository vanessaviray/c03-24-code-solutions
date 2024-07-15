export function findMissingNumber(arr: number[]): number | undefined {
  if (!arr || arr.length === 0) {
    return undefined;
  }

  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;

  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }

  return expectedSum - actualSum;
}
