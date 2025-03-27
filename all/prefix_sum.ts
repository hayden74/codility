/*
# ➕ Prefix Sum (Codility) - Efficient Range Sum Queries

## 📌 Problem Description:
- Given an array `A`, compute the **prefix sum array** `P` where:
  - `P[i]` stores the sum of elements from `A[0]` to `A[i-1]`.
- This allows **fast range sum calculations**:
  \[
  \text{sum}(L, R) = P[R + 1] - P[L]
  \]
- **Why use prefix sums?**
  - Instead of recomputing sums in `O(N)`, prefix sums allow `O(1)` range queries.
  - This is **useful in problems requiring multiple range sum queries**.

## ✅ Key Concepts:
- **Efficient Range Sum Queries**: Compute sums in `O(1)`.
- **Precompute in O(N)**: Construct the prefix sum array in **linear time**.
- **Zero-Indexed Adjustment**: `P[i]` represents sum **up to (but not including) `i`**.

## 🚨 Edge Cases:
- If `A` is **empty**, return `[0]`.
- If `A` has **one element**, the prefix sum should be `[0, A[0]]`.
- Large arrays: Ensure **O(N) complexity** is maintained.

## ⏳ Complexity:
- **Time Complexity: O(N)**
- **Space Complexity: O(N)**
---
*/

function prefixSum(A: number[]): number[] {
    const n = A.length;
    const P: number[] = new Array(n + 1).fill(0); // 🔢 Initialize prefix sum array with zeros
  
    for (let k = 1; k < P.length; k++) {
      P[k] = P[k - 1] + A[k - 1]; // ➕ Cumulative sum (sum up to index `k-1` in A)
    }
  
    return P;
  }
  