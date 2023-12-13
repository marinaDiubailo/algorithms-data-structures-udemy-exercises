// const swap = (arr, idx1, idx2) => {
// 	[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
// };

class MaxBinaryHeap {
	constructor() {
		this.values = [];
	}

	_bubbleUp() {
		let index = this.values.length - 1;
		const element = this.values[index];

		while (index > 0) {
			let parentIndex = Math.floor((index - 1) / 2);
			let parent = this.values[parentIndex];
			if (parent >= element) break;
			this.values[parentIndex] = element;
			this.values[index] = parent;
			index = parentIndex;
		}
	}

	insert(val) {
		this.values.push(val);
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
				if (leftChild > element) {
					swap = leftChildIdx;
				}
			}
			if (rightChildIdx < length) {
				rightChild = this.values[rightChildIdx];
				if (
					(!swap && rightChild > element) ||
					(swap && rightChild > leftChild)
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

	extractMax() {
		const max = this.values[0];
		const end = this.values.pop();
		if (this.values.length > 0) {
			this.values[0] = end;
			this._sinkDown();
		}
		return max;
	}
}

const heap = new MaxBinaryHeap();
console.log(heap);
heap.insert(100);
//console.log(heap);
heap.insert(99);
heap.insert(101);
heap.insert(3);
heap.insert(5);
heap.insert(103);
heap.insert(104);
heap.extractMax();
console.log(heap);
