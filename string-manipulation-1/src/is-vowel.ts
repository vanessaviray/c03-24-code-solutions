/* exported isVowel */

function isVowel(char: string): boolean {
  char = char.toLowerCase();
  if (['a', 'e', 'i', 'o', 'u'].includes(char)) {
    return true;
  } else {
    return false;
  }
}
