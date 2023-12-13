//!=================FREQUENCY COUNTERS=====================//
//==================my solution============================//
function same1(arrOne, arrTwo) {
	const sortedOne = arrOne.map(el => el * el).sort((a, b) => a - b);
	const sortedTwo = arrTwo.sort((a, b) => a - b);

	return sortedOne.toString() === sortedTwo.toString();
}
//==================naive solution  O(n^2)=================//
function same2(arrOne, arrTwo) {
	if (arrOne.length !== arrTwo.length) {
		return false;
	}

	for (let i = 0; i < arrOne.length; i++) {
		let correctIndex = arrTwo.indexOf(arrOne[i] ** 2); // nested loop
		if (correctIndex === -1) {
			return false;
		}
		arrTwo.splice(correctIndex, 1);
	}
	return true;
}

//*=========FREQUENCY COUNTERS solution   O(n)============= */
function same(arrOne, arrTwo) {
	if (arrOne.length !== arrTwo.length) {
		return false;
	}

	let freqCounter1 = {};
	let freqCounter2 = {};

	for (let val of arrOne) {
		//freqCounter1[val] = (freqCounter1[val] || 0) + 1; // тоже самое что и ниже
		freqCounter1[val] = freqCounter1[val] + 1 || 1;
	}

	for (let val of arrTwo) {
		freqCounter2[val] = (freqCounter2[val] || 0) + 1;
	}
	for (let key in freqCounter1) {
		if (!(key ** 2) in freqCounter2) {
			return false;
		}

		if (freqCounter2[key ** 2] !== freqCounter1[key]) {
			return false;
		}
	}

	return true;
}

//?================exercise anagram================//

// creating 2 obj
function validAnagram(str1, str2) {
	if (str1.length !== str2.length) {
		return false;
	}
	let freqMap1 = {};
	let freqMap2 = {};

	for (let char of str1) {
		freqMap1[char] = freqMap1[char] + 1 || 1;
	}

	for (let char of str2) {
		freqMap2[char] = freqMap2[char] + 1 || 1;
	}

	for (let char in freqMap1) {
		if (freqMap1[char] !== freqMap2[char]) {
			return false;
		}
	}

	return true;
}
// creating 1 obj
function validAnagram(str1, str2) {
	if (str1.length !== str2.length) {
		return false;
	}
	let freqMap = {};

	for (let i = 0; i < str1.length; i++) {
		let char = str1[i];
		freqMap[char] = freqMap[char] + 1 || 1;
	}

	for (let i = 0; i < str2.length; i++) {
		let char = str2[i];

		if (!freqMap[char]) {
			return false;
		} else {
			freqMap[char] -= 1;
		}
	}

	return true;
}

//?=============exercise sameFrequency==========================
function sameFrequency(int1, int2) {
	const str1 = int1.toString();
	const str2 = int2.toString();

	if (str1.length !== str2.length) {
		return false;
	}

	let obj = {};

	for (const key of str1) {
		obj[key] = obj[key] + 1 || 1;
	}

	for (const key of str2) {
		if (!obj[key]) {
			return false;
		} else {
			obj[key]--;
		}
	}
	return true;
}

// console.log(sameFrequency(182, 281));
// console.log(sameFrequency(34, 14));
// console.log(sameFrequency(3589578, 5879385));
// console.log(sameFrequency(22, 222));

//?====================exercise areThereDuplicates===============

//******************************my solution*********************/
function areThereDuplicates1(...args) {
	let obj = {};

	for (let i = 0; i < args.length; i++) {
		let arg = args[i];
		obj[arg] = obj[arg] + 1 || 1;

		if (obj[arg] > 1) {
			return true;
		}
	}

	return false;
}

//**************************solution from course********************/
function areThereDuplicates() {
	let collection = {};
	for (let val in arguments) {
		collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
	}
	for (let key in collection) {
		if (collection[key] > 1) return true;
	}
	return false;
}
/************************************************************** */
console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));

module.exports = same;
