function minSubarrayLen(target: number, nums: number[]): number {
  let sum = 0,
    left = 0,
    minLen = Infinity;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= nums[left++];
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubarrayLen(7, [2, 3, 1, 2, 4, 3]))