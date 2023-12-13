//**                  O(n)                           */
function logAtLeast5(n) {
	for (let i = 1; i <= Math.max(5, n); i++) {
		console.log(i);
	}
}

//**                  O(1)                           */
function logAtMostt5(n) {
	for (let i = 1; i <= Math.min(5, n); i++) {
		console.log(i);
	}
}
