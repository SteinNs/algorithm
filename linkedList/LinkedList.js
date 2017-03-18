/**
 * Created by Administrator on 2017/3/11.
 */
class Node {
	next = null;

	constructor ( element ) {
		this.element = element
	}
}
;

class LinkedList {
	head = new Node ( null );
	length = 0;

	append ( element ) {
		let newNode = new Node ( element );
		let current;
		if ( this.head.next === null ) {
			this.head.next = newNode;
		} else {
			current = this.head.next;
			while ( current.next ) {
				current = current.next;
			}
			current.next = newNode;
		}
		this.length++;
	}

	find ( element ) {
		let current = this.head.next;
		let index = 0;
		while ( current ) {
			if ( current.element === element ) {
				return {
					index,
					current
				}
			}
			index++;
			current = current.next;

		}
		return -1;
	}

	findPrevious ( element ) {
		let current = this.head;
		let index = -1;
		while ( current.next ) {
			if ( current.next.element === element ) {
				return {
					index,
					current
				}
			}
			index++;
			current = current.next;
		}
		return -1;

	}


	removeAt ( position ) {
		if ( position > -1 && position < this.length ) {
			let current = this.head.next;
			let prev;
			let index = 0;
			if ( position === 0 ) {
				this.head.next = current.next;
			} else {
				while ( index++ < position ) {
					prev = current;
					current = current.next;
				}
				prev.next = current.next;
			}
			this.length--;
			return current.element;

		} else {
			return null;
		}
	}

	remove ( element ) {
		let prev = this.findPrevious ( element );
		prev.next = prev.next.next;
	}

	insert ( position, element ) {
		if ( position >= 0 && position <= this.length ) {
			let node = new Node ( element );
			let current = this.head.next;
			let prev;
			let index;
			if ( position === 0 ) {
				node.next = current;
				this.head.next = node;
			} else {
				while ( index++ < position ) {
					prev = current;
					current = current.next;
				}
				node.next = current;
				prev.next = node;
			}
			this.length++;
			return true;
		} else {
			return false;
		}
	}

	isEmpty () {
		return this.length === 0;
	}

	size () {
		return this.length;
	}

	getHead () {
		return this.head.next;
	}

	toString () {
		let current = this.head.next;
		let string = '';
		while ( current ) {
			string += current.element;
			current = current.next;
		}
		return string;
	}


}