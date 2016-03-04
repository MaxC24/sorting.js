



function split(array){
	// if(array.length ===0 ){
	// 	return [];
	// } else if(array.length === 1){
	// 	return [array];
	// } else {
		var midPoint = Math.ceil(array.length / 2);
		var firstHalf = array.splice(0, midPoint);
		var secondHalf = array;
		//array = split(firstHalf).concat(split(secondHalf));
		return [firstHalf, secondHalf];
	}

}

function merge(arr1, arr2){
	var sortedArray = [];
	var arr1place = 0;
	var arr2place = 0;
	while (arr1place < arr1.length && arr2place < arr2.length) {
		if (arr1[arr1place] <= arr2[arr2place]) {
			sortedArray.push(arr1[arr1place]);
			arr1place += 1;
		} else {
			sortedArray.push(arr2[arr2place]);
			arr2place += 1;
		}
	}
	if (arr1place < arr1.length) {
		sortedArray =sortedArray.concat(arr1.slice(arr1place, arr1.length));
	} else {	
		sortedArray = sortedArray.concat(arr2.slice(arr2place, arr2.length));
	}
	return sortedArray;
}


function mergeSort(array) {
	if (Array.isArray(array[0])) {
		array.forEach(element) {
			mergeSort(split(element));
		}
	} else {
		if (array.length === 1) {
			return array[0];
		} else {
			return merge(array[0], array[1]);
				
	}

}


