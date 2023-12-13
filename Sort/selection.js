//!                 O(n^2)
const swap = (arr, idx1, idx2) => {
	[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let min = i;
		for (j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min]) {
				min = j;
			}
		}
		if (i !== min) swap(arr, i, min);
	}
	return arr;
}

console.log(selectionSort([2, 20, 10, 1, 55, 0]));
