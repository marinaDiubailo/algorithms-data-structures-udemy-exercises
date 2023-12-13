function hash1(key, arrayLen) {
	let total = 0;

	for (let char of key) {
		let value = char.charCodeAt(0) - 96;
		total = (total + value) % arrayLen;
	}

	return total;
}

function hash(key, arrayLen) {
	let total = 0;
	let WEIRD_PRIME = 9973;

	for (let i = 0; i < Math.min(key.length, 100); i++) {
		let char = key[i];
		let value = char.charCodeAt(0) - 96;
		total = (total * WEIRD_PRIME + value) % arrayLen;
	}

	return total;
}

class HashTable {
	constructor(size = 53) {
		this.keyMap = new Array(size);
	}

	_hash(key) {
		let total = 0;
		let WEIRD_PRIME = 9973;

		for (let i = 0; i < Math.min(key.length, 100); i++) {
			let char = key[i];
			let value = char.charCodeAt(0) - 96;
			total = (total * WEIRD_PRIME + value) % this.keyMap.length;
		}

		return total;
	}

	set(key, value) {
		let index = this._hash(key);
		if (!this.keyMap[index]) {
			this.keyMap[index] = [];
		}
		this.keyMap[index].push([key, value]);
	}

	get(key) {
		let index = this._hash(key);
		if (this.keyMap[index]) {
			for (let i = 0; i < this.keyMap[index].length; i++) {
				if (key === this.keyMap[index][i][0]) return this.keyMap[index][i][1];
			}
		}
		return undefined;
	}

	keys() {
		let keysArr = [];
		for (let i = 0; i < this.keyMap.length; i++) {
			if (this.keyMap[i]) {
				for (let j = 0; j < this.keyMap[i].length; j++) {
					if (!keysArr.includes(this.keyMap[i][j][0])) {
						keysArr.push(this.keyMap[i][j][0]);
					}
				}
			}
		}
		return keysArr;
	}

	values() {
		let valuesArr = [];
		for (let i = 0; i < this.keyMap.length; i++) {
			if (this.keyMap[i]) {
				for (let j = 0; j < this.keyMap[i].length; j++) {
					if (!valuesArr.includes(this.keyMap[i][j][1])) {
						valuesArr.push(this.keyMap[i][j][1]);
					}
				}
			}
		}
		return valuesArr;
	}
}

const ht = new HashTable(20);

ht.set('первый', 1);
ht.set('второй', 2);
ht.set('третий', 3);
ht.set('четвертый', 4);
ht.set('пятый', 5);
ht.set('шестой', 6);

console.log(ht);

console.log(ht.get('четвертый'));
console.log(ht.get('шестой'));

console.log(ht.keys());
console.log(ht.values());
