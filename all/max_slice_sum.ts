/*
# Max Slice Sum (Codility) - Kadane’s Algorithm

## Problem Description:
- Given an array `A` of `N` integers (both positive and negative), find the **maximum sum of any contiguous subarray**.
- Return the **maximum slice sum**.

## Key Concepts:
- **Kadane’s Algorithm**:
  - Uses a **greedy approach** to track the maximum sum ending at each position.
  - Maintains a running sum (`maxEnding`), ensuring it never drops below zero.
  - Tracks the **global maximum sum (`maxSlice`)** encountered.
- **Why This Works**:
  - If a running sum (`maxEnding`) becomes negative, it is reset to zero, as extending it further will only reduce future sums.

## Edge Cases:
- If `A` contains only **negative numbers**, return the **largest element** instead of resetting to zero.
- If `A` is already **non-negative**, return the sum of all elements.
- Large inputs: Ensure **O(N) complexity** is maintained.

## Complexity:
- **Time Complexity: O(N)** (Single pass through `A`).
- **Space Complexity: O(1)** (Only uses two integer variables).
---
*/

function maxSlice(A: number[]): number {
  let maxEnding = 0;
  let maxSlice = -Infinity; // Initialize with the smallest possible value to handle all-negative cases

  for (let a of A) {
    maxEnding = Math.max(a, maxEnding + a); // Take the maximum of extending or starting fresh
    maxSlice = Math.max(maxSlice, maxEnding); // Update global max
  }

  return maxSlice;
}
