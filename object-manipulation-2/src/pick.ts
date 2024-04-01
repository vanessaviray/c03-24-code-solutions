/* exported pick */

function pick(source: Record<string, unknown>, keys: string[]): object {
  const result: any = {};
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (source[key] !== undefined) {
      result[key] = source[key];
    }
  }
  return result;
}
