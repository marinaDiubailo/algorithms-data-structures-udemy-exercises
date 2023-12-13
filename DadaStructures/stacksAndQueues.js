class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	push(val) {
		const node = new Node(val);

		if (!this.size) {
			this.first = node;
			this.last = this.first;
		} else {
			node.next = this.first;
			this.first = node;
		}

		return ++this.size;
	}

	pop() {
		if (!this.size) return null;
		let removed = this.first;

		if (this.first === this.last) {
			this.last = null;
		}

		this.first = this.first.next;
		this.size--;
		return removed.val;
	}
}

const stack = new Stack();

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	enqueue(val) {
		const node = new Node(val);

		if (!this.size) {
			this.first = node;
			this.last = this.first;
		} else {
			this.last.next = node;
			this.last = node;
		}

		return ++this.size;
	}

	dequeue() {
		if (!this.size) return null;
		let removed = this.first;

		if (this.first === this.last) {
			this.last = null;
		}

		this.first = this.first.next;
		this.size--;
		return removed.val;
	}
}
const q = new Queue();

console.log(q);
q.enqueue(1);
console.log(q);
q.enqueue(2);
q.enqueue(3);
console.log(q);
// q.dequeue();
// console.log(q);
// q.dequeue();
// console.log(q);
// q.dequeue();
// console.log(q);
// q.dequeue();
// console.log(q);
