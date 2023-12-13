class WeightedGraph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}

	addEdge(vertex1, vertex2, weight) {
		this.adjacencyList[vertex1].push({ node: vertex2, weight });
		this.adjacencyList[vertex2].push({ node: vertex1, weight });
	}

	removeEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
			v => v !== vertex2
		);
		this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
			v => v !== vertex1
		);
	}

	removeVertex(vertex) {
		while (this.adjacencyList[vertex].length) {
			const adjecentVertex = this.adjacencyList[vertex].pop();
			this.removeEdge(vertex, adjecentVertex);
		}
		delete this.adjacencyList[vertex];
	}

	dijkstra(start, finish) {
		const nodes = new PriorityQueue();
		const distances = {};
		const previous = {};
		let path = [];
		let smallest;

		// build up initial state
		for (let vertex in this.adjacencyList) {
			if (vertex === start) {
				distances[vertex] = 0;
				nodes.enqueue(vertex, 0);
			} else {
				distances[vertex] = Infinity;
				nodes.enqueue(vertex, Infinity);
			}
			previous[vertex] = null;
		}

		// as long there is something to visit
		while (nodes.values.length) {
			smallest = nodes.dequeue().val;
			if (smallest === finish) {
				while (previous[smallest]) {
					path.push(smallest);
					smallest = previous[smallest];
				}
				break;
			}

			if (smallest || distances[smallest] !== Infinity) {
				for (let neighbor in this.adjacencyList[smallest]) {
					// find neighboring node
					let nextNode = this.adjacencyList[smallest][neighbor];
					// calculate new distance to neighboring node
					let candidate = distances[smallest] + nextNode.weight;
					let nextNeighbor = nextNode.node;

					if (candidate < distances[nextNeighbor]) {
						// updating new smallest distance to neighbor
						distances[nextNeighbor] = candidate;
						// updating previous - how we got to neighbor
						previous[nextNeighbor] = smallest;
						//enqueue in priority queue with new priority
						nodes.enqueue(nextNeighbor, candidate);
					}
				}
			}
		}

		return path.concat(smallest).reverse();
	}
}

// A simple priority queue
class PriorityQueue {
	constructor() {
		this.values = [];
	}

	enqueue(val, priority) {
		this.values.push({ val, priority });
		this._sort();
	}

	dequeue() {
		return this.values.shift();
	}

	_sort() {
		this.values.sort((a, b) => a.priority - b.priority);
	}
}

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

const graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'F', 1);
graph.addEdge('D', 'E', 3);
graph.addEdge('F', 'E', 1);
graph.addEdge('B', 'E', 3);

console.log(graph.dijkstra('A', 'E'));
