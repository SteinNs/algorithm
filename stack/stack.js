/**
 * Created by Administrator on 2017/3/10.
 */
class Stack {
	items = [];

	constructor () {
	}

	push ( v ) {
		this.items.push ( v );
	}

	pop ( v ) {
		return this.items.pop ();
	}

	peek () {
		return this.items[ this.items.length - 1 ];
	}

	isEmpty () {
		return this.items.length === 0;
	}

	size () {
		return this.items.length;
	}

	clear () {
		this.items = [];
	}

	print () {
		console.log ( this.items );
	}
}