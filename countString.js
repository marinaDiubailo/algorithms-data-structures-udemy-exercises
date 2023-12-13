//*****************************************************/
function charCount1(str) {
	const obj = {};
	const regEx = /[a-z0-9]/;

	const array = str.toLowerCase().match(regEx);

	for (const char of array.join('')) {
		obj[char] = obj[char] + 1 || 1;
	}

	return obj;
}
//*****************************************************/
function charCount2(str) {
	const obj = {};
	const regEx = /[a-z0-9]/;

	for (let i = 0; i <= str.length - 1; i++) {
		let char = str[i].toLowerCase();
		console.log(char);

		if (regEx.test(char)) {
			obj[char] = obj[char] + 1 || 1;
		}
	}

	return obj;
}
//***************************************************** */
function charCount3(str) {
	const obj = {};

	for (let char of str) {
		char = char.toLowerCase();
		if (/[a-z0-9]/.test(char)) {
			obj[char] = ++obj[char] || 1;
		}
	}

	return obj;
}
//******************************************************** */
function charCount4(str) {
	const obj = {};

	for (let i = 0; i <= str.length - 1; i++) {
		let code = str.charCodeAt(i);
		console.log(code);
		if (
			(code > 47 && code < 58) ||
			(code > 64 && code < 91) ||
			(code > 96 && code < 123)
		) {
			let char = str[i].toLowerCase();
			obj[char] = obj[char] + 1 || 1;
		}
	}

	return obj;
}
//*********************************************************** */
function charCount(str) {
	const obj = {};

	for (let char of str) {
		if (isAlphaNumeric(char)) {
			char = char.toLowerCase();
			obj[char] = obj[char] + 1 || 1;
		}
	}

	return obj;
}
//***************function isAlphaNumeric********************* */
function isAlphaNumeric(char) {
	var code = char.charCodeAt(0);
	if (
		!(code > 47 && code < 58) && // numeric (0-9)
		!(code > 64 && code < 91) && // uper alpha (A-Z)
		!(code > 96 && code < 123) // lower alpha(a-z)
	) {
		return false;
	}
	return true;
}
//*********************************************************** */
//console.log(charCount('aaaaa'));
//console.log(charCount('aaaam!'));
//console.log(charCount('Aaaaa ghfg fghfgh 121'));
//console.log(charCount(''));

module.exports = charCount;
