function fuctorial(num) {
	let total = 1;

	for (let i = num; i > 0; i--) {
		total *= i;
	}

	return total;
}

function recursionFuctorial(num) {
	if (num === 1) return 1;

	return num * recursionFuctorial(num - 1);
}
