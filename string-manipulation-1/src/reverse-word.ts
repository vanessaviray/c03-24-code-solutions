/* exported reverseWord */
function reverseWord(word: string): string {
  if (word === '') {
    return '';
  } else {
    return reverseWord(word.substring(1)) + word.charAt(0);
  }
}
