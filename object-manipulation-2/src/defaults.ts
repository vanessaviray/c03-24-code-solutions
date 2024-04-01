/* exported defaults */

function defaults(
  target: Record<string, unknown>,
  source: Record<string, unknown>
): any {
  for (const key in source) {
    let isInTarget = false;
    for (const targetKey in target) {
      if (targetKey === key) {
        isInTarget = true;
        break;
      }
    }
    if (!isInTarget) {
      target[key] = source[key];
    }
  }
}
