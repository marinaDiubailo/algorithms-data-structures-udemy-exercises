const sumZero = require('./multiplePointers');

test('sumZero function is defined', () => {
	expect(typeof sumZero).toEqual('function');
});

test('returns an array that includes both values that sum to zero', () => {
	expect(sumZero([-3, -2, -1, 0, 1, 2, 3])).toEqual([-3, 3]);
});

test('returns undefined', () => {
	expect(sumZero([-2, 0, 1, 3])).toEqual(undefined);
});

test('returns undefined', () => {
	expect(sumZero([1, 2, 3])).toEqual(undefined);
});

test('returns undefined', () => {
	expect(sumZero([])).toEqual(undefined);
});
