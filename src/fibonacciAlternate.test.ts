import { fibonacci, fibonnacciLoop } from "./fibonacciAlternate";

// Not a comprehensive list of tests.
test('Second fibonacci should be 1', () => {
    const result = fibonacci(2);
    expect(result).toBe(1);
});

test('Fifth fibonacci should be 5', () => {
    const result = fibonacci(5);
    expect(result).toBe(5);
});

test('Twelfth fibonacci should be 102334155', () => {
    console.time('FibonnacciGenerator');
    const result = fibonacci(40);
    console.timeEnd('FibonnacciGenerator');
    expect(result).toBe(102334155);
});


test('Second fibonacci should be 1 - fibonnacciLoop', () => {
    const result = fibonnacciLoop(2);
    expect(result).toBe(1);
});

test('Fifth fibonacci should be 5 - fibonnacciLoop', () => {
    const result = fibonnacciLoop(5);
    expect(result).toBe(5);
});

test('Fortieth fibonacci should be 102334155 - fibonnacciLoop', () => {
    console.time('fibonnacciLoop');
    const result = fibonnacciLoop(40);
    console.timeEnd('fibonnacciLoop');
    expect(result).toBe(102334155);
});