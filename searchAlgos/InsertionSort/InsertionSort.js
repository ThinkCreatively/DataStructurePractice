/* Example: Builds up sorted portion of a data set
  Before                After               inserted
[5, 3, 4, 1, 2] -> [3, 5, 4, 1, 2]      3 Before 5
[3, 5, 4, 1, 2] -> [3, 4, 5, 1, 2]      4 after 3 before 5
[3, 4, 5, 1, 2] -> [1, 3, 4, 5, 1]      1 before 3
[1, 3, 4, 5, 1] -> [1, 2, 3, 4, 5]      2 after 1 before 3
*/

// Long Version

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      for (let j = i - 1; j > -1; j--) {
        if (j === 0 && array[i] < array[j]) {
          array.unshift(array[i]);
          array.splice(i + 1, 1);
          continue;
        }
        if (array[i] > array[j - 1] && array[i] < array[j]) {
          array.splice(j, 0, array[i]);
          array.splice(i + 1, 1)
        }
      }
    }
  }
  return array;
}

// Short Version
function insertionSort(array) {
  for(var i = 0; i < array.length; i++) {
    var currentValue = array[i];
    for(var j = i - 1; j >=0 && array[j] > currentValue; j--) {
      array[j+1] = array[j];
    }
    array[j+1] = currentValue;
  }
  return array;
}

console.log(insertionSort([5, 3, 4, 1, 2])); // [1, 2, 3, 4, 5]