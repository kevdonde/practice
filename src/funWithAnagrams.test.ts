import { funWithAnagrams } from "./funWithAnagrams";

test('Test 1', () => {
    const result = funWithAnagrams(['code', 'doce', 'anagrams', 'anagram', 'gramanas']);
    expect(result).toContain('anagram');
    expect(result).toContain('anagrams');
    expect(result).toContain('code');
    expect(result).toMatchObject([ 'anagram', 'anagrams', 'code' ]);
});


test('Test 2', () => {
    const result = funWithAnagrams(['code', 'doce', 'ecod', 'framer', 'frame']);
    expect(result).toContain('code');
    expect(result).toContain('frame');
    expect(result).toContain('framer');
    expect(result).toMatchObject([ 'code', 'frame', 'framer' ]);
});