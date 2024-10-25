const { highestPalindrome } = require('./highest_palindrome');

describe('highestPalindrome', () => {
    test('should return 3993 for input "3943" with k=1', () => {
        expect(highestPalindrome("3943", 1)).toBe("3993");
    });

    test('should return 992299 for input "932239" with k=2', () => {
        expect(highestPalindrome("932239", 2)).toBe("992299");
    });

    test('should return 12321 for input "12321" with k=0', () => {
        expect(highestPalindrome("12321", 0)).toBe("12321");
    });

    test('should return 54345 for input "12345" with k=2', () => {
        expect(highestPalindrome("12345", 2)).toBe("54345");
    });

    test('should return 999 for input "999" with k=1', () => {
        expect(highestPalindrome("999", 1)).toBe("999");
    });

    test('should return -1 for input "123" with k=0', () => {
        expect(highestPalindrome("123", 0)).toBe("-1");
    });

    test('should return -1 for input "1" with k=0', () => {
        expect(highestPalindrome("1", 0)).toBe("1");
    });

    test('should return -1 for input "1234" with k=1', () => {
        expect(highestPalindrome("1234", 1)).toBe("-1");
    });

    test('should return 919 for input "919" with k=0', () => {
        expect(highestPalindrome("919", 0)).toBe("919");
    });

});
