/* exported omit */

function omit(source: Record<string, unknown>, keys: string[]): object {
  const result: any = {};
  for (const key in source) {
    if (!keys.includes(key)) {
      result[key] = source[key];
    }
  }
  return result;
}
