/* Example:  looks for smallest value and places it at start of array
  Before                After         Swapped
[5, 3, 4, 1, 2] -> [1, 3, 4, 5, 2]     5, 1
[1, 3, 4, 5, 2] -> [1, 2, 4, 5, 3]     3, 2
[1, 2, 4, 5, 3] -> [1, 2, 3, 5, 4]     4, 3
[1, 2, 3, 5, 4] -> [1, 2, 3, 4, 5]     4, 5
*/

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let smallest = array[i];
    let swapIndex = 0;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < smallest) {
        smallest = array[j];
        swapIndex = j;
      }
      if (j === array.length - 1 && array[swapIndex] !== array[i]) {
        [array[i], array[swapIndex]] = [array[swapIndex], array[i]]
      }
    }
  }
  return array;
}


console.log(selectionSort([5, 3, 4, 1, 2])); //[1, 2, 3, 4, 5]
