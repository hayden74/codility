/*
# Max Slice Sum (Codility) - Handling All Negative Numbers

## Problem Description:
- Given an array `A` of `N` integers (both positive and negative), find the **maximum sum of any contiguous subarray**.
- If all numbers are **negative**, return the **largest single negative number**.
- Otherwise, return the **maximum slice sum**.

## Key Concepts:
- **Kadane’s Algorithm (Modified)**:
  - Uses a **greedy approach** to track the maximum sum ending at each position (`endSlice`).
  - Maintains a running **max sum (`maxSum`)** encountered so far.
  - Tracks **largest negative number (`minNegative`)** in case all numbers are negative.
- **Why This Works**:
  - If the array contains **positive numbers**, Kadane's algorithm correctly finds the maximum subarray sum.
  - If the array contains **only negatives**, returning the **largest (least negative) number** is the best option.

## Edge Cases:
- If `A` contains only **one number**, return `A[0]`.
- If `A` contains **all negative numbers**, return the **largest single negative number**.
- If `A` is already **non-negative**, return the sum of the **largest subarray**.

## Complexity:
- **Time Complexity: O(N)** (Single pass through `A`).
- **Space Complexity: O(1)** (Only uses three integer variables).
---
*/

function solution(A: number[]): number {
  if (A.length === 1) return A[0]; // Edge case: Single element

  let endSlice = 0;
  let maxSum = A[0];
  let minNegative = -Infinity; // Track the least negative number

  for (let a of A) {
    endSlice = Math.max(0, endSlice + a); // Extend subarray sum or reset to 0
    maxSum = Math.max(maxSum, endSlice); // Update max sum
    if (a < 0) {
      minNegative = Math.max(minNegative, a); // Track largest negative
    }
  }

  return maxSum > 0 ? maxSum : minNegative; // If no positive sum found, return largest negative
}

// MaxSliceSum - 84% performance O(N**3)
function solution2(A: number[]): number {
  const n = A.length;
  let sum = 0;
  let maxSum = undefined;
  for (let i = 0; i < n; i++) {
    sum = 0;
    for (let j = i; j < n; j++) {
      sum += A[j];
      maxSum = Math.max(maxSum ? maxSum : sum, sum);
    }
  }

  return maxSum;
}
