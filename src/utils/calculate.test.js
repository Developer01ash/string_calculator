import { stringCalculator } from './calculator';

describe('String Calculator - Unit Tests', () => {
  test('returns 0 for empty string', () => {
    expect(stringCalculator('')).toBe(0);
  });

  test('handles custom delimiters', () => {
    expect(stringCalculator('//;\n1;2;3')).toBe(6);
  });

  test('throws exception for negative numbers', () => {
    expect(() => stringCalculator('1,-2,-3')).toThrow('Negatives not allowed: -2, -3');
  });
});
