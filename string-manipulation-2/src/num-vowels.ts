/* exported numVowels */

function numVowels(string: string): number {
  const vowels = 'aeiouAEIOU';
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      count++;
    }
  }
  return count;
}
