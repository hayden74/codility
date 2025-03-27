/*
# 📉 Min Avg Two Slice (Codility) - Using Prefix Sums

## 📌 Problem Description:
- Given an array `A`, find the starting position of the **slice with the lowest average**.
- A slice `(P, Q)` is a contiguous subarray where `0 ≤ P ≤ Q < N`.
- The goal is to **return the smallest index `P`** of the slice with the minimum average.

## ✅ Key Concepts:
- **Prefix Sum Optimization**: Enables O(1) slice sum calculation.
- **Why Only Length 2 & 3?**:
  - If a longer slice has the **lowest average**, a smaller slice within it will also have the **same or lower** average.
  - It is **sufficient to check slices of size 2 and 3** to guarantee correctness.

## 🚨 Edge Cases:
- If `A` contains only **two elements**, return `0` (smallest slice is `A[0..1]`).
- If `A` contains **all equal elements**, return `0` (any slice has the same average).
- Negative numbers: Ensure prefix sum calculations handle them correctly.

## ⏳ Complexity:
- **Time Complexity: O(N)** (Efficient, only one pass for prefix sums and one for slice comparisons).
- **Space Complexity: O(N)** (Stores prefix sums).
---
*/

function solution(A: number[]): number {
  const n = A.length;
  const prefixSum = new Array(n + 1).fill(0);

  // 🧮 Step 1: Compute Prefix Sums (O(N))
  for (let i = 1; i <= n; i++) {
    prefixSum[i] = prefixSum[i - 1] + A[i - 1];
  }

  // 🎯 Helper function to compute the average of a slice in O(1)
  const getAverage = (start: number, end: number): number => {
    const divideBy = end + 1 - start;
    return (prefixSum[end + 1] - prefixSum[start]) / divideBy;
  };

  let minAvg = Infinity;
  let pos = -1;

  let x = 1;
  while (x < 3) {
    // 🔄 Step 2: Check slices of size 2 and 3 only (O(N))
    for (let i = 0; i < n - x; i++) {
      const avg = getAverage(i, i + x);
      if (avg < minAvg) {
        minAvg = avg;
        pos = i;
      }
    }
    x++;
  }

  return pos;
}
