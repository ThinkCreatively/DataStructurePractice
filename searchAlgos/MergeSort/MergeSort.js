/* Example: Splits up array into smaller arrays than compares and merges smaller arrays back together */

// Merge function

function merge(array, array2) {
  let result = [];
  let i = 0;
  let j = 0;
  let length = array.length + array2.length;
  while (i !== array.length && j !== array2.length) {
    if (array[i] < array2[j]) {
      result.push(array[i]);
      i++;
    } else {
      result.push(array2[j]);
      j++;
    }
  }
  while (i < array.length) {
    result.push(array[i]);
    i++
  }
  while (j < array2.length) {
    result.push(array2[j]);
    j++
  }
  return result;
}

// console.log(merge([1, 10, 50], [2, 14, 99, 100])); // [1, 2, 10, 14, 50, 99, 100]
// console.log(merge([1, 11, 54, 98], [2, 14, 99, 100])); // [1, 2, 11, 14, 54, 98, 99, 100]
// console.log(merge([2, 11, 54, 98], [2, 14, 99, 100])); // [2, 2, 11, 14, 54, 98, 99, 100]
// console.log(merge([], [1, 3])); // [1, 3]

// Merge Sort (1st Attempt)

// function mergeSort(arr) {
//   let count = 0;
//   while (count !== arr.length) {
//     var arr2 = arr.splice(0, 1);
//     arr.push(arr2);
//     count++
//   }
//   while (arr.length !== 1) {
//     if (arr.length === 2) {
//       return merge(arr[0], arr[1]);
//     }
//     arr.push(merge(arr[0], arr[1]));
//     arr.splice(0, 2);
//   }
//   return arr;
// }

// Merge Sort Recursive (2nd Attempt)

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let midpoint = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, midpoint));
  let right = mergeSort(arr.slice(midpoint));
  return merge(left, right);
}

console.log(mergeSort([1, 9, 3, 11])) // [1, 3, 9, 11]
console.log(mergeSort([1, 72, 3, 99, 0])) // [0, 1, 3, 72, 99]