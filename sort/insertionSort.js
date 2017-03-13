/**
 * Created by Administrator on 2017/3/9.
 */
/*
	avg O(n2) best O(n) worst O(n2) space O(1) in-place stable
 */
function insertionSort ( array ) {
	let length = array.length;
	let j;
	let tmp;
	for (let i = 1; i < length; i++) {
		j = i;
		tmp = array[ i ];
		while ( j > 0 && array[ j - 1 ] > tmp ) {
			array[ j ] = array[ j - 1 ];
			j--;
		}
		array[ j ] = tmp;
	}
}