/*
# Maximum Number of Sock Pairs (Laundry Problem)

## Problem Description:
- You are given:
  - `K`: the maximum number of socks that can be washed.
  - `C[]`: an array representing clean socks.
  - `D[]`: an array representing dirty socks.
- The goal is to maximize the number of **clean sock pairs** after optionally washing up to `K` dirty socks.

## Rules:
1. **Clean-clean** pairs don't require washing.
2. You can wash up to `K` dirty socks.
3. **You can match an unpaired clean sock with a dirty sock of the same type** by washing just one dirty sock.
4. **You can wash two dirty socks of the same type** to create a new pair (costs 2 washes).

## Strategy:
- Step 1: Count pairs from clean socks directly.
- Step 2: Try to match single clean socks with matching dirty socks (1 wash each).
- Step 3: Use remaining washes to clean dirty-dirty pairs (2 washes per pair).

## Complexity:
- Time: O(N + M) where N is clean sock count and M is dirty sock count.
- Space: O(U), where U is the number of unique sock types.
---
*/

function solution(K: number, C: number[], D: number[]): number {
    // Count occurrences of each sock using a map
    function countSocks(socks: number[]): Map<number, number> {
      const count = new Map<number, number>();
      for (const sock of socks) {
        count.set(sock, (count.get(sock) || 0) + 1);
      }
      return count;
    }
  
    const cleanCount = countSocks(C);
    const dirtyCount = countSocks(D);
  
    let pairs = 0;
    let washesUsed = 0;
  
    // Step 1: Count clean-clean pairs and track leftovers
    for (const [sock, count] of cleanCount.entries()) {
      const pairCount = Math.floor(count / 2);
      pairs += pairCount;
      cleanCount.set(sock, count % 2); // 1 means there's one unmatched sock left
    }
  
    // Step 2: Pair remaining clean singles with dirty socks of same type
    for (const [sock, count] of cleanCount.entries()) {
      if (count === 1 && dirtyCount.has(sock) && dirtyCount.get(sock)! > 0 && washesUsed < K) {
        pairs++;
        dirtyCount.set(sock, dirtyCount.get(sock)! - 1);
        washesUsed++;
      }
    }
  
    // Step 3: Use remaining washes to clean and pair dirty-dirty socks
    for (const [sock, count] of dirtyCount.entries()) {
      while (dirtyCount.get(sock)! >= 2 && washesUsed + 2 <= K) {
        pairs++;
        dirtyCount.set(sock, dirtyCount.get(sock)! - 2);
        washesUsed += 2;
      }
    }
  
    return pairs;
  }
  