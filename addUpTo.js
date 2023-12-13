//**                  O(n)                           */
function addUpTo(n) {
	let total = 0;

	for (let i = 1; i <= n; i++) {
		total += i;
	}

	return total; // O(n)
}

console.log(addUpTo(6));

//**                  O(1)                        */
function addUpTo2(n) {
	return ((n + 1) * n) / 2; // O(1)
}

console.log(addUpTo2(6));

let start1 = performance.now();
addUpTo(100_000_000);
let end1 = performance.now();

let start2 = performance.now();
addUpTo2(100_000_000);
let end2 = performance.now();

console.log(`Time elapsed: ${(end1 - start1) / 1000} seconds`); // 0.071
console.log(`Time elapsed: ${(end2 - start2) / 1000} seconds`); // 0.0000020

// currying
const multiply = (a, b) => a * b;
const curriesdMultiply = a => b => a * b;
const curriedMultuplyBy5 = curriesdMultiply(5);

curriedMultuplyBy5(4); // 20
