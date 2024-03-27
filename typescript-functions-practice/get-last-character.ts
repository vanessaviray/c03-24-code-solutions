/* exported getLastCharacter */
function getLastCharacter(string: string): string {
  const lastCharIndex: number = string.length - 1;
  const lastChar: string = string.charAt(lastCharIndex);
  return lastChar;
}
