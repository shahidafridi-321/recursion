// this fun takes a number as an argument and returns an array
// returns an array equals in length to that number .
// the elements of the array are calculated as fabonnaci sequence
// e.g fib(8) returns [0, 1, 1,  2,  3, 5, 8, 13]

function fib(len) {
	let arr = [0, 1];
	if (len <= 0) return [];
	if (len == 1) return [0];
	if (len == 2) return arr;
	for (let i = 2; i < len; i++) {
		arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
	}
	return arr;
}
console.log(fib(8));
