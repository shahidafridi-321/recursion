function fib(number) {
	let arr = [0, 1];
	if (number <= 0) return [];
	if (number == 1) return [0];
	if (number == 2) return arr;
	for (let i = 3; i <= number; i++) {
		arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
	}
	return arr;
}
console.log(fib(8));
