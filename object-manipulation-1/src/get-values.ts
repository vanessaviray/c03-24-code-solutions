/* exported getValues */
function getValues(object: Record<string, unknown>): any[] {
  const getValuesArray: any[] = [];
  for (const key in object) {
    getValuesArray.push(object[key]);
  }
  return getValuesArray;
}
