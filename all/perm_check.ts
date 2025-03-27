/*
# 🔢 Permutation Check (Codility) - Using a Set

## 📌 Problem Description:
- Given an array `A` of `N` integers, determine if it contains **a full permutation of numbers from `1 to N`**.
- A **permutation** is a sequence that contains every number exactly **once** within the range `[1, N]`.

## ✅ Key Concepts:
- **Set for Unique Elements**: A `Set` is used to track seen numbers.
- **Early Exit Optimization**: If a number is **out of range** (`<1` or `>N`), return `0` immediately.
- **Final Check**: The array is a permutation if the `Set` contains exactly `N` elements.

## 🚨 Edge Cases:
- If `A` is **missing a number**, return `0`.
- If `A` has **duplicate numbers**, return `0`.
- If `A` contains numbers **outside the range `[1, N]`**, return `0`.
- If `A = [1]`, return `1` (trivially a permutation).

## ⏳ Complexity:
- **Time Complexity: O(N)**
- **Space Complexity: O(N)**
---
*/

function solution(A: number[]): number {
  const N = A.length;
  const seenNumbers = new Set<number>();

  for (const num of A) {
    if (num < 1 || num > N) {
      return 0; // 🚨 Out of range: Not a permutation
    }
    seenNumbers.add(num); // ✅ Store unique values
  }

  return seenNumbers.size === N ? 1 : 0; // 🎯 If size matches N, it's a permutation
}
