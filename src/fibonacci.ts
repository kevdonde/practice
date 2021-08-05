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
*/


/**
 * Given n, return the nth number in the sequence.
 * @param n the nth element in the Fibonacci sequence, n will always be greater than 0.
 * @param back the back element of a 2 sequence pair
 * @param front the front element of a 2 sequence pair
 * @returns int n: the index of the sequence to return
 */
export function fibonacciRecursion(n:number, back = 0, front = 1):number {
    if(n === 1) return front;
    
    [back, front] = [front, back + front];
    return fibonacciRecursion(n-1, back, front);
}

