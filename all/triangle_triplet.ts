/*
# 🔺 Triangle Triplet (Codility) - Sorting Approach

## 📌 Problem Description:
- Given an array `A` of `N` integers, determine if there **exists a triplet `(P, Q, R)`** forming a **triangular triplet**.
- A **triangular triplet** satisfies:
  \[
  A[P] + A[Q] > A[R]
  \]
  for three distinct indices `P, Q, R`, where `P < Q < R`.
- Return `1` if such a triplet exists, otherwise return `0`.

## ✅ Key Concepts:
- **Sorting Optimization**:
  - **After sorting**, a triplet `A[i], A[i+1], A[i+2]` forms a triangle **if and only if**:
    \[
    A[i] + A[i+1] > A[i+2]
    \]
  - If **this condition is met**, return `1` immediately.
- **Why Only Consecutive Elements?**
  - Sorting ensures that **A[i] ≤ A[i+1] ≤ A[i+2]**, so:
    - If **A[i] + A[i+1] ≤ A[i+2]**, **no larger elements can work**.
    - Checking only **consecutive triplets** is sufficient.

## 🚨 Edge Cases:
- If `A.length < 3`, return `0` (A triangle requires three sides).
- If all elements are **negative**, it behaves the same (ordering matters, not positivity).
- If all elements are **too small** (`A[i] + A[i+1] ≤ A[i+2]` for all `i`), return `0`.

## ⏳ Complexity:
- **Time Complexity: O(N log N)** (Sorting dominates).
- **Space Complexity: O(1)** (In-place sorting).
---
*/
 
function solution(A: number[]): number {
  const n = A.length;
  if (n < 3) return 0; // 🚨 A triangle requires at least 3 elements

  A = A.sort((a, b) => a - b); // 🔢 Step 1: Sort array in ascending order

  const isTriangular = (p: number, q: number, r: number): boolean => p + q > r;

  // 🔄 Step 2: Check consecutive triplets
  for (let i = 0; i < n - 2; i++) {
    if (isTriangular(A[i], A[i + 1], A[i + 2])) return 1; // ✅ Found a valid triplet
  }

  return 0; // ❌ No valid triplet found
}
