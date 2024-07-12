export function countVowels(str: string): number {
  str = str.toLocaleLowerCase();
  let count = 0;
  const vowel = 'aeiou';

  for (let i = 0; i < str.length; i++) {
    if (vowel.includes(str[i])) {
      count++;
    }
  }
  return count;
}
