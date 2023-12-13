class Node {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}
class SinglyLinkedList {
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
			this.tail = node;
		}

		this.length++;
		return this;
	}

	pop() {
		if (!this.head) return undefined;
		let current = this.head;
		let newTail = current;

		while (current.next) {
			newTail = current;
			current = current.next;
		}

		this.tail = newTail;
		this.tail.next = null;
		this.length--;

		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}

		return current;
	}

	shift() {
		if (!this.head) return undefined;
		let current = this.head;
		this.head = current.next;
		this.length--;

		if (this.length === 0) {
			this.tail = null;
		}

		return current;
	}

	unshift(val) {
		const node = new Node(val);

		if (!this.head) {
			this.head = node;
			this.tail = this.head;
		} else {
			node.next = this.head;
			this.head = node;
		}

		this.length++;
		return this;
	}

	get(idx) {
		if (idx < 0 || idx >= this.length) return null;
		let counter = 0;
		let current = this.head;

		while (counter !== idx) {
			current = current.next;
			counter++;
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

		const previous = this.get(idx - 1);
		const after = previous.next;
		const node = new Node(val);
		previous.next = node;
		node.next = after;
		this.length++;
		return true;
	}

	remove(idx) {
		if (idx < 0 || idx >= this.length) return undefined;
		if (idx === this.length - 1) return this.pop();
		if (idx === 0) return this.shift();

		const previous = this.get(idx - 1);
		const removed = previous.next;
		previous.next = removed.next;
		this.length--;
		return removed;
	}

	reverse() {
		if (!this.head) return undefined;
		let current = this.head;
		this.head = this.tail;
		let next;
		let previous = null;
		this.tail = current;

		for (let i = 0; i < this.length; i++) {
			next = current.next;
			current.next = previous;
			previous = current;
			current = next;
		}
		return this;
	}
	rotate(num) {
		let start;
		if (num >= 0) start = num % this.length;
		if (num < 0) start = this.length + (num % this.length);

		if (start === 0) return this;

		let previous = this.get(start - 1);
		let rotateTail = this.head;

		this.head = previous.next;
		this.tail.next = rotateTail;
		previous.next = null;
		this.tail = previous;
		return this;
	}
}

const list = new SinglyLinkedList();
//console.log(list);
list.push(91);
//console.log(list);
list.push(92);
//console.log(list);
list.push(93);
//console.log(list);
// console.log(list.pop());
// console.log(list);
// console.log(list.pop());
// console.log(list);
// console.log(list.pop());
// console.log(list);
// console.log(list.pop());
// console.log(list);
// list.shift();
// console.log(list);
// list.shift();
// console.log(list);
// list.shift();
// console.log(list);
list.unshift(90);
//console.log(list);
// console.log(list.get(0));
// console.log(list.get(1));
// console.log(list.get(2));
// list.set(0, 900);
// list.set(1, 901);
// list.set(2, 902);
console.log(list);
// list.insert(1, 90.5);
// console.log(list);
// console.log(list.get(1));
// console.log(list.get(2));
// list.remove(1);
// console.log(list);
list.reverse();
console.log(list);
