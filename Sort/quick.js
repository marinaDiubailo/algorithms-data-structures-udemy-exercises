//!             O(n^2) average O(n log n)
const swap = (arr, idx1, idx2) => {
	[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const pivot = (arr, start = 0, end = arr.length - 1) => {
	let pivot = arr[start];
	let swapIdx = start;

	for (let i = start + 1; i <= end; i++) {
		if (pivot > arr[i]) {
			swapIdx++;
			swap(arr, swapIdx, i);
		}
	}

	swap(arr, start, swapIdx);

	return swapIdx;
};

function quickSort(arr, left = 0, right = arr.length - 1) {
	if (left < right) {
		let pivotIdx = pivot(arr, left, right);
		quickSort(arr, left, pivotIdx - 1);
		quickSort(arr, pivotIdx + 1, right);
	}

	return arr;
}

console.log(quickSort([2, 20, 10, 1, 55, 0]));
//console.log(pivot([2, 20, 10, 1, 55, 0]));
//console.log(pivot([0, 1, 2, 10, 20, 55]));
