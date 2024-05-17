import { sum } from "../../utils/calculate";

describe('sum function', () => {
    it('should return the sum of positive numbers', () => {
        expect(sum(1, 2, 3)).toBe(6);
    });

    it('should handle negative numbers', () => {
        expect(sum(-1, 5)).toBe(4);
    });

    it('should handle zero', () => {
        expect(sum(0, 0, 0)).toBe(0);
    });

    it('should throw an error for invalid data', () => {
        expect(() => sum(1, 'invalid', 3)).toThrow('Your data is invalid!');
    });
});