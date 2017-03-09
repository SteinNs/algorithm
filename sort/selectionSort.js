/**
 * Created by Administrator on 2017/3/9.
 */
function selectionSort ( array ) {
	let length = array.length;
	let minIndex = 0;
	for (let i = 0; i < length - 1; i++) {
		minIndex = i;
		for (let j = i + 1; j < length; j++) {
			if ( array[ j ] < array[ j + 1 ] ) {
				minIndex = j;
			}
		}
		[ array[ i ], array[ minIndex ] ] = [ array[ minIndex ], array[ i ] ];
	}
	return array;
}

module.exports = selectionSort;