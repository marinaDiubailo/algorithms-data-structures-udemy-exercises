//!===================SLIDING WINDOW O(n)===========================
function maxSubarraySum(arr, num) {
	let maxSum = 0;
	let tempSum = 0;
	if (arr.length < num) return null;

	// находим сумму первых num (пример num = 3) чисел массива и условно
	// принимаем их сумму как максимальную (пример первых 3 чила)
	for (let i = 0; i < num; i++) {
		maxSum += arr[i];
	}

	// временную сумму tempSum приравниваем к максимальной на данный момент maxSum
	tempSum = maxSum;

	// от временно суммы tempSum отнимаем в первой итерации первое число массива
	// и прибавляем следующее(пример отнимаем 1е и прибавляем 4е)
	// затем сравниваем времменую сумму tempSum с максимальной maxSum
	// и maxSum присваиваем максимальное значение
	for (let i = num; i < arr.length; i++) {
		tempSum = tempSum - arr[i - num] + arr[i];
		maxSum = Math.max(maxSum, tempSum);
	}

	return maxSum;
}

// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
// console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
// console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
// console.log(maxSubarraySum([], 4)); // null

//?===================exercise maxSubarraySum======================
function maxSubarraySum(arr, num) {
	if (arr.length < num) return null;

	let maxSum = 0;
	let tempSum = 0;

	for (let i = 0; i < num; i++) {
		maxSum += arr[i];
	}

	tempSum = maxSum;

	for (let i = num; i < arr.length; i++) {
		tempSum = tempSum - arr[i - num] + arr[i];
		maxSum = Math.max(tempSum, maxSum);
	}
	return maxSum;
}
//?===================exercise minSubArrayLen======================
function minSubArrayLen(arr, num) {
	let start = 0;
	let end = arr.length - 1;
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	if (sum < num) return 0;

	while (start <= end) {
		if (sum >= num + arr[start] || sum >= num + arr[end]) {
			if (arr[start] <= arr[end]) {
				sum -= arr[start];
				start++;
			} else {
				sum -= arr[end];
				end--;
			}
		} else {
			return end - start + 1;
		}
	}
}

//*****************solution from video************* */
function minSubArrayLen(nums, sum) {
	let total = 0;
	let start = 0;
	let end = 0;
	let minLen = Infinity;

	while (start < nums.length) {
		// if current window doesn't add up to the given sum then
		// move the window to right
		if (total < sum && end < nums.length) {
			total += nums[end];
			end++;
		}
		// if current window adds up to at least the sum given then
		// we can shrink the window
		else if (total >= sum) {
			minLen = Math.min(minLen, end - start);
			total -= nums[start];
			start++;
		}
		// current total less than required total but we reach the end, need this or else we'll be in an infinite loop
		else {
			break;
		}
	}

	return minLen === Infinity ? 0 : minLen;
}
// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2
// console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2
// console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
// console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0

//?===================exercise findLongestSubstring================
function findLongestSubstring(str) {
	let subLength = 0;
	let obj = {};
	let start = 0;

	for (let end = 0; end < str.length; end++) {
		let char = str[end];

		if (obj[char]) {
			start = Math.max(start, obj[char]);
		}
		subLength = Math.max(subLength, end - start + 1);
		obj[char] = end + 1;
	}
	return subLength;
}

console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('thisisawesome')); // 6
console.log(findLongestSubstring('thecatinthehat')); // 7
console.log(findLongestSubstring('bbbbbb')); // 1
console.log(findLongestSubstring('longestsubstring')); // 8
console.log(findLongestSubstring('thisishowwedoit')); // 6

module.exports = maxSubarraySum;
