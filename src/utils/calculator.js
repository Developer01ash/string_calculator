export const stringCalculator = (input) => {
    if (!input) return 0;

    let delimiters = /,|\n/;

    const customDelimiterMatch = input.match(/^\/\/(.+)\n/);
    if (customDelimiterMatch) {
        delimiters = new RegExp(customDelimiterMatch[1]);
        input = input.split('\n')[1];
    }

    const numbers = input.split(delimiters).map(Number);

    const negatives = numbers.filter((num) => num < 0);
    if (negatives.length) {
        throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
    }

    return numbers.reduce((acc, curr) => acc + curr, 0);
};
