/**
 * Created by Administrator on 2017/3/9.
 */
function bubbleSort ( array ) {
	let length = array.length;
	for (let i = 0; i < length; i++) {
		for(j=0;j<length-1-i;j++){
			if(array[j] > array[j+1]){
				[array[j],array[j+1]] = [array[j+1],array[j]];
			}
		}
	}
	return array;
}


function bubbleSortWithPos(array){
	let length = array.length;
	let pos = 0;

}

function twoWayBubbleSort (  ) {

}


export default {
	bubbleSort,
	bubbleSortWithPos,
	twoWayBubbleSort
}