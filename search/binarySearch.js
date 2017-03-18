/**
 * Created by Administrator on 2017/3/9.
 */

function binarySearchWithRecursion ( array, key, start = 0, end = array.length - 1 ) {
	let midIndex = Math.floor ( (start + end) / 2 );
	if ( key === array[ midIndex ] )
		return midIndex;
	key < array[ midIndex ] ?
	return binarySearchWithRecursion ( array, key, start, midIndex - 1 )
:
	return binarySearchWithRecursion ( array, key, midIndex + 1, end );
};

function binarySearchWithIteration ( array, key, start = 0, end = array.length - 1 ) {
	while ( start <= end ) {
		let midIndex = Math.floor ( (start + end) / 2 );
		if ( key < array[ midIndex ] ) {
			end = midIndex - 1;
		} else if ( key > array[ midIndex ] ) {
			start = midIndex + 1;
		} else {
			return midIndex;
		}
	}
	return false;
};

module.exports = {
	binarySearchWithRecursion,
	binarySearchWithIteration
};