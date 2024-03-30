/* exported setValue */

function setValue(
  object: Record<string, unknown>,
  key: string,
  value: any
): object {
  object[key] = value;
  return object;
}
