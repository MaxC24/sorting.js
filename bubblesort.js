function bubbleSort(array) {
	console.log([].slice.call(arguments).toString());
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


function bubbleSort(array) {
	console.log(array.slice(0));
    var weirdThing = array.slice(0)
    console.log([].slice.call(arguments));
    var arrayLen = weirdThing.length - 1;
    var swapFound = true;
    while (swapFound) {
        swapFound = false;
        for (var x = 0; x < arrayLen; x++) {
            if (weirdThing[x] > weirdThing[x+1]) {
                var interimVar = weirdThing[x+1];
                weirdThing[x+1] = weirdThing[x];
                weirdThing[x] = interimVar;
                swapFound = true;
            }

        }
        arrayLen--;
    }
    console.log(weirdThing);
    return weirdThing;
}