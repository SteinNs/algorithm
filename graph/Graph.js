/**
 * Created by Administrator on 2017/3/11.
 */
let Dictionary = require ( '../Dictionary/Dictionary' );
let Queue = require ( '../queue/Queue' );
/**
 *
 */
class Graph {
	constructor () {
		this.vertices = [];
		this.adjList = new Dictionary ();
	}

	/**
	 * 初始化顶点和其邻接数组
	 * @param v
	 */
	addVertex ( v ) {
		this.vertices.push ( v );
		this.adjList.set ( v, [] );
	}

	/**
	 * 在邻接表中添加无向图边
	 * @param v 端点v
	 * @param w 端点w
	 */
	addEdge ( v, w ) {
		this.adjList.get ( v ).push ( w );
		this.adjList.get ( w ).push ( v );
	}

	/**
	 * 在邻接表中添加有向图边
	 * @param v 起点v
	 * @param w 终点w
	 */
	addEdgeDAG ( v, w ) {
		this.adjList.get ( v ).push ( w );
	}


	toString () {
		let s = ``;
		for (let i = 0; i < this.vertices.length; i++) {
			s += `${this.vertices[ i ]}->`;
			let neighbors = this.adjList.get ( this.vertices[ i ] );
			for (let j = 0; j < neighbors.length; j++) {
				s += neighbors[ j ] + ' ';
			}
			s += '\n';
		}
		return s;
	}

	initializeColor () {
		let color = [];
		for (let i = 0; i < this.vertices.length; i++) {
			color[ this.vertices[ i ] ] = 'white';
		}
		return color;
	}

	/**
	 * 基础版bfs，只具有遍历功能
	 * 节点状态有三种，分别是white =>未访问,grey=>遍历其他点的邻接表时被访问，称为被访问状态,black=>被遍历时访问，称为被探索态
	 * @param v
	 * @param cb
	 */
	bfs ( v, cb ) {
		let color = this.initializeColor ();
		let queue = new Queue ();
		//先将根节点放入队列作为第一个访问
		queue.enqueue ( v );
		//当节点队列非空时，说明还有节点未遍历访问
		while ( !queue.isEmpty () ) {
			//拿到队列中第一个节点
			let u = queue.dequeue ();
			//获得他的邻接数组，并将自己置为grey
			let neighbors = this.adjList.get ( u );
			color[ u ] = 'grey';
			//遍历其邻接节点，如果还未访问过，则将置为grey，并插入队列最后，当同层遍历完，就会遍历
			for (let i = 0; i < neighbors.length; i++) {
				let w = neighbors[ i ];
				if ( color[ w ] === 'white' ) {
					color[ w ] = 'grey';
					queue.enqueue ( w );
				}
			}
			//最后需要置为black，表示已经探索过
			color[ u ] = 'black';
			if ( cb ) {
				cb ( u );
			}

		}
	}

	printNode ( v ) {
		console.log ( `Visited vertex:${v}` );
	}

	/**
	 * 改进版的BFS，增加统计路径长度和前溯点，从而可以计算最短路径
	 * @returns {{distance: Array, predecessors: Array}}
	 *
	 */
	BFS () {
		let color = this.initializeColor ();
		let queue = new Queue ();
		let d = [];
		let pred = [];
		queue.enqueue ( v );
		for (let i = 0; i < this.vertices.length; i++) {
			d[ this.vertices[ i ] ] = 0;
			pred[ this.vertices[ i ] ] = null;
		}
		while ( !queue.isEmpty () ) {
			let u = queue.dequeue ();
			let neighbors = this.adjList.get ( u );
			color[ u ] = 'grey';
			for (let i = 0; i < neighbors.length; i++) {
				let w = neighbors[ i ];
				if ( color[ w ] === 'white' ) {
					//置为grey，防止结点再被发现，从而导致路径长度更新覆盖前面的路径长度，
					color[ w ] = 'grey';
					//到达w的路径长度为到达u的路径长度+1，此时一定为最短路径，因为以后是逐层遍历的，所以第一次被发现，一定是最短的
					d[ w ] = d[ u ] + 1;
					//将u设置为w的前溯点
					pred[ w ] = u;
					queue.enqueue ( w );
				}
			}
			color[ u ] = 'black';
		}
		return {
			distance: d,
			predecessors: pred
		};
	}

	/**
	 * 深度优先遍历，利用的是递归的思想，访问递归访问每个结点
	 * @param cb
	 */
	dfs ( cb ) {
		let dfsVisit = ( u, color, cb ) => {
			color[ u ] = 'grey';
			if ( cb ) {
				cb ( u );
			}
			let neighbors = this.adjList.get ( u );
			for (let i = 0; i < neighbors.length; i++) {
				let w = neighbors[ i ];
				//当结点未访问，则对其进行递归深度遍历
				if ( color[ w ] === 'white' ) {
					dfsVisit ( w, color, cb );
				}
			}
			color[ u ] = 'black';
		};
		let color = this.initializeColor ();
		for (let i = 0; i < this.vertices.length; i++) {
			if ( color[ this.vertices[ i ] ] === 'white' ) {
				dfsVisit ( this.vertices[ i ], color, cb )
			}
		}
	}

	/**
	 * 改进版dfs，增加了统计被发现时间和探索完成时间以及前溯点
	 * 结点被发现或是探索完成都占用一个时间单位
	 * @returns {{discover: Array, finished: Array, predecessors: Array}}
	 * @constructor
	 */
	DFS () {
		let color = this.initializeColor ();
		let d = [];
		let f = [];
		let p = [];
		let time = 0;
		let DFSVisit = ( u, color, d, f, p ) => {
			console.log ( `discover ${u}` );
			color[ u ] = 'grey';
			d[ u ] = ++time;
			let neighbors = this.adjList.get ( u );
			for (let i = 0; i < neighbors.length; i++) {
				let w = neighbors[ i ];
				if ( color[ w ] === 'white' ) {
					p[ w ] = u;
					DFSVisit ( w, color, d, f, p );
				}
			}
			color[ u ] = 'black';
			f[ u ] = ++time;
			console.log ( `explored ${u}` );
		};
		for (let i = 0; i < this.vertices.length; i++) {
			f[ this.vertices[ i ] ] = 0;
			d[ this.vertices[ i ] ] = 0;
			p[ this.vertices[ i ] ] = 0;
		}
		for (let i = 0; i < this.vertices.length; i++) {
			if ( color[ this.vertices[ i ] ] === 'white' ) {
				DFSVisit ( this.vertices[ i ], color, d, f, p );
			}
		}
		return {
			discover: d,
			finished: f,
			predecessors: p
		};


	}


}