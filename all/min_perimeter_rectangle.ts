/*
# Min Perimeter Rectangle (Codility) - Divisor Pair Search

## Problem Description:
- Given a positive integer `N`, find the **minimum perimeter** of a rectangle whose area equals `N` and sides are integers.
- That is, for all pairs `(A, B)` such that `A * B = N`, find the pair with the **minimum perimeter = 2 * (A + B)`.

## Key Concepts:
- **Divisor Pair Enumeration**:
  - For every `i` from `1` to `sqrt(N)`, check if `i` divides `N`.
  - If so, `A = i` and `B = N / i` is a valid side pair.
  - Compute the perimeter: `2 * (A + B)` and track the minimum.
- **Why Only Up to sqrt(N)?**
  - If `i > sqrt(N)`, then `(N / i) < sqrt(N)` → already considered.
  - Avoids duplicate and unnecessary checks.

## Edge Cases:
- `N = 1`: Smallest possible rectangle → sides = 1, perimeter = 4.
- `N` is a perfect square → best perimeter is when `A = B = sqrt(N)`.
- Large values of `N`: ensure the loop only goes up to `sqrt(N)` to keep performance optimal.

## Complexity:
- **Time Complexity: O(sqrt(N))**
- **Space Complexity: O(1)**
---
*/

function solution(N: number): number {
  let result = Infinity;

  let i = 1;
  while (i * i <= N) {
    if (N % i === 0) {
      // i is one side, N/i is the other
      const perimeter = 2 * (i + N / i);
      result = Math.min(result, perimeter);
    }
    i++;
  }

  return result;
}
