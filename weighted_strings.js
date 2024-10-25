const weightedStrings = (str, queries) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const weights = new Set();

    const getWeight = (char) => {
        return alphabet.indexOf(char) + 1;
    };

    let i = 0;
    while (i < str.length) {
        let weight = getWeight(str[i]);
        weights.add(weight);

        let count = 1;
        while (i + 1 < str.length && str[i] === str[i + 1]) {
            count++;
            weight += getWeight(str[i]);
            weights.add(weight);
            i++;
        }
        i++;
    }

    const result = queries.map(query => (weights.has(query) ? "Yes" : "No"));
    return result;
};

module.exports = { weightedStrings };
