/*
# Symmetric Center Index - String Palindrome Check

## Problem Description:
- Given a string `S`, return the index `i` such that:
  - Removing character `S[i]` results in a **symmetric string** (left part is the reverse of the right part).
- Return `-1` if no such index exists.

## Assumptions:
- Only consider **odd-length** strings (since one character is removed to potentially balance symmetry).
- The center index `i = floor(S.length / 2)` is the natural candidate to test first.
- The symmetry condition is:
  - `S[0..i-1]` reversed should equal `S[i+1..n-1]`

## Key Concepts:
- **String manipulation**: Use `substr()` or `slice()` to extract left and right substrings.
- **Reverse comparison**: Check if one side is the reverse of the other.
- **Early return**: Immediately return `i` if symmetry is found.

## Edge Cases:
- Empty string → return `-1`.
- String with one character → removing it results in empty string, which is symmetric → return `0`.
- No center character produces symmetry → return `-1`.

## Complexity:
- **Time Complexity: O(N)** (due to string slicing and reversing).
- **Space Complexity: O(N)** (for intermediate strings and reversed copies).
---
*/

function solution(S: string): number {
  if (S.length === 0) return -1;
  if (S.length === 1) return 0;

  const n = S.length;
  const half = Math.floor(n / 2);

  const left = S.substr(0, half); // First half
  const right = S.substr(half + 1); // Second half (after middle character)

  // Check if left reversed == right
  if (left.split("").reverse().join("") === right) return half;

  return -1;
}

// this work if the index not in the middle and can be anywherre
function solution2(S: string): number {
  if (S.length == 0) return -1;
  if (S.length == 1) return 0;

  let left = S[0];
  let right = S.substr(1);

  for (let i = 1; i < S.length; i++) {
    right = right.slice(1);
    if (left.split("").reverse().join("") === right) return i;
    left += S[i];
  }

  return -1;
}
