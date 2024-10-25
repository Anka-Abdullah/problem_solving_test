const { isBalanced } = require('./balanced_bracket');

describe('isBalanced', () => {
    test('returns YES for balanced brackets', () => {
        expect(isBalanced("{ [ ( ) ] }")).toBe("YES");
        expect(isBalanced("{ ( ( [ ] ) [ ] ) [ ] }")).toBe("YES");
        expect(isBalanced("()[]{}")).toBe("YES");
    });

    test('returns NO for unbalanced brackets', () => {
        expect(isBalanced("{ [ ( ] ) }")).toBe("NO");
        expect(isBalanced("{ [ ( ) }")).toBe("NO");
        expect(isBalanced("{ [ ] ) }")).toBe("NO");
        expect(isBalanced("((())")).toBe("NO");
    });

    test('returns YES for empty string', () => {
        expect(isBalanced("")).toBe("YES");
    });

    test('ignores whitespace', () => {
        expect(isBalanced("{ [ ( ) ] }   ")).toBe("YES");
        expect(isBalanced(" { ( ) [ ] }  ")).toBe("YES");
        expect(isBalanced("{ [   ( ]   ) }")).toBe("NO");
    });
});