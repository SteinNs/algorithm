/**
 * Created by Administrator on 2017/3/11.
 */
/*

 */
function shellSort ( array ) {
	let length = array.length;
	let tmp;
	let gap = 1;
	while ( gap < length / 3 ) {
		gap = gap * 3 + 1;
	}
	for (gap; gap > 0; gap = Math.floor ( gap / 3 )) {
		for (let i = gap; i < length; i++) {
			tmp = array[ i ];
			for (let j = i - gap; j > 0 && array[ j ] > tmp; j -= gap) {
				array[ j + gap ] = array[ j ];
			}
			arr[ j + gap ] = tmp;
		}
	}
	return array;
}

