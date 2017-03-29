/**
 * Created by Administrator on 2017/3/28.
 */
class Node {
	constructor ( key ) {
		this.key = key;
		this.left = null;
		this.right = null;
		this.height = 0;
	}
}

module.exports = Node;