import { rotateLeft } from "./leftRotation";

// Not a comprehensive list of tests.
test('4 rotations', () => {
    const result = rotateLeft([1,2,3,4,5], 4);
    expect(result).toMatchObject([5,1,2,3,4]);
});


test('10 rotations', () => {
    const result = rotateLeft([41,73,89,7,10,1,59,58,84,77,77,97,58,1,86,58,26,10,86,51], 10);
    expect(result).toMatchObject([77,97,58,1,86,58,26,10,86,51,41,73,89,7,10,1,59,58,84,77]);
});

test('0 rotations', () => {
    const result = rotateLeft([41,73,89,7,10,1,59], 0);
    expect(result).toMatchObject([41,73,89,7,10,1,59]);
});