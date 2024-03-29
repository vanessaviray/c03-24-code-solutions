/* exported filterOutNulls */

function filterOutNulls(values: unknown[]): any[] {
  const filteredValues = [];
  for (let index = 0; index < values.length; index++) {
    if (values[index] !== null) {
      filteredValues.push(values[index]);
    }
  }
  return filteredValues;
}
