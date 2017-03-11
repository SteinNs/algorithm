/**
 * Created by Administrator on 2017/3/10.
 */
class Queue {
	items = [];

	constructor () {
	}

	enqueue ( v ) {
		this.items.push ( v );
	}

	dequeue () {
		return this.items.shift ();
	}

	front () {
		return this.items[ 0 ];
	}

	isEmpty () {
		return this.items.length === 0;
	}

	size () {
		return this.items.length;
	}

	print () {
		console.log ( this.items );
	}
}

module.exports = Queue;