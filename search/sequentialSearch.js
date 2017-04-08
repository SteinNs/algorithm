/**
 * Created by Administrator on 2017/4/8.
 */
function sequentialSearch ( arr, item ) {
	for (let i = 0; i < arr.length; i++) {
		if ( item === arr[ i ] ) {
			return i;
		}
	}
	return -1;
}
module.exports = sequentialSearch;