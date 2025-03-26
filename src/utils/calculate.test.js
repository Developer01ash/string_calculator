import { stringCalculator } from './calculator';

describe('String Calculator - Unit Tests', () => {
  test('returns 0 for empty string', () => {
    expect(stringCalculator('')).toBe(0);
  });
});
