//!                 O(n^2)

function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let current = arr[i];
		let j = i - 1;
		for (; j >= 0 && arr[j] > current; j--) {
			arr[j + 1] = arr[j];
		}
		arr[j + 1] = current;
	}
	return arr;
}

console.log(insertionSort([2, 20, 10, 1, 55, 0]));
