/*
# Max Profit (Codility) - Single Pass Solution

## Problem Description:
- Given an array `A` where `A[i]` represents the stock price on day `i`, find the **maximum profit** possible.
- You can only **buy once and sell once**.
- Return the **maximum profit** or `0` if no profitable transaction is possible.

## Key Concepts:
- **Greedy Algorithm**:
  - Keep track of the **lowest price seen so far** (`lowestPrice`).
  - On each day, calculate the **potential profit** if selling at `A[i]`.
  - Update the **max profit** whenever a better profit is found.
- **Why This Works**:
  - Since **buying must happen before selling**, we track the **lowest price before each day**.
  - This ensures `maxProfit` is always calculated with a valid **buy-before-sell** transaction.

## Edge Cases:
- If `A` is **empty**, return `0` (no transaction possible).
- If `A` contains only **one price**, return `0` (not enough data to buy & sell).
- If prices **only decrease**, return `0` (no profit possible).
- If prices **only increase**, return `A[n-1] - A[0]`.

## Complexity:
- **Time Complexity: O(N)** (Single pass through `A`).
- **Space Complexity: O(1)** (Only two integer variables).
---
*/

function solution(A: number[]): number {
    const n = A.length;
    if (n === 0) return 0; // Edge case: No prices
  
    let lowestPrice = Infinity;
    let maxProfit = 0;
  
    for (let a of A) {
      lowestPrice = Math.min(lowestPrice, a); // Update lowest price seen so far
      maxProfit = Math.max(maxProfit, a - lowestPrice); // Calculate and update max profit
    }
  
    return maxProfit;
  }
  