import { alternatingCharacters } from "./alternatingCharacters";

// Not a comprehensive list of tests.
test('No alternations', () => {
    const result = alternatingCharacters('AAAA');
    expect(result).toBe(3);
});

test('No deletions', () => {
    const result = alternatingCharacters('ABABABAB');
    expect(result).toBe(0);
});

test('half and then half', () => {
    const result = alternatingCharacters('AAABBB');
    expect(result).toBe(4);
});

test('6 total deletions', () => {
    const result = alternatingCharacters('AAABBBAABB');
    expect(result).toBe(6);
});

test('Last character deletion', () => {
    const result = alternatingCharacters('ABABABAA');
    expect(result).toBe(1);
});