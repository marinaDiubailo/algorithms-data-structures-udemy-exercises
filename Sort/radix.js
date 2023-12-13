const getDigit = (num, place) => {
	return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
};

const digitCount = num => {
	if (num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = arr => {
	let max = 0;

	for (let i = 0; i < arr.length; i++) {
		max = Math.max(max, digitCount(arr[i]));
	}

	return max;
};

function radixSort(arr) {
	const maxDigitCount = mostDigits(arr);

	for (let k = 0; k < maxDigitCount; k++) {
		let digitBackets = Array.from({ length: 10 }, () => []);
		for (let i = 0; i < arr.length; i++) {
			let digit = getDigit(arr[i], k);
			digitBackets[digit].push(arr[i]);
		}
		arr = [].concat(...digitBackets);
	}
	return arr;
}

//console.log(mostDigits([2, 20, 10, 1, 55, 0]));
console.log(radixSort([2, 20, 10, 1, 55, 0]));
