export function isPalindrome(str: string): boolean {
  const formattedStr = str.toLocaleLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedStr = formattedStr.split('').reverse().join('');
  return formattedStr === reversedStr;
}
