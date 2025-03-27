/*
# Longest Valid Password (Codility) - String Parsing & Regex

## Problem Description:
- Given a string `S` with multiple space-separated "password candidates", return the length of the **longest valid password**.
- If no valid password exists, return `-1`.

## Password Validity Rules:
1. The password must consist of **only alphanumeric characters** (letters and digits).
2. The number of **letters must be even**.
3. The number of **digits must be odd**.

## Key Concepts:
- **String Splitting**: Break input string by whitespace using `.split(" ")`.
- **Regex Matching**:
  - `/^[a-zA-Z0-9]+$/` → ensures the string is alphanumeric.
  - `[a-zA-Z]` and `[0-9]` → to count letters and digits respectively.
- **Tracking Maximum Length**:
  - Only update the answer if the password is valid and longer than previous ones.

## Edge Cases:
- Input string is empty → return `-1`.
- No valid passwords → return `-1`.
- All passwords invalid due to special characters, rule violations, etc.

## Complexity:
- **Time Complexity: O(N)** — where N is the length of the string (each character visited once).
- **Space Complexity: O(1)** — no extra data structures except for a few counters.
---
*/

function solution(S: string): number {
  const passwords = S.split(" ");
  let answer = -1;

  for (let pwd of passwords) {
    if (isValid(pwd)) {
      answer = Math.max(answer, pwd.length);
    }
  }

  return answer;
}

// Helper function to validate each password against the rules
function isValid(input: string): boolean {
  // Rule 1: Must be alphanumeric only
  if (!/^[a-zA-Z0-9]+$/.test(input)) return false;

  // Count letters and digits
  const letters = (input.match(/[a-zA-Z]/g) || []).length;
  const digits = (input.match(/[0-9]/g) || []).length;

  // Rule 2: Even number of letters
  if (letters % 2 !== 0) return false;

  // Rule 3: Odd number of digits
  if (digits % 2 === 0) return false;

  return true;
}
