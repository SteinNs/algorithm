/**
 * Created by Administrator on 2017/4/5.
 */
let LinkedList = require ( '../linkedList/LinkedList' );
class ValuePair {
	constructor ( key, value ) {
		this.key = key;
		this.value = value;
		this.toString = () => `[${this.key}-${this.value}]`;
	}
}
class HashTable {
	constructor () {
		this.table = [];
	}


	/**
	 * lose-lose散列函数
	 * @param key
	 * @returns {number}
	 */
	loseloseHashCode ( key ) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash += key.charCodeAt ( i );
		}
		return hash % 37;
	}

	/**
	 * djb2散列函数
	 * @param key
	 * @returns {number}
	 */
	djb2HashCode ( key ) {
		let hash = 5381;
		for (let i = 0; i < key.length; i++) {
			hash = hash * 33 + key.charCodeAt ( i );
		}
		return hash % 1033;
	}

	/**
	 * 对实际散列函数进行抽象
	 * @param key
	 * @param method
	 * @returns {*}
	 */
	hash ( key, method ) {
		return this[ method ] ( key );
	}

	/**
	 * 对采用分离链接线性探测进行抽象
	 * @param key
	 * @param value
	 * @param HashMethod 散列生成函数
	 * @param HashConflictMethod 分离链接和线性探测选择
	 */



	/**
	 * 分离链接实现put
	 * @param key
	 * @param value
	 * @param method
	 */
	putWithLinkedList ( key, value, method ) {
		let pos = this.hash ( key, method );
		if ( this.table[ pos ] === undefined ) {
			this.table[ pos ] = new LinkedList ();
		}
		this.table[ pos ].append ( new ValuePair ( key, value ) );
	}

	/**
	 * 分离链接实现get
	 * @param key
	 * @param method
	 * @returns {*}
	 */
	getWithLinkedList ( key, method ) {
		let pos = this.hash ( key, method );
		if ( this.table[ pos ] !== undefined ) {
			let cur = this.table[ pos ].getHead ();
			//从头遍历找到
			while ( cur ) {
				if ( cur.element.key === key ) {
					return cur.element.value;
				}
				cur = cur.next;
			}
		}
		return undefined;
	}

	/**
	 * 分离链接实现remove
	 * @param key
	 * @param method 散列函数名
	 * @returns {boolean}
	 */
	removeWithLinkedList ( key, method ) {
		let pos = this.hash ( key, method );
		if ( this.table[ pos ] !== undefined ) {
			let cur = this.table[ pos ].getHead ();
			while ( cur ) {
				if ( cur.element.key === key ) {
					this.table[ pos ].remove ( cur.element );
					if ( this.table[ pos ].isEmpty () ) {
						this.table[ pos ] = undefined;
					}
					return true;
				}
				cur = cur.next;
			}
			return false;
		}
	}

	/**
	 * 使用线性探查法put，即如果table[pos]已经有元素，则往index+1...index+n找，直到找到一个没元素的位置插入
	 * @param key
	 * @param value
	 * @param method 散列函数名
	 */
	putLinear ( key, value, method ) {
		let pos = this.hash ( key, method );
		if ( this.table[ pos ] == undefined ) {
			this.table[ pos ] = new ValuePair ( key, value );
		} else {
			let index = ++pos;
			while ( this.table[ index ] != undefined ) {
				index++;
			}
			this.table[ index ] = new ValuePair ( key, value );
		}
	}

	/**
	 *线性探测实现get
	 * @param key
	 * @param method
	 * @returns {*}
	 */
	getLinear ( key, method ) {
		let pos = this.hash ( key, method );
		if ( this.table[ pos ] !== undefined ) {
			if ( this.table[ pos ].key === key ) {
				return this.table[ pos ].value;
			} else {
				let index = ++pos;
				//当当前位置为空或者key与期望不同，则前进
				while ( this.table[ index ] === undefined || this.table[ index ].key !== key ) {
					index++;
				}
				if ( this.table[ index ].key === key ) {
					return this.table[ index ].value;
				}
			}
		}
		return undefined;
	}

	/**
	 * 线性探测实现remove
	 * @param key
	 * @param method
	 * @returns {boolean}
	 */
	removeLinear ( key, method ) {
		let pos = this.hash ( key, method );
		if ( this.table[ pos ] !== undefined ) {
			if ( this.table[ pos ].key === key ) {
				this.table[ pos ] = undefined;
				return true;
			} else {
				let index = ++pos;
				//当当前位置为空或者key与期望不同，则前进
				while ( this.table[ index ] === undefined || this.table[ index ].key !== key ) {
					index++;
				}
				if ( this.table[ index ].key === key ) {
					this.table[ index ] = undefined;
					return true;
				}
			}
		}
		return false;
	}

	/**
	 * put抽象
	 * @param key
	 * @param value
	 * @param HashMethod 散列函数名
	 * @param HashConflictMethod put具体实现名如putWithLinkedList或putLinear
	 * @returns {*}
	 */
	put ( key, value, HashMethod, HashConflictMethod ) {
		return this[HashConflictMethod](key,value,HashMethod);
	}

	/**
	 * get抽象
	 * @param key
	 * @param HashMethod 散列函数名
	 * @param HashConflictMethod get具体实现名如getWithLinkedList或getLinear
	 * @returns {*}
	 */
	get ( key, HashMethod, HashConflictMethod ) {
		return this[HashConflictMethod](key,HashMethod);
	}

	/**
	 * remove抽象
	 * @param key
	 * @param HashMethod 散列函数名
	 * @param HashConflictMethod remove具体实现名如removeWithLinkedList或removeLinear
	 * @returns {*}
	 */
	remove ( key, HashMethod, HashConflictMethod ) {
		return this[HashConflictMethod](key,HashMethod);
	}

}

module.exports = HashTable;