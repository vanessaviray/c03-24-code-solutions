/* exported truncate */

function truncate(length: number, string: string): string {
  if (string.length === 0) {
    return '...';
  } else if (string.length <= length) {
    return string + '...';
  } else {
    return string.slice(0, length) + '...';
  }
}
