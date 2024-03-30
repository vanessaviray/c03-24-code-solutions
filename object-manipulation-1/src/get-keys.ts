/* exported getKeys */
function getKeys(object: Record<string, unknown>): any[] {
  const getKeysArray: string[] = [];
  for (const prop in object) {
    getKeysArray.push(prop);
  }
  return getKeysArray;
}
