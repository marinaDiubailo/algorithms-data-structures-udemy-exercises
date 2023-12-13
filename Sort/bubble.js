//!             O(n^2)
const swap = (arr, idx1, idx2) => {
	[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

function bubbleSort(arr) {
	let noSwaps;
	for (let i = arr.length - 1; i > 0; i--) {
		noSwaps = true;
		for (let j = 0; j < i; j++) {
			if (arr[j] > arr[j + 1]) {
				// let temp = arr[j];
				// arr[j] = arr[j + 1];
				// arr[j + 1] = temp;
				swap(arr, j, j + 1);
				noSwaps = false;
			}
		}
		if (noSwaps) break;
	}
	return arr;
}

console.log(bubbleSort([2, 20, 10, 1, 55, 0]));
