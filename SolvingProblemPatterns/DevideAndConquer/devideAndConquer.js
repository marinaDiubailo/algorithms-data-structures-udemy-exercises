//!=================DEVIDE AND CONQUER=================

//*************Naive solution O(n) time complexity********** */
function search(arr, val) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === val) {
			return i;
		}
	}
	return -1;
}

//? Binary search
//***************Devide an conquer O(log n) ************ */

function search(array, val) {
	let min = 0;
	let max = array.length - 1;

	while (min <= max) {
		let middle = Math.floor((min + max) / 2);
		let currentElement = array[middle];

		if (currentElement < val) {
			min = middle + 1;
		} else if (currentElement > val) {
			max = middle - 1;
		} else {
			return middle;
		}
	}

	return -1;
}
