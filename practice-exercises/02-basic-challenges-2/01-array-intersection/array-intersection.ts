export function arrayIntersection(arr1: unknown[], arr2: unknown[]): unknown[] {
  const intersection: unknown[] = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !intersection.includes(arr1[i])) {
      intersection.push(arr1[i]);
    }
  }

  return intersection;
}
