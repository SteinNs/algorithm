/**
 * Created by Administrator on 2017/3/11.
 */
let Node = require ( './Node' );
class BinarySearchTree {
	root = null;

	constructor () {

	}

	insert ( key ) {
		let newNode = new Node ( key );
		if ( this.root === null ) {
			this.root = newNode;
		} else {
			this.insertNode ( root, newNode );
		}
	}

	insertNode ( node, newNode ) {
		if ( newNode.key < node.key ) {
			if ( node.left === null ) {
				node.left = newNode;
			} else {
				this.insertNode ( node.left, newNode );
			}
		} else {
			if ( node.right === null ) {
				node.right = newNode;
			} else {
				this.insertNode ( node.right, newNode );
			}

		}
	}

	inOrderTraverse ( node, cb ) {
		if ( node !== null ) {
			this.inOrderTraverse ( node.left, cb );
			cb ( node.key );
			this.inOrderTraverse ( node.right, cb );
		}
	}

	preOrderTraverse ( node, cb ) {
		if ( node !== null ) {
			cb ( node.key );
			this.preOrderTraverse ( node.left, cb );
			this.preOrderTraverse ( node.right, cb );
		}
	}

	postOrderTraverse ( node, cb ) {
		if ( node !== null ) {
			this.postOrderTraverse ( node.left, cb );
			this.postOrderTraverse ( node.right, cb );
			cb ( node.key );
		}
	}

	min ( node ) {
		if ( node ) {
			while ( node && node.left !== null ) {
				node = node.left;
			}
			return node;
		}
		return null;
	}

	max ( node ) {
		if ( node ) {
			while ( node && node.right !== null ) {
				node = node.right;
			}
			return node;
		}
		return null;
	}

	search ( node, key ) {
		if ( node === null ) {
			return false;
		}
		if ( key < node.key ) {
			return this.search ( node.left, key );
		} else if ( key > node.key ) {
			return this.search ( node.right, key );
		} else {
			return true;
		}

	}

	remove ( node, key ) {
		if ( node === null ) {
			return null;
		}
		if ( key < node.key ) {
			this.remove ( node.left, key );
		} else if ( key > node.key ) {
			this.remove ( node.right, key );
		} else {
			//叶子节点直接删除
			if ( node.left === null && node.right === null ) {
				node = null;
				return node;
			}
			//一节点为空，直接用另一节点替代
			if ( node.left === null ) {
				node = node.right;
				return node;
			} else if ( node.right === null ) {
				node = node.left;
				return node;
			}
			//有两个子节点，则用右子树的最小节点替代
			let aux = this.min ( node.right );
			node.key = aux.key;
			node.right = this.remove ( node.right, aux.key );
			return node;

		}
	}

}