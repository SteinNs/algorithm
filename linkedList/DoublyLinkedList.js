/**
 * Created by Administrator on 2017/3/11.
 */
class Node {

	constructor ( element ) {
		this.element = element;
		this.next = null;
		this.prev = null;
	}

}

class DoublyLinkedList {
	constructor () {
		this.length = 0;
		this.head = null;
		this.tail = null;
	}

	append ( element ) {
		let node = new Node ( element );
		let cur;
		if ( this.head === null ) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node;
		}
		this.length++;
	}

	/**
	 *
	 * 在指定位置插入节点
	 * @param position
	 * @param element
	 * @returns {boolean}
	 */

	insert ( position, element ) {
		//检查边界值
		if ( position >= 0 && position <= this.length ) {
			let node = new Node ( element );
			let current = this.head;
			let prev;
			let index = 0;
			//如果插入在第一项
			if ( position === 0 ) {
				//如果链表为空，则插入该节点，并将双链表的头指针和尾指针指向该节点
				if ( !this.head ) {
					this.head = node;
					this.tail = node;
				} else {
					//否则需要将待插入节点的next指向原来的第一项，并将原来的第一项的prev指向待插入节点
					//并将头指针指向待插入节点
					node.next = current;
					current.prev = node;
					head = node;
				}
			}
			//如果是插入在最后一项
			else if ( position === this.length ) {
				//需要将待插入节点的prev指向原来的最后一项，并将原来的最后一项的next指向待插入节点
				//并将尾指针指向待插入节点
				current = this.tail;
				current.next = node;
				node.prev = current;
				this.tail = node;
			}
			//否则需要先找到位置
			else {
				while ( index++ < position ) {
					prev = current;
					current = current.next;
				}
				//然后重新设置next和prev
				node.next = current;
				prev.next = node;
				node.prev = prev;
				current.prev = node;
			}
			this.length++
			return true;


		} else {
			return false;
		}
	}

	removeAt ( position ) {
		if ( position > -1 && position < length ) {
			let current = this.head;
			let prev;
			let index = 0;
			//如果是第一项
			if ( position === 0 ) {
				head = current.next;
				//如果只有一项，则需要将尾指针设置为null
				if ( this.length === 1 ) {
					this.tail = null;
				}
				else {
					head.prev = null;
				}
			}
			//移除最后一项,并将尾指针前移，同时将前移尾指针所指节点的next设置为null
			else if ( position === this.length - 1 ) {
				current = this.tail;
				this.tail = current.prev;
				this.tail.next = null;
			}

			else {
				while ( index++ < position ) {
					prev = current;
					current = current.next;
				}
				//将prev与current的下一项链接起来，跳过current
				prev.next = current.next;
				current.next.prev = prev;
			}
			this.length--;
			return current.element;
		} else {
			return null;
		}
	}

	indexOf ( element ) {
		let cur = this.head;
		let index = 0;
		while ( cur ) {
			if ( cur.element === element ) {
				return index;
			}
			cur = cur.next;
		}
		return -1;
	}

	remove ( element ) {
		let index = this.indexOf ( element );
		return this.removeAt ( index );
	}

	isEmpty () {
		return this.length === 0;
	}

	size () {
		return this.length;
	}

	toString () {
		let cur = this.head;
		let s = cur ? cur.element : '';
		while ( cur && cur.next ) {
			s += ', ' + cur.element;
		}
		return s;

	}
	inverseToString(){
		let cur = this.tail;
		let s = cur?cur.element:'';
		while(cur && cur.prev){
			cur = cur.prev;
			s+=', '+cur.element;
		}
		return s;
	}
}

module.exports = DoublyLinkedList;