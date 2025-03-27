function solution(S: string): number {
    const stack: string[] = [];

    for (const char of S) {
        // Push opening brackets to stack
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else {
            // If it's a closing bracket, the stack must not be empty
            if (stack.length === 0) return 0;

            const top = stack.pop();

            // Check for correct matching
            if (
                (char === ')' && top !== '(') ||
                (char === ']' && top !== '[') ||
                (char === '}' && top !== '{')
            ) {
                return 0;
            }
        }
    }

    return stack.length === 0 ? 1 : 0;
}
