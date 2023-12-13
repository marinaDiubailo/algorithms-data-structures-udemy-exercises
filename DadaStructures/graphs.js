class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}

	addEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1].push(vertex2);
		this.adjacencyList[vertex2].push(vertex1);
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

	//! Depth first traversel
	// Recursive solution

	depthFirstRecursive(start) {
		const adjacencyList = this.adjacencyList;
		const result = [];
		const visited = {};

		function helper(vertex) {
			if (!vertex) return null;
			visited[vertex] = true;
			result.push(vertex);

			adjacencyList[vertex].forEach(neighbor => {
				if (!visited[neighbor]) return helper(neighbor);
			});
		}
		helper(start);
		return result;
	}

	// Iterative solution
	depthFirstIterative1(start) {
		const stack = [start];
		const result = [];
		const visited = {};
		let vertex;

		while (stack.length) {
			vertex = stack.pop();
			if (!visited[vertex]) {
				visited[vertex] = true;
				result.push(vertex);
				stack.push(...this.adjacencyList[vertex]);
			}
		}
		return result;
	}

	// from video
	depthFirstIterative(start) {
		const stack = [start];
		const result = [];
		const visited = {};
		let vertex;

		visited[start] = true;

		while (stack.length) {
			vertex = stack.pop();
			result.push(vertex);

			this.adjacencyList[vertex].forEach(neighbor => {
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					stack.push(neighbor);
				}
			});
		}
		return result;
	}

	//! Breadth first traversel
	breadthFirstIterative(start) {
		const queue = [start];
		const result = [];
		const visited = {};
		let vertex;

		visited[start] = true;

		while (queue.length) {
			vertex = queue.shift();
			result.push(vertex);

			this.adjacencyList[vertex].forEach(neighbor => {
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					queue.push(neighbor);
				}
			});
		}
		return result;
	}
}
const g = new Graph();

g.addVertex('a');
g.addVertex('m');
g.addVertex('y');

g.addEdge('a', 'm');
g.addEdge('a', 'y');
g.addEdge('y', 'm');
//g.removeEdge('a', 'm');

console.log(g);
console.log(g.depthFirstRecursive('a'));
console.log(g.depthFirstIterative('a'));
console.log(g.breadthFirstIterative('a'));
