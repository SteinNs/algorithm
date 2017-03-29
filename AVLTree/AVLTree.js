/**
 * Created by Administrator on 2017/3/27.
 */
let node = require ( './Node' );
class AVLTree {
	constructor () {
		this.root = null;
	}

	getRoot () {
		return this.root;
	}

	height ( node ) {
		if ( node === null ) {
			return -1;
		} else {
			return node.height;
		}
	}

	rotationLL ( node ) {
		let tmp = node.left;
		node.left = tmp.right;
		tmp.right = node;
		//旋转完首先要更新原来父节点的高度
		node.height = Math.max( this.height( node.left),this.height(node.right)) + 1;
		//然后更新新父节点的高度
		tmp.height = Math.max( this.height( tmp.left), this.height(tmp.right)) + 1;
		return tmp;
	}

	rotationRR ( node ) {
		let tmp = node.right;
		node.right = tmp.left
		tmp.left = node;
		//旋转完首先要更新原来父节点的高度
		node.height = Math.max( this.height( node.left),this.height(node.right)) + 1;
		//然后更新新父节点的高度
		tmp.height = Math.max( this.height( left.left), this.height(left.right)) + 1;
		return tmp;
	}

	rotationLR ( node ) {
		//首先将失衡节点的左节点进行RR
		node.left = this.rotationRR(node.left);
		//然后对失衡节点
		return this.rotationLL(node);
	}


	rotationRL ( node ) {
		//首先对失衡节点的有节点进行LL
		node.right = this.rotationLL( node.right);

		return this.rotationRR(node);

	}

	insert ( node, element ) {
		//如果节点不存在，那么创建新节点
		if ( node === null ) {
			node = new Node ( element );
		}
		//否则如果插入节点和当前节点不一致，则插入
		else if ( element < node.key ) {
			node.left = this.insert ( node.left, element );
			if ( this.height ( node.left ) - this.height ( node.right ) === 2 ) {
				//如果插入的节点比失衡节点的左节点还小，证明是LL情形
				if ( element < node.left.key ) {
					node = this.rotationLL ( node );
				} else {
					//否则是LR情形
					node = this.rotationLR ( node );
				}

			}
		} else if ( element > node.key ) {
			node.right = this.insert ( node.right, element );
			if ( this.height ( node.right ) - this.height ( node.left ) === 2 ) {
				//如果插入的节点比失衡节点的右节点还小，证明是RR情形
				if ( element > node.right.key ) {
					node = this.rotationRR ( node );
				} else {
					//否则是RL情形
					node = this.rotationRL ( node );
				}
			}
		}
		//如果插入节点已存在，则不插入
		//插入完节点之后，需要更新节点高度信息
		node.height = Math.max ( this.height ( node.left ), this.height ( node.right ) ) + 1;
		return node;
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

	remove(node,element){
		if(node === null){
			return null;
		}

	}


}