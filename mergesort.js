function split(wholeArray) {
	var midPoint = Math.ceil(wholeArray.length / 2);
	var firstHalf = wholeArray.splice(0, midPoint);
	var secondHalf = wholeArray;

    return [firstHalf, secondHalf];
}

