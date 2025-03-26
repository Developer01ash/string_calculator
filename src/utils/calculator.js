export const stringCalculator = (input) => {
    if (!input) return 0;

    const delimiters = /,|\n/;
    const numbers = input.split(delimiters).map(Number);

    return numbers.reduce((sum, num) => sum + num, 0);
};
