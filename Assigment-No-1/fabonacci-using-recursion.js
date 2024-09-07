// Using recursion to generate a Fibonacci sequence
// EDGES/Base Cases:
// 1) If the length is less than or equal to 0, return an empty array.
// 2) If the length equals 1, return an array with just one element [0].
// 3) If the length equals 2, return an array of [0, 1].
// 4) When the length exceeds 2, enter the recursive case:
//    - Call the function recursively with (length - 1) to get the Fibonacci sequence up to the previous length.
//    - Add the next Fibonacci number by summing the last two elements in the array.

function fibRec(len) {
	// BASE CASES
	if (len <= 0) return [];
	if (len == 1) return [0];
	if (len == 2) return [0, 1];

	// RECURSIVE CASE

	// stores the array for the step fibRec(len -1)
	let fibArray = fibRec(len - 1);

	// calculates next fabonacci number
	let nextNumber =
		fibArray[fibArray.length - 2] + fibArray[fibArray.length - 1];

	// pushes next fibonacci number to array
	fibArray.push(nextNumber);

	// return full array
	return fibArray;
}

console.log(fibRec(8)); //output [0, 1, 1,  2,  3, 5, 8, 13]
