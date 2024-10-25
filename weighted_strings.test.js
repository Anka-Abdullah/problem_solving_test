
const {weightedStrings} = require('./weighted_strings.js');

describe('weightedStrings', () => {
    test('returns ["Yes", "Yes", "Yes", "No"] for input "abbcccd" and queries [1, 3, 9, 8]', () => {
        const str = "abbcccd";
        const queries = [1, 3, 9, 8];
        const result = weightedStrings(str, queries);
        expect(result).toEqual(["Yes", "Yes", "Yes", "No"]);
    });


});
