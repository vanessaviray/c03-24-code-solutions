/* exported addSuffixToAll */

function addSuffixToAll(words: string[], suffix: string): string[] {
  const addSuffix = [];
  for (let index = 0; index < words.length; index++) {
    const newWord = (words[index] += suffix);
    addSuffix.push(newWord);
  }
  return addSuffix;
}
