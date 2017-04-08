/**
 * Created by Administrator on 2017/4/5.
 */

class Node {
	constructor ( element ) {
		this.element = element;
		this.next = null;
	}
}
class CircularLinkedList {
	constructor () {
		this.head = null;
		this.length = 0;
	}

	append ( element ) {
		let node = new Node ( element );
		let cur;
		if ( this.head === null ) {
			this.head = node;
		} else {
			cur = this.head;
			while ( cur.next !== this.head ) {
				cur = cur.next;
			}
			cur.next = node;
		}
		node.next = this.head;
		this.length++;
	}

	insert ( pos, element ) {
		if ( pos >= 0 && pos <= this.length ) {
			let node = new Node ( element );
			let cur = this.head;
			let prev;
			let index = 0;
			//插入第一项，则需要更改头指针，并更新最后一项的next指针
			if ( pos === 0 ) {
				node.next = cur;
				while ( cur.next !== this.head ) {
					cur = cur.next;
				}
				this.head = node;
				cur.next = this.head;
			} else {
				while ( index++ < pos ) {
					prev = cur;
					cur = cur.next;
				}
				node.next = cur;
				prev.next = node;
				//如果插入最后一项，需要将next指向head
				if(node.next === null){
					node.next = this.head;
				}
			}
			this.length++;
			return true;

		} else{
			return false;
		}
	}
	removeAt(pos){
		if(pos > -1 && pos < this.length){
			let cur = this.head;
			let prev;
			let index = 0;
			//如果删除第一项，则需要将head指向下一项，同时将最后一项的next更新
			if(pos === 0 ){
				while(cur.next !== this.head){
					cur = cur.next;
				}
				this.head = this.head.next;
				cur.next = this.head;
			} else {
				while(index++ < pos){
					prev = cur;
					cur = cur.next;
				}
				prev.next = cur.next;
			}
			this.length--;
			return cur.element;

		} else {
			return null;
		}
	}
	indexOf(element){
		let cur = this.head;
		let index = 0;
		while (cur){
			if(cur.element === element){
				return index;
			}
			cur = cur.next;
		}
		return -1;
	}
	remove(element){
		let index = this.indexOf(element);
		return this.removeAt(index);
	}
	isEmpty(){
		return this.length === 0;
	}
	size(){
		return this.length;
	}
	getHead(){
		return this.head;
	}
	toString(){
		let cur = this.head;
		let s = cur.element;
		while (cur.next !== this.head){
			cur = cur.next;
			s += `,${cur.element}`;
		}
		return s.toString();
	}
	print(){
		console.log(this.toString());
	}
}