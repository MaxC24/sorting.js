function bubbleSort(array) {
	console.log([].slice.call(arguments));
	var arrayLen = array.length - 1;
	var swapFound = true;
	while (swapFound) {
		swapFound = false;
		for (var x = 0; x < arrayLen; x++) {
			if (array[x] > array[x+1]) {
				var interimVar = array[x+1];
				array[x+1] = array[x];
				array[x] = interimVar;
				swapFound = true;
			}

		}
		arrayLen--;
	}
	return array;
}

