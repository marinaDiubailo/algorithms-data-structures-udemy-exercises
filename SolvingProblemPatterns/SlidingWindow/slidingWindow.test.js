const maxSubarraySum = require('./slidingWindow.js');

test('maxSubarraySum function is defined', () => {
	expect(typeof maxSubarraySum).toEqual('function');
});
test('returns the maximum sum of n consecutive elements in the array', () => {
	expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)).toEqual(10);
});

test('returns the maximum sum of 4 consecutive elements in the array', () => {
	expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)).toEqual(17);
});

test('returns the maximum number from the array', () => {
	expect(maxSubarraySum([4, 2, 1, 6], 1)).toEqual(6);
});

test('returns the maximum sum of n consecutive elements in the array', () => {
	expect(maxSubarraySum([4, 2, 1, 6, 2], 4)).toEqual(13);
});

test('returns null for empty array', () => {
	expect(maxSubarraySum([], 4)).toEqual(null);
});
