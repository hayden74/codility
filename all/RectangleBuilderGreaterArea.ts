// ([2, 3, 2, 3, 2, 3, 2, 3], 9) the solution returned a wrong answer (got 0 expected 1).
// squears
function solution(A: number[], X: number): number {
    const counts = new Map<number, number>();
    for (const num of A) {
      counts.set(num, (counts.get(num) || 0) + 1);
    }
  
    let answer = 0;
    const entries = Array.from(counts.entries());
  
    for (let i = 0; i < entries.length; i++) {
      const [len1, count1] = entries[i];
  
      if (count1 >= 4 && len1 * len1 >= X) answer++;
  
      for (let j = i + 1; j < entries.length; j++) {
        const [len2, count2] = entries[j];
  
        if (count1 >= 2 && count2 >= 2 && len1 * len2 >= X) {
          answer++;
        }
      }
    }
  
    return answer;
  }
  
  //efficient answer 
  function solution(A: number[], X: number): number {
    const counts = new Map<number, number>();
  
    // Step 1: Count frequencies
    for (const a of A) {
      counts.set(a, (counts.get(a) || 0) + 1);
    }
  
    // Step 2: Extract side lengths with count >= 2
    const sides: number[] = [];
    for (const [len, count] of counts) {
      if (count >= 2) sides.push(len);
    }
  
    // Step 3: Sort sides
    sides.sort((a, b) => a - b);
  
    let answer = 0;
  
    // Step 4: Handle squares (count >= 4)
    for (const [len, count] of counts) {
      if (count >= 4 && len * len >= X) {
        answer++;
      }
    }
  
    // Step 5: Two pointers to count rectangle pairs
    let left = 0;
    let right = sides.length - 1;
  
    while (left < right) {
      const area = sides[left] * sides[right];
      if (area >= X) {
        // All pairs from left to right-1 will also be valid
        answer += right - left;
        right--;
      } else {
        left++;
      }
    }
  
    return answer;
  }