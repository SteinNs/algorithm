/**
 * Created by Administrator on 2017/3/11.
 */
class Set {
	items = {};

	constructor () {

	}

	has ( v ) {
		return this.items.hasOwnProperty ( v );
	}

	add ( v ) {
		if ( !this.has ( v ) ) {
			this.items[ v ] = v;
			return true;
		}
		return false;
	}

	remove ( v ) {
		if ( this.has ( v ) ) {
			delete this.items[ v ];
			return true;
		}
		return false;
	}

	clear () {
		this.items = {};
	}

	size () {
		return Object.keys ( this.items ).length;
	}

	values () {
		return Object.keys ( this.items );
	}

	union ( otherSet ) {
		let unionSet = new Set ();
		let values = this.values ();
		for (let v of values) {
			unionSet.add ( v );
		}
		let otherValues = otherSet.values ();
		for (let ov of otherValues) {
			unionSet.add ( ov );
		}
		return unionSet;

	}

	interSection ( otherSet ) {
		let intersectionSet = new Set ();
		let values = this.values ();
		for (let v of values) {
			if ( otherSet.has ( v ) ) {
				intersectionSet.add ( v );
			}
		}
		return intersectionSet;
	}

	difference ( otherSet ) {
		let differenceSet = new Set ();
		let values = this.values ();
		for (let v of values) {
			if ( !otherSet.has ( v ) ) {
				differenceSet.add ( v );
			}
		}
		return differenceSet;
	}

	isSubset ( otherSet ) {
		if ( this.size () > otherSet.size () ) {
			return false;
		} else {
			let values = this.values();
			for(let v of values){
				if(!otherSet.has(v)){
					return false;
				}
			}
			return true;
		}
	}

}

module.exports = Set;