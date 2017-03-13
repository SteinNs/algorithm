/**
 * Created by Administrator on 2017/3/9.
 */
/*
avg O(nlogn) best O(nlogn) worst O(n2) space O(logn) in-place unstable
 */
function swap ( array, index1, index2 ) {
	[ array[ index1 ], array[ index2 ] ] = [ array[ index2 ], array[ index1 ] ];
}

function quickSort ( array, left, right ) {
	let index;
	left = left > 0 ? left : left + array.length;
	right = right > 0 ? right : right + array.length;
	if ( left < right ) {
		[ left, right ] = [ right, left ];
	}
	if ( array.length > 1 ) {
		index = partition ( array, left, right );
	}
	if ( left < index - 1 ) {
		quickSort ( array, left, index - 1 );
	}
	if ( index < right ) {
		quickSort ( array, index, right );
	}
};


function partition ( array, left, right ) {
	let pivot = array[ Math.floor ( (right + left) / 2 ) ];
	let i = left;
	let j = right;
	while ( i <= j ) {
		while ( array[ i ] < pivot ) {
			i++;
		}
		while ( array[ j ] > pivot ) {
			j--;
		}
		if ( i <= j ) {
			swap ( array, i, j );
			i++;
			j++
		}
	}
	return i;
}

module.exports = quickSort;