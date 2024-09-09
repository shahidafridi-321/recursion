// This Function takes three arguments ,an array,start index of that array and last index of the array.
// checks if the start index is greater then end index it simply returns
// else it recusively call itself
// returns sorted array

function mergeSort(array, start, end) {
	// BASE CASE
	if (start >= end) {
		return;
	}
	// RECURSIVE CASE
	let mid = Math.floor((start + end) / 2);
	mergeSort(array, start, mid);
	mergeSort(array, mid + 1, end);
	merge(array, start, mid, end);
	return array;
}

// takes 4 args , an array,start index,mid point of array,and an end index

function merge(arr, start, mid, end) {
	// create temporary arrays
	let leftArray = arr.slice(start, mid + 1);
	let rightArray = arr.slice(mid + 1, end + 1);
	let i = 0,
		j = 0,
		k = start;

	// if i less then length of left subArray as well as the j less then the length of right subArray
	// if it is merges the two halves in sorted order
	while (i < leftArray.length && j < rightArray.length) {
		if (leftArray[i] < rightArray[j]) {
			arr[k] = leftArray[i];
			i++;
			k++;
		} else {
			arr[k] = rightArray[j];
			j++;
			k++;
		}
	}

	// copy remaining elements from left half
	while (i < leftArray.length) {
		arr[k] = leftArray[i];
		k++;
		i++;
	}
	// copy remaining elements from right half

	while (j < rightArray.length) {
		arr[k] = rightArray[j];
		k++;
		j++;
	}
}

// Test the mergeSort function
let array = [3, 2, 1, 13, 8, 5, 0, 1];
let array2 = [105, 79, 100, 110];

console.log(mergeSort(array, 0, array.length - 1)); // output [0, 1, 1,  2 , 3, 5, 8, 13]
console.log(mergeSort(array2, 0, array2.length - 1)); // output [ 79, 100, 105, 110 ]
