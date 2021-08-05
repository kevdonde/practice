/*
The Fibonacci Sequence
The Fibonacci sequence appears in nature all around us, in the arrangement of seeds in a sunflower and 
the spiral of a nautilus for example.
The Fibonacci sequence begins with fibonnacci(0) = 0 and fibonnacci(1) = 1 as its first and second terms. 
After these first two elements, each subsequent element is equal to the sum of the previous two elements.

Programmatically:
fibonnacci(0) = 0
fibonnacci(1) = 1
fibonnacci(n) = fibonacci(n-1) + fibonacci(n-2)

Given n, return the nth number in the sequence.

Example
n = 5
The Fibonacci sequence to 6 is fs = [0,1,1,2,3,5,8]. With zero-based indexing, fs[5]=5.


------------
I have included 2 alternate implementations of the fibonacci sequence here.

*/

/**
 * Generate the next number in the fibonacci sequence.
 * @param n the nth element in the Fibonacci sequence, n will always be greater than 0.
 * @returns yields the next element in the fibonacci sequence.
 */
function* fibonnacciGenerator(n:number) {
    // set starting values.
    var back = 0;
    var front = 1;
    var index = 1;
    // yield until we get to n.
    while(index < n) {
        [back, front] = [front, back + front];
        yield front;
        index++;
    }
}

/**
 * Given n, return the nth number in the sequence. This method uses a generator.
 * @param n the nth element in the Fibonacci sequence, n will always be greater than 0.
 * @returns int n: the index of the sequence to return
 */
export function fibonacci(n:number) {
    var generator = fibonnacciGenerator(n);
    var currentValue;
    for(var index = 1; index <= n; index++) {
        var iterator = generator.next();
        if(!iterator.done) currentValue = iterator.value;
        else return currentValue;
    }
}

/**
 * Given n, return the nth number in the sequence. This method uses a loop.
 * @param n the nth element in the Fibonacci sequence, n will always be greater than 0.
 * @returns int n: the index of the sequence to return
 */
export function fibonnacciLoop(n:number) {
    // set starting values.
    var back = 0;
    var front = 1;
    var index = 1;
    while(index < n) {
        [back, front] = [front, back + front];
        index++;
    }
    return front;
}