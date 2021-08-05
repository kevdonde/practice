/*
Given an array of strings, remove each string that is an anagram of an earlier string, then return the remaining array in sorted order.

Example
str = ['code', 'doce', 'ecod', 'framer', 'frame']

code and doce are anagrams. Remove doce from the array and keep the first occurrence code in the array.
code and ecod are anagrams. Remove ecod from the array and keep the first occurrence code in the array.
code and framer are not anagrams. Keep both strings in the array.
framer and frame are not anagrams due to the extra r in framer. Keep both strings in the array.
Order the remaining strings in ascending order: ['code','frame','framer'].

Disclaimer: This is not the whole question. I do not remember all of the constraints and tests.

*/

/**
 * Remove text elements that are anagrams of other elements.
 * @param text An array of potential anagrams.
 * @returns an asc sorted array of non anagrams.
 */
export function funWithAnagrams(text: string[]): string[] {
    const anagrams = new Map();
    for(let word of text.values()) {
        const key = word.split('').sort().join('');
        if(anagrams.has(key) === false) {
            anagrams.set(key, word);
        }
    }

    return [...anagrams.values()].sort();
}

