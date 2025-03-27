/*
# 🐸 Frog River One (Codility) - Greedy Algorithm with Set

## 📌 Problem Description:
- A frog starts at position `0` and wants to reach position `X` by jumping across a river.
- Leaves fall at different positions at specific times (`A[k]` falls at second `k`).
- The frog can jump **only when all positions from `1` to X are covered** with at least one leaf.
- The goal is to **find the earliest second** `k` when the frog can cross.
- If it is never possible to cross, return `-1`.

## ✅ When to use:
- If you need to determine the **earliest time** when all positions **1 to X** are covered.
- If the problem involves **tracking unique elements** in a range.

## ✅ Key Concepts:
- **Greedy Approach**: Stop as soon as all positions are covered.
- **Set Data Structure**: Tracks unique leaf positions efficiently.
- **Early Exit Optimization**: Break as soon as all positions are covered.

## 🚨 Edge Cases:
- If `X` is **never fully covered**, return `-1`.
- If `X = 1` and `A[0] = 1`, return `0` (frog crosses immediately).
- Large inputs: Ensure **O(N) complexity** is maintained.

## ⏳ Complexity:
- **Time Complexity: O(N)**
- **Space Complexity: O(X)**
---
*/

function solution(X: number, A: number[]): number {
  let answer = -1; // 🟠 Default to -1 (frog can't cross)
  const leaves = new Set<number>(); // 🍃 Set to track unique positions

  for (let k = 0; k < A.length; k++) {
    if (A[k] <= X) {
      // ✅ Only add leaves in the valid range [1, X]
      leaves.add(A[k]);
    }

    if (leaves.size === X) {
      // 🎯 If all positions are covered, return time `k`
      answer = k;
      break; // 🔥 Early exit for efficiency
    }
  }

  return answer;
}
