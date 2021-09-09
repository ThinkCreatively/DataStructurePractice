/* Example: Splits up array into smaller arrays than compares and merges smaller arrays back together */

// Merge function

function merge(array, array2) {
  let result = [];
  let length = array.length + array2.length;
  for (let i = 0; i < length; i++) {
    if (array[i] < array2[i]) {
      result.push(array[i]);
      result.push(array2[i]);
    }
    if (array2[i] < array[i]) {
      result.push(array2[i]);
      result.push(array[i]);
    }
  }
  return result;
}


function merge(array, array2) {
  let result = [];
  let i = 0;
  let j = 0;
  let length = array.length + array2.length;
  while (result.length !== length) {
    if (array[i] < array2[j]) {
      result.push(array[i]);
      i++;
    } else {
      result.push(array2[j]);
      j++;
    }
  }
  return result;
}
console.log(merge([1, 10, 50], [2, 14, 99, 100])); // [1, 2, 10, 14, 50, 99, 100]
console.log(merge([1, 11, 54, 98], [2, 14, 99, 100])); // [1, 2, 11, 14, 54, 98, 99, 100]