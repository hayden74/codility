/*
# Brackets Validity (Codility) - Using Stack

## Problem Description:
- Given a string `S` consisting of only one type of bracket: `'('` and `')'`, determine if it is **properly nested**.
- Return `1` if the string is a valid sequence of **balanced brackets**, else return `0`.

## Key Concepts:
- **Stack-Based Matching**:
  - Push **opening brackets** onto a stack.
  - For **closing brackets**, ensure there is a matching opening bracket at the top of the stack.
- At the end, the stack should be **empty** if all brackets are properly matched.

## Rules for a Valid Bracket Sequence:
- The number of opening and closing brackets must match.
- At no point should there be **more closing brackets than opening** ones.
- The brackets must be **properly nested**.

## Edge Cases:
- Empty string (`""`) is considered **valid**, return `1`.
- A single bracket (`"("` or `")"`) is **invalid**, return `0`.
- Multiple unmatched opening or closing brackets → invalid.

## Complexity:
- **Time Complexity: O(N)** — Each character is pushed/popped at most once.
- **Space Complexity: O(N)** — Stack may hold up to all opening brackets in the worst case.
---
*/

function solution(S: string): number {
    const stack: string[] = [];

    for (const char of S) {
        // Push opening brackets to stack
        if (char === '(') {
            stack.push(char);
        } else {
            // If it's a closing bracket, the stack must not be empty
            if (stack.length === 0) return 0;

            const top = stack.pop();

            // Check for correct matching
            if (char === ')' && top !== '(') return 0;
        }
    }

    // Stack must be empty if brackets are properly closed
    return stack.length === 0 ? 1 : 0;
}
