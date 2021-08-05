import { fibonacciRecursion } from "./fibonacci";

// Not a comprehensive list of tests.
test('Second fibonacci should be 1', () => {
    const result = fibonacciRecursion(2);
    expect(result).toBe(1);
});

test('Fifth fibonacci should be 5', () => {
    const result = fibonacciRecursion(5);
    expect(result).toBe(5);
});

test('Fortieth fibonacci should be 102334155', () => {
    console.time('FibonnacciRecursion');
    const result = fibonacciRecursion(40);
    console.timeEnd('FibonnacciRecursion');
    expect(result).toBe(102334155);
});
