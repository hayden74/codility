/*
# Missing Integer (Codility) - Cyclic Sort Approach

## Problem Description:
- Given an unsorted array `A` of `N` integers, find the **smallest positive integer (greater than 0)** that does not occur in `A`.
- For example:
  - `[1, 3, 6, 4, 1, 2]` → return `5`
  - `[1, 2, 3]` → return `4`
  - `[-1, -3]` → return `1`

## Key Concepts:
- **Cyclic Sort (In-Place Hashing)**:
  - Rearrange the array so that **value `x` is placed at index `x - 1`**.
  - For valid values (`1 ≤ A[i] ≤ N`), **swap them to their correct positions**.
  - After rearrangement, **first index `i` where `A[i] !== i + 1`** is the missing positive number.

## Why It Works:
- We only care about the **first `N` positive integers**, since the missing number must be in `[1..N+1]`.
- This approach places values at their **ideal positions**, allowing an **O(N)** solution without extra space.

## Edge Cases:
- If all numbers from `1` to `N` are present → return `N + 1`.
- If `A` contains only **negative values or values > N**, return `1`.
- Duplicates and invalid values are **ignored safely**.

## Complexity:
- **Time Complexity: O(N)** (Each element is swapped at most once).
- **Space Complexity: O(1)** (In-place rearrangement).
---
*/

function solution(A: number[]): number {
  const n = A.length;
  let i = 0;

  // Step 1: Place each number in its correct position using cyclic sort
  while (i < n) {
    const correctPos = A[i] - 1;

    if (
      A[i] > 0 &&
      A[i] <= n &&
      A[i] !== A[correctPos]
    ) {
      [A[i], A[correctPos]] = [A[correctPos], A[i]]; // Swap to correct position
    } else {
      i++;
    }
  }

  // Step 2: Find the first position where the value is incorrect
  for (let i = 0; i < n; i++) {
    if (A[i] !== i + 1) return i + 1;
  }

  // Step 3: If all values are in correct positions, return n + 1
  return n + 1;
}
