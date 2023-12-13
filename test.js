const charCount = require('./countString');

test('charCount function is defined', () => {
	expect(typeof charCount).toEqual('function');
});

test('returns correct object for "aaaaa"', () => {
	expect(charCount('aaaaa')).toEqual({ a: 5 });
});

test('returns correct object  for "aaaam!"', () => {
	expect(charCount('aaaam!')).toEqual({ a: 4, m: 1 });
});

test('returns correct object for "Aaaaa ghfg fghfgh 121"', () => {
	expect(charCount('Aaaaa ghfg fghfgh 121')).toEqual({
		'1': 2,
		'2': 1,
		a: 5,
		g: 4,
		h: 3,
		f: 3,
	});
});

test('returns correct object for empty string', () => {
	expect(charCount('')).toEqual({});
});
