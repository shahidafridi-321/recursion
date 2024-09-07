// using recursion

function fibRec(len) {
	if (len <= 0) return [];
	if (len == 1) return [0];
	if (len == 2) return [0, 1];
	let fibArray = fibRec(len - 1);
	let nextNumber =
		fibArray[fibArray.length - 2] + fibArray[fibArray.length - 1];
	fibArray.push(nextNumber);
	return fibArray;
}

console.log(fibRec(8));
