export function findMissingLetter(arr: string[]): string | undefined {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const startIndex = alphabet.indexOf(arr[0]);

  for (let i = 0; i < arr.length; i++)
    if (arr[i] !== alphabet[startIndex + i]) {
      return alphabet[startIndex + i];
    }

  return undefined;
}
