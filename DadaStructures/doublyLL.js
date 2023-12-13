class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}
class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		const node = new Node(val);

		if (!this.head) {
			this.head = node;
			this.tail = this.head;
		} else {
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node;
		}

		this.length++;
		return this;
	}

	pop() {
		if (!this.head) return undefined;
		let popped = this.tail;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = popped.prev;
			this.tail.next = null;
			popped.prev = null;
		}

		this.length--;

		return popped;
	}

	shift() {
		if (!this.head) return undefined;
		let shifted = this.head;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = shifted.next;
			this.head.prev = null;
			shifted.next = null;
		}

		this.length--;
		return shifted;
	}

	unshift(val) {
		const node = new Node(val);

		if (!this.head) {
			this.head = node;
			this.tail = this.head;
		} else {
			node.next = this.head;
			this.head.prev = node;
			this.head = node;
		}
		this.length++;
		return this;
	}

	// get(idx) {
	// 	if (idx < 0 || idx >= this.length) return null;
	// 	const halfLength = Math.floor(this.length / 2);
	// 	let current;

	// 	if (halfLength <= idx) {
	// 		current = this.tail;
	// 		for (let i = this.length - 1; i > 0; i--) {
	// 			if (i === idx) return current;
	// 			current = current.prev;
	// 		}
	// 	} else {
	// 		current = this.head;
	// 		for (let i = 0; i < this.length; i++) {
	// 			if (i === idx) return current;
	// 			current = current.next;
	// 		}
	// 	}

	// }
	get(idx) {
		if (idx < 0 || idx >= this.length) return null;
		const halfLength = Math.floor(this.length / 2);
		let current, counter;

		if (halfLength <= idx) {
			current = this.tail;
			counter = this.length - 1;

			while (counter !== idx) {
				current = current.prev;
				counter--;
			}
		} else {
			current = this.head;
			counter = 0;

			while (counter !== idx) {
				current = current.next;
				counter++;
			}
		}
		return current;
	}

	set(idx, val) {
		const current = this.get(idx);

		if (current) {
			current.val = val;
			return true;
		}

		return false;
	}

	insert(idx, val) {
		if (idx < 0 || idx > this.length) return false;
		if (idx === this.length) return !!this.push(val);
		if (idx === 0) return !!this.unshift(val);

		let previous = this.get(idx - 1);
		let after = previous.next;
		const node = new Node(val);

		previous.next = node;
		node.prev = previous;
		node.next = after;
		after.prev = node;
		this.length++;
		return true;
	}

	remove(idx) {
		if (idx < 0 || idx >= this.length) return undefined;
		if (idx === this.length - 1) return this.pop();
		if (idx === 0) return this.shift();

		const removed = this.get(idx);
		const previous = removed.prev;
		const after = removed.next;

		previous.next = after;
		after.prev = previous;
		removed.next = null;
		removed.prev = null;
		this.length--;
		return removed;
	}

	reverse() {
		let current = this.head;
		this.head = this.tail;
		this.tail = current;
		let next = null;
		let previous = null;

		for (let i = 0; i < this.length; i++) {
			next = current.next;
			current.next = previous;
			current.prev = next;
			previous = current;
			current = next;
		}
		return this;
	}
}

const list = new DoublyLinkedList();
//console.log(list);
list.push(1);
list.push(2);
list.push(3);
// list.pop();
// list.pop();
// list.pop();
//console.log(list);
list.shift();
//console.log(list);
list.unshift(1);
list.unshift(0);
console.log(list);
// console.log(list.get(0).val);
// console.log(list.get(1).val);
// console.log(list.get(2).val);
// list.remove(2);
// console.log(list);
