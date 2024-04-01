/* exported swapChars */

function swapChars(
  firstIndex: number,
  secondIndex: number,
  string: string
): string {
  const chars = string.split('');
  const charSwap = chars[firstIndex];
  chars[firstIndex] = chars[secondIndex];
  chars[secondIndex] = charSwap;
  return chars.join('');
}
