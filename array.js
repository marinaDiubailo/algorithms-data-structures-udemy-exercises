const array = [1, 2, 3, 4, 5];
const reversedArray = [...array].reverse();

// console.log('оригинал', array);
// console.log('new', reversedArray);

const arr1 = Array.from({ length: 10 }, () => []);
const arr2 = new Array(10).fill([]);

// console.log(arr1);
// console.log(arr2);

// console.log(0 % 5);
// console.log(-1 % 5);

function countZeroes(arr) {
	let min = 0;
	let max = arr.length - 1;
	let counter = 0;

	while (min <= max) {
		const middle = Math.floor((max + min) / 2);
		let currentElement = arr[middle];

		if (currentElement === 1) {
			min = middle + 1;
		} else if (arr[middle] === 0) {
			counter = counter + (max - middle + 1);
			max = middle - 1;
		}
	}
	return counter;
}

// console.log(countZeroes([1, 1, 1, 1, 0, 0])); // 2
// console.log(countZeroes([1, 0, 0, 0, 0])); // 4
// console.log(countZeroes([0, 0, 0])); // 3
// console.log(countZeroes([1, 1, 1])); // 0

function sortedFrequency(arr, num) {
	let counter = 0;
	let min = 0;
	let max = arr.length - 1;

	if (arr.length === 1) {
		if (arr[min] === num) {
			return (counter += 1);
		}
		return 0;
	}
	if (!arr.length || arr[max] < num || arr[min] > num) return -1;

	const middle = Math.floor((min + max) / 2);

	if (arr[middle] === num) {
		counter =
			counter +
			1 +
			sortedFrequency(arr.slice(middle + 1), num) +
			sortedFrequency(arr.slice(0, middle), num);
	} else if (arr[middle] < num) {
		counter += sortedFrequency(arr.slice(middle + 1), num);
	} else {
		counter += sortedFrequency(arr.slice(0, middle), num);
	}

	return counter;
}

// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2));
// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1));
// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3));
// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4));

function findRotatedIndex(arr, num) {
	// add whatever parameters you deem necessary - good luck!
}
