function fibonacci(num) {
	if (num < 2) return num;

	return fibonacci(num - 1) + fibonacci(num - 2);
}

//***********************memoization***************************** */

//? solution 1
function memoizer(fn) {
	const cache = {};

	return function (...args) {
		if (cache[args]) return cache[args];
		const result = fn.apply(this, args);
		cache[args] = result;
		return result;
	};
}
const memoizedFib = memoizer(fibSlow);

function fibSlow(num) {
	if (num < 2) return num;

	return memoizedFib(num - 1) + memoizedFib(num - 2);
}

//? solution 2
function fib(n, memo = []) {
	if (memo[n] !== undefined) return memo[n];
	if (n < 2) return n;

	// const result = fib(n - 1, memo) + fib(n - 2, memo);
	// memo[n] = result;
	// return result;
	return (memo[n] = fib(n - 1, memo) + fib(n - 2, memo));
}

//************************tabulation***************************** */
//? tabulated version

function tabulatedFib(n) {
	if (n < 2) return n;
	const fibNums = [0, 1, 1];

	for (let i = 3; i <= n; i++) {
		fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
	}
	return fibNums[n];
}
//********************************************************* */
function fibo1(n) {
	const arr = [];

	for (let i = 0; i <= n; i++) {
		const res = fibo(i);
		arr.push(res);
	}
	return arr;
}

function fibo(n) {
	const sqrt = Math.sqrt(5);
	return Math.round(
		(Math.pow((1 + sqrt) / 2, n) - Math.pow((1 - sqrt) / 2, n)) / sqrt
	);
}

function tabulatedFib1(n) {
	if (n < 2) return n;
	const fibNums = [0, 1, 1];

	for (let i = 3; i <= n; i++) {
		fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
	}
	return fibNums;
}

// function isEqual(k) {
// 	const arr1 = fibo1(k);
// 	const arr2 = tabulatedFib1(k);
// 	let index = [];
// 	for (let i = 0; i <= k; i++) {
// 		if (arr1[i] !== arr2[i]) {
// 			index.push(i);
// 		}
// 	}
// 	return index;
// }
console.log(fibo(72));
//console.log(fibo1(20));
console.log(tabulatedFib(72));
