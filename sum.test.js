const sum = require('./sum');
describe('tests', () => {    
    test('add 1 + 2 equals 3', () => {
        expect(sum(1, 2)).toBe(3);
        });
    test('add 1 + 2 is greater than 2', () => {
        expect(sum(1, 2)).toBeGreaterThan(2);
        });
    test('add 1 + 2 is less than 10', () => {
        expect(sum(1, 2)).toBeLessThan(10);
        });      
});