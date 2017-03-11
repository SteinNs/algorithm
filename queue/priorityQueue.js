/**
 * Created by Administrator on 2017/3/10.
 */
let Queue = require ( './queue' );
class PriorityQueue extends Queue {
	comp;
	// constructor (mode){
	// 	if(mode === 'high-first')
	// 		comp = queueEl
	// }
	constructor () {
		super ();
	}

	enqueue ( element, priority ) {
		let queueElement = new QueueElement ( element, priority );
		if ( this.isEmpty () ) {
			this.items.push ( element );
		} else {
			let added = false;
			for (let i = 0; i < this.items.length; i++) {
				if ( queueElement.priority < this.items[ i ].priority ) {
					this.items.splice ( i, 0, queueElement );
					added = true;
					break;
				}
				if ( !added ) {
					this.items.push ( queueElement );
				}

			}
		}
	}
}

class QueueElement {
	constructor ( element, priority ) {
		this.element = element;
		this.priority = priority;
	}
}