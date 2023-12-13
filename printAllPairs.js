//**                  O(n2)                           */
function printAllPairs(n) {
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			console.log(i, j);
		}
	}
}

printAllPairs(5);
// 0 0
// 0 1
// 0 2
// 0 3
// 0 4
// 1 0
// 1 1
// 1 2
// 1 3
// 1 4
// 2 0
// 2 1
// 2 2
// 2 3
// 2 4
// 3 0
// 3 1
// 3 2
// 3 3
// 3 4
// 4 0
// 4 1
// 4 2
// 4 3
// 4 4
