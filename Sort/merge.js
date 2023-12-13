//**************merge function******************************** */
function merge(arr1, arr2) {
	let results = [];
	let i = 0;
	let j = 0;

	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			results.push(arr1[i]);
			i++;
		} else {
			results.push(arr2[j]);
			j++;
		}
	}
	while (i < arr1.length) {
		results.push(arr1[i]);
		i++;
	}

	while (j < arr2.length) {
		results.push(arr2[j]);
		j++;
	}

	return results;
}

//**********************merge function  version 2****************** */
function merge(arr1, arr2) {
	let results = [];
	let i = 0;
	let j = 0;

	while (i < arr1.length || j < arr2.length) {
		if (arr1[i] <= arr2[j] || j >= arr2.length) {
			results.push(arr1[i]);
			i++;
		} else if (arr1[i] > arr2[j] || i >= arr1.length) {
			results.push(arr2[j]);
			j++;
		}
	}

	return results;
}
//console.log(merge([2, 10, 20], [0, 1, 55, 66]));

function mergeSort(arr) {
	if (arr.length <= 1) return arr;

	let mid = Math.floor(arr.length / 2);

	let arr1 = mergeSort(arr.slice(0, mid));
	let arr2 = mergeSort(arr.slice(mid));

	return merge(arr1, arr2);
}
console.log(mergeSort([2, 20, 10, 1, 55, 0]));
