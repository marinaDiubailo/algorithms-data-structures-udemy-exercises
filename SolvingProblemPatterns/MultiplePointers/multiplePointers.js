//!==============MULTIPLE POINTERS========================

//=============my solution=============================
function sumZero(arr) {
	for (let i = 0; i < arr.length; i++) {
		let left = arr.length - 1;
		let sum = arr[i] + arr[left];

		if (sum === 0) {
			return [arr[i], arr[left]];
		}

		if (sum > 0) {
			left -= 1;
		}
	}
}

//*===============MULTIPLE POINTERS  time complexity O(n)====================
//*  Space Complexity - O(1)
//? по сути тоже самое что и мое решение!!!!!!!!!!!!!

function sumZero1(arr) {
	let left = 0;
	let right = arr.length - 1;
	while (left < right) {
		let sum = arr[left] + arr[right];
		if (sum === 0) {
			return [arr[left], arr[right]];
		} else if (sum > 0) {
			right--;
		} else {
			left++;
		}
	}
}

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
// console.log(sumZero([-2, 0, 1, 3]));
// console.log(sumZero([1, 2, 3]));
// console.log(sumZero([]));

//?===============exercise counting unique values=============
//*********************my solution==================== */
function countUniqueValues(arr) {
	let i = 0;
	let j = 1;

	if (!arr.length) {
		return i;
	}

	while (j < arr.length) {
		if (arr[j] > arr[i]) {
			i++;
			arr[i] = arr[j];
			j++;
		} else {
			j++;
		}
	}

	return i + 1;
}

//*************SOLUTION*************************************** */
function countUniqueValues(arr) {
	let i = 0;

	if (!arr.length) {
		return i;
	}

	for (let j = 1; j < arr.length; j++) {
		if (arr[j] !== arr[i]) {
			i++;
			arr[i] = arr[j];
		}
	}

	return i + 1;
}

// console.log(countUniqueValues([1, 1, 1, 2]));
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
// console.log(countUniqueValues([]));
// console.log(countUniqueValues([-2, -1, -1, 0, 1]));

//? ======================exercise areThereDuplicates===============
function areThereDuplicates(...args) {
	args.sort((a, b) => a > b);

	let start = 0;
	let next = 1;

	while (next < args.length) {
		if (args[start] === args[next]) {
			return true;
		}
		start++;
		next++;
	}

	return false;
}

//*             с использованием SET
function areThereDuplicates() {
	return new Set(arguments).size !== arguments.length;
}

//? ======================exercise avarage pair=================
function averagePair(arr, n) {
	let i = 0;

	for (let j = 1; j < arr.length; j++) {
		const avrg = arr[i] + arr[j] / 2;
		if (avrg === n) {
			return true;
		} else if (avrg > n) {
			i--;
			j--;
		} else if (avrg < n) {
			i++;
		}
	}

	return false;
}

// console.log('1', averagePair([1, 2, 3], 2.5));
// console.log('2', averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
// console.log('3', averagePair([-1, 0, 3, 4, 5, 6], 4.1));
// console.log('4', averagePair([], 4));

//?========================exercise isSubsequence================
function isSubsequence(sub, str) {
	let j = 0;

	for (let i = 0; i < sub.length; i++) {
		if (!str[j]) {
			return false;
		}
		if (sub[i] !== str[j]) {
			i--;
		}
		j++;
	}

	return true;
}

// console.log(isSubsequence('hello', 'hello world')); // true
// console.log(isSubsequence('sing', 'sting')); // true
// console.log(isSubsequence('abc', 'abracadabra')); // true
// console.log(isSubsequence('abc', 'acb')); // false (order matters)

module.exports = sumZero;
