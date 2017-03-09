/**
 * Created by Administrator on 2017/3/9.
 */
function mergeSortWithRecursion ( array ) {
	let length = array.length;
	if ( length < 2 ) {
		return array;
	}
	let midIndex = Math.floor ( length / 2 );
	let left = array.slice ( 0, midIndex );
	let right = array.slice ( midIndex );
	return merge ( mergeSortWithRecursion ( left ), mergeSortWithRecursion ( right ) );
}

function merge ( left, right ) {
	let ret = [];
	while ( left.length && right.length ) {
		left[ 0 ] <= right[ 0 ] ?
			ret.push ( left.shift () ) : ret.push ( right.shift () );
	}
	if ( left.length )
		ret = [ ...ret, ...left ];
	if ( right.length )
		ret = [ ...ret, ...right ];
	return ret;

}

function mergeSortWithIteration(array){

}