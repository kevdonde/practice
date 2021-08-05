import { funWithAnagrams } from "./funWithAnagrams";

// Not a comprehensive list of tests.
test('anagram, anagrams, code', () => {
    const result = funWithAnagrams(['code', 'doce', 'anagrams', 'anagram', 'gramanas']);
    expect(result).toContain('anagram');
    expect(result).toContain('anagrams');
    expect(result).toContain('code');
    expect(result).toMatchObject([ 'anagram', 'anagrams', 'code' ]);
});


test('code, frame, framer', () => {
    const result = funWithAnagrams(['code', 'doce', 'ecod', 'framer', 'frame']);
    expect(result).toContain('code');
    expect(result).toContain('frame');
    expect(result).toContain('framer');
    expect(result).toMatchObject([ 'code', 'frame', 'framer' ]);
});