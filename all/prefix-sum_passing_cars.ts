/*
# 🚗 Passing Cars (Codility) - Prefix Sum Counting

## 📌 Problem Description:
- You are given an array `A` of `0`s and `1`s:
  - `0` represents an **eastward-moving** car.
  - `1` represents a **westward-moving** car.
- A **pair `(P, Q)`** is valid if:
  - `P < Q`
  - `A[P] = 0` (east) and `A[Q] = 1` (west)
- The goal is to count all valid passing pairs.

## ✅ Key Concepts:
- **Prefix Sum Counting**: Count how many `0`s (`east` cars) exist **before each `1` (`west` car)**.
- **Efficient O(N) Iteration**: Instead of checking all pairs (O(N²)), keep a **running count** of `east` cars.
- **Early Termination**: If the count exceeds `1,000,000,000`, return `-1`.

## 🚨 Edge Cases:
- If the array has only `0`s or only `1`s → return `0` (no pairs exist).
- If there are alternating `0`s and `1`s, all `0`s before a `1` contribute to pairs.
- Large arrays: Ensure **O(N) complexity** is maintained.

## ⏳ Complexity:
- **Time Complexity: O(N)**
- **Space Complexity: O(1)**
---
*/

function solution(A: number[]): number {
  let pairs = 0; // 🏆 Count of passing car pairs
  let east = 0; // 🚗 Tracks the number of eastward cars seen so far

  for (let p = 0; p < A.length; p++) {
    if (A[p] === 0) {
      east++; // ✅ Every `0` will contribute to future passing pairs
    } else {
      pairs += east; // 🎯 Each `1` pairs with all previous `0`s
    }

    if (pairs > 1_000_000_000) return -1; // 🚨 Early termination for large cases
  }

  return pairs;
}

// my solution
function solution(A: number[]): number {
  const n = A.length;
  const prefixSum = new Array(n + 1).fill(0);
  let passingCars = 0;
  for (let i = 1; i < prefixSum.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + (A[i - 1] == 0 ? 1 : 0);
  }
  for (let i = 1; i < prefixSum.length; i++) {
    passingCars += A[i - 1] == 1 ? prefixSum[i] : 0;
  }

  if (passingCars > 1_000_000_000) return -1;

  return passingCars;
}

function solution2(A: number[]): number {
  const n = A.length;
  let answer = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (A[i] < A[j]) {
        answer++;
        //  console.log(i, ',', j, ' = [', A[i], ',', A[j], ']')
      }
    }
  }

  return answer;
}
