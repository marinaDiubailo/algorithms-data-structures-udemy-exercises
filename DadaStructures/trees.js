class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(val) {
		const node = new Node(val);

		if (!this.root) {
			this.root = node;
			return this;
		}

		let current = this.root;

		while (true) {
			if (val === current.val) return undefined;
			if (val < current.val) {
				if (!current.left) {
					current.left = node;
					return this;
				}
				current = current.left;
			} else {
				if (!current.right) {
					current.right = node;
					return this;
				}
				current = current.right;
			}
		}
	}

	find(val) {
		if (!this.root) return false;
		let current = this.root;
		let found = false;

		while (current && !found) {
			if (val < current.val) {
				current = current.left;
			} else if (val > current.val) {
				current = current.right;
			} else {
				found = true;
			}
		}
		if (!found) return undefined;
		return current;
	}

	contains(val) {
		if (!this.root) return false;
		let current = this.root;
		let found = false;

		while (current && !found) {
			if (val < current.val) {
				current = current.left;
			} else if (val > current.val) {
				current = current.right;
			} else {
				found = true;
			}
		}

		return found;
	}

	breadthFirstSearch() {
		const q = [];
		const visited = [];
		let node = this.root;

		q.push(node);

		while (q.length) {
			node = q.shift();
			visited.push(node.val);
			if (node.left) {
				q.push(node.left);
			}
			if (node.right) {
				q.push(node.right);
			}
		}

		return visited;
	}

	preOrder() {
		const visited = [];

		function traverse(node) {
			visited.push(node.val);
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		}

		traverse(this.root);
		return visited;
	}

	postOrder() {
		const visited = [];

		function traverse(node) {
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
			visited.push(node.val);
		}

		traverse(this.root);
		return visited;
	}

	inOrder() {
		const visited = [];

		function traverse(node) {
			node.left && traverse(node.left); // if (node.left) traverse(node.left);
			visited.push(node.val);
			node.right && traverse(node.right); // if (node.right) traverse(node.right);
		}

		traverse(this.root);
		return visited;
	}
}

const tree = new BinarySearchTree();

tree.insert(10);

tree.insert(5);
tree.insert(13);
tree.insert(3);
tree.insert(7);
tree.insert(11);
tree.insert(16);
console.log(tree);
// console.log(tree.find(15));
// console.log(tree.find(10));
// console.log(tree.find(3));
// console.log(tree.find(16));
console.log(tree.breadthFirstSearch());
console.log(tree.preOrder());
console.log(tree.postOrder());
console.log(tree.inOrder());
