/*
# First Unique Element - Frequency Count with Map

## Problem Description:
- Given an array `A` of integers, return the **first element that occurs only once**.
- If **no unique element** exists, return `-1`.

## Key Concepts:
- **Hash Map for Counting**:
  - Use a `Map<number, number>` to count occurrences of each element.
- **Two Pass Solution**:
  1. First pass: count all occurrences.
  2. Second pass: return the **first element with count = 1**.

## Edge Cases:
- Empty array → return `-1`.
- All elements are duplicates → return `-1`.
- First element is the only unique one → return it.

## Complexity:
- **Time Complexity: O(N)**
  - One pass for counting, one pass to find the first unique → total linear time.
- **Space Complexity: O(N)**
  - Stores counts of each distinct number in the array.
---
*/

function solution(A: number[]): number {
  const n = A.length;
  let answer = -1;
  const count = new Map<number, number>();

  // First pass: count frequency of each number
  for (let i = 0; i < n; i++) {
    count.set(A[i], (count.get(A[i]) || 0) + 1);
  }

  // Second pass: find the first number with count === 1
  for (const [value, frequency] of count.entries()) {
    if (frequency === 1) return value;
  }

  return answer;
}
