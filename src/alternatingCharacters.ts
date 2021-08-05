/**
You are given a string containing characters 'A' and 'B' only. Your task is to change it into a 
string such that there are no matching adjacent characters. To do this, you are allowed to delete 
zero or more characters in the string. 
Your task is to find the minimum number of required deletions.

Example
s = 'AABAAB'
Remove an 'A' at positions '0' and '3' to make s = 'ABAB' in 2 deletions.

Tip: The question makes it seem like you need to track deletions. But you don't actually 
need to delete anything, just count the characters that would've been deleted.
 */

/**
 * Remove characters until the string alternates A and B.
 * @param s: a string AB characters
 * @returns int: the minimum number of deletions required
 */
export function alternatingCharacters(s: string): number {
    const characters = s.split('');        
    let index = 0;
    let numDeletions = 0;
    while(index < characters.length) {
        if(characters[index] === characters[index+1]) {
            numDeletions++;
        }
        index++;
    }

    return numDeletions;
}
