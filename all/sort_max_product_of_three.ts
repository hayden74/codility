/*
# ✖️ Max Product of Three (Codility) - Sorting Approach

## 📌 Problem Description:
- Given an array `A` of `N` integers, find the **highest possible product** of any three numbers.
- Return the **maximum product** of three numbers.

## ✅ Key Concepts:
- **Sorting Optimization**: Once sorted, the highest product can be derived from:
  - **`max1 = A[n-1] * A[n-2] * A[n-3]`** → Top 3 largest numbers.
  - **`max2 = A[n-1] * A[0] * A[1]`** → Largest number and two smallest (for handling negatives).
- **Handling Negative Numbers**:
  - If two **negative numbers** exist, multiplying them together makes a large positive number.
  - The product of the **two smallest (negative) numbers and the largest positive** may be greater than the product of the three largest numbers.

## 🚨 Edge Cases:
- If `A.length === 3`, return `A[0] * A[1] * A[2]` directly.
- If `A` contains **all positive numbers**, return the top 3 highest numbers.
- If `A` contains **all negative numbers**, return the top 3 highest (least negative).
- If `A` contains **mixed positive and negative numbers**, consider both product cases.

## ⏳ Complexity:
- **Time Complexity: O(N log N)** (Sorting dominates).
- **Space Complexity: O(1)** (In-place sorting).
---
*/
function solution(A: number[]): number {
  A = A.sort((a, b) => a - b);
  const n = A.length;

  const max1 = A[0] * A[1] * A[n - 1];
  const max2 = A[n - 1] * A[n - 2] * A[n - 3];

  return Math.max(max1, max2);
}
