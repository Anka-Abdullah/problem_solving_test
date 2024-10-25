const isBalanced = (s) => {
    const stack = [];
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (const char of s) {
        if (bracketMap[char]) {
            if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
                return "NO";
            }
        } else if (Object.values(bracketMap).includes(char)) {
            stack.push(char);
        }
    }

    return stack.length === 0 ? "YES" : "NO";
}

module.exports = { isBalanced }