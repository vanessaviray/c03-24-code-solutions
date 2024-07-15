export function twoSum(nums: number[], target: number): [] | [number, number] {
  const numSet = new Set();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numSet.has(complement)) {
      return [nums.indexOf(complement), i];
    }
    numSet.add(nums[i]);
  }

  return [];
}
