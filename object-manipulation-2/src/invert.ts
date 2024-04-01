/* exported invert */

function invert(source: Record<string, unknown>): object {
  const inverted: Record<string, unknown> = {};
  for (const key in source) {
    const value: any = source[key];
    if (typeof value !== 'object') {
      inverted[value] = key;
    }
  }
  return inverted;
}
