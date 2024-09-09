
function mergeSort(array, start, end) {
	if (start >= end) {
		return;
	}
	let mid = Math.floor((start + end) / 2);
	mergeSort(array, start, mid);
	mergeSort(array, mid + 1, end);
	merge(array, start, mid, end);
	return array;
}
function merge(arr, start, mid, end) {
	let leftArray = arr.slice(start, mid + 1);
	let rightArray = arr.slice(mid + 1, end + 1);
	let i = 0,
		j = 0,
		k = start;

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
	while (i < leftArray.length) {
		arr[k] = leftArray[i];
		k++;
		i++;
	}
	while (j < rightArray.length) {
		arr[k] = rightArray[j];
		k++;
		j++;
	}
}
let array = [3, 2, 1, 13, 8, 5, 0, 1];
let array2 = [105, 79, 100, 110];
console.log(mergeSort(array, 0, array.length - 1));
console.log(mergeSort(array2, 0, array2.length - 1));
