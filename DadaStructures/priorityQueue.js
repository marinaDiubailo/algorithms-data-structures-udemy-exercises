class Node {
	constructor(val, priority) {
		this.val = val;
		this.priority = priority;
	}
}

class PriorityQueue {
	constructor() {
		this.values = [];
	}

	_bubbleUp() {
		let index = this.values.length - 1;
		const element = this.values[index];

		while (index > 0) {
			let parentIndex = Math.floor((index - 1) / 2);
			let parent = this.values[parentIndex];
			if (parent.priority <= element.priority) break;
			this.values[parentIndex] = element;
			this.values[index] = parent;
			index = parentIndex;
		}
	}

	enqueue(val, priority) {
		const node = new Node(val, priority);
		this.values.push(node);
		this._bubbleUp();
	}

	_sinkDown() {
		let idx = 0;
		const length = this.values.length;
		const element = this.values[0];

		while (true) {
			let leftChildIdx = 2 * idx + 1;
			let rightChildIdx = 2 * idx + 2;
			let leftChild;
			let rightChild;
			let swap = null;

			if (leftChildIdx < length) {
				leftChild = this.values[leftChildIdx];
				if (leftChild.priority < element.priority) {
					swap = leftChildIdx;
				}
			}
			if (rightChildIdx < length) {
				rightChild = this.values[rightChildIdx];
				if (
					(!swap && rightChild.priority < element.priority) ||
					(swap && rightChild.priority < leftChild.priority)
				) {
					swap = rightChildIdx;
				}
			}

			if (!swap) break;
			this.values[idx] = this.values[swap];
			this.values[swap] = element;
			idx = swap;
		}
	}

	dequeue() {
		const removed = this.values[0];
		const end = this.values.pop();
		if (this.values.length > 0) {
			this.values[0] = end;
			this._sinkDown();
		}
		return removed;
	}
}

const q = new PriorityQueue();

q.enqueue('первый', 10);
q.enqueue('второй', 5);
q.enqueue('третий', 15);
q.enqueue('третий', 0);
q.enqueue('третий', 2);
console.log(q);
q.dequeue();
console.log(q);
q.dequeue();
console.log(q);
q.dequeue();
console.log(q);
q.dequeue();
console.log(q);
q.dequeue();
console.log(q);
q.enqueue('третий', 2);
console.log(q);
