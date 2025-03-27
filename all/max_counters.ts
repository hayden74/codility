/*
# 📊 Max Counters (Codility) - Efficient Counter Updates

## 📌 Problem Description:
- You have `N` counters, initially set to `0`.
- There are two types of operations given in an array `A`:
  1. `A[k] = X (1 ≤ X ≤ N)`: Increment counter `X` by `1`.
  2. `A[k] = N + 1`: Set **all counters** to the current maximum value.
- The goal is to efficiently process the operations and return the final counter values.

## ✅ Key Concepts:
- **Lazy Propagation Optimization**: Instead of updating all counters on `maxCounter` operations (which is slow), we:
  - Track a **lazy max** value (`maxCounter`).
  - Apply it **only when necessary** to avoid unnecessary updates.
- **Efficient Array Updates**: Avoid O(N²) brute force updates by **applying the lazy max only when a counter is updated**.

## 🚨 Edge Cases:
- If `A` contains only `N + 1` operations, all counters should be set to the **last maxCounter value**.
- If `A` contains only increments, normal counting should work.
- If `N = 1`, the logic still holds with a single counter.

## ⏳ Complexity:
- **Time Complexity: O(N + M)** (Optimal)
- **Space Complexity: O(N)**
---
*/

function solution(N: number, A: number[]): number[] {
  const counters = new Array(N).fill(0); // 📊 Initialize N counters with 0
  let max = 0; // 🔝 Tracks the current max counter value
  let maxCounter = 0; // 🏷️ Tracks the last "max counter" operation

  for (let k = 0; k < A.length; k++) {
    if (A[k] === N + 1) {
      // 🔥 "Max counter" operation
      maxCounter = max; // 🏷️ Store the latest max value (lazy update)
    } else {
      // 🔼 Normal counter increment
      const index = A[k] - 1; // Convert 1-based index to 0-based

      // 🛠️ Apply the "lazy max" to any counter that hasn't been updated recently
      if (counters[index] < maxCounter) {
        counters[index] = maxCounter;
      }

      counters[index] += 1; // ✅ Increment the counter
      max = Math.max(max, counters[index]); // 🔝 Update max counter if needed
    }
  }

  // 🎯 Final pass to apply lazy updates to counters that were never incremented after maxCounter
  for (let i = 0; i < N; i++) {
    if (counters[i] < maxCounter) {
      counters[i] = maxCounter;
    }
  }

  return counters;
}
