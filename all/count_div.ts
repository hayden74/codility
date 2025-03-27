/*
# ➗ Count Divisible Numbers (Codility) - Math Optimization

## 📌 Problem Description:
- Given integers `A`, `B`, and `K`, count the numbers **in the range `[A, B]`** that are **divisible by `K`**.
- The function should return the count efficiently **without looping**.

## ✅ Key Concepts:
- **Mathematical Formula for Counting Multiples**:
  - The number of integers **≤ B** that are divisible by `K` is:
  
      count = ⌊ B / K ⌋
  
  - The number of integers **< A** that are divisible by `K` is:
  
      count = ⌊ (A - 1) / K ⌋
  
  - The count of numbers **in [A, B]** is the difference:
  
      ⌊ B / K ⌋ - ⌊ (A - 1) / K ⌋

## 🚨 Edge Cases:
- If `A = B`, check if `A` is divisible by `K` (return `1` or `0`).
- If `K > B`, return `0` (no numbers in range are divisible by `K`).
- Large numbers: Ensure **O(1) time complexity** is maintained.

## ⏳ Complexity:
- **Time Complexity: O(1)** (Constant time calculation).
- **Space Complexity: O(1)** (Only uses a few integer variables).
---
*/

function solution(A: number, B: number, K: number): number {
  return Math.floor(B / K) - Math.floor((A - 1) / K); // ➗ Count divisible numbers using the formula
}

// to list the numbers
function solution(A: number, B: number, K: number): number {
  let result = 0;
  const first = A + ((K - (A % K)) % K);
  for (let i = first; i <= B; i += K) {
    result++;
  }

  return result;
}
