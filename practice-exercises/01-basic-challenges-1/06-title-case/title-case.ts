export function titleCase(str: string): string {
  const words = str.toLocaleLowerCase().split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toLocaleUpperCase() + words[i].slice(1);
  }
  return words.join(' ');
}
