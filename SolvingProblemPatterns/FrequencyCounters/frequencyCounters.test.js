const same = require('./frequencyCounters');

test('same function is defined', () => {
	expect(typeof same).toEqual('function');
});

test('returns true for ', () => {
	const arr1 = [1, 2, 3];
	const arr2 = [4, 1, 9];
	expect(same(arr1, arr2)).toEqual(true);
});
test('returns false because frequency needs to be the same', () => {
	const arr1 = [1, 2, 3];
	const arr2 = [4, 1, 4];
	expect(same(arr1, arr2)).toEqual(false);
});
test('returns false for arrays of different length', () => {
	const arr1 = [1, 2, 3];
	const arr2 = [4, 1];
	expect(same(arr1, arr2)).toEqual(false);
});
test('returns true for empty arrays', () => {
	const arr1 = [];
	const arr2 = [];
	expect(same(arr1, arr2)).toEqual(true);
});
