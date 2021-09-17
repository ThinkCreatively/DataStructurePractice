/* Example:
  starts at a pviot point (value), compares if values after are larger or smaller, then swaps the frst element with the number of
  elements that are less than the pivot point, then does this with all value to left of the OG pivot point, then does the same thing
  to the right of the OG pivot point. Continues til all values are in the correct area.

      Before Comparison            After Comparison         Pivot Value
  [5, 2, 1, 8, 4, 7, 6, 3] -> [3, 2, 1, 4, 5, 7, 6, 8]           5
  [3, 2, 1, 4, 5, 7, 6, 8] -> [2, 1, 3, 4, 5, 7, 6, 8]           3
  [2, 1, 3, 4, 5, 7, 6, 8] -> [1, 2, 3, 4, 5, 7, 6, 8]           2
  [1, 2, 3, 4, 5, 7, 6, 8] -> [1, 2, 3, 4, 5, 6, 7, 8]           7
*/

// Pivot/Partition Helper Function
// Returns pivot point, Alters input array

function pivot(array) {
  const pivotValue = array[0];
  let count = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] === pivotValue) {
      continue;
    }
    if (array[i] < pivotValue) {
      array.unshift(array[i]);
      array.splice(i + 1, 1);
    }
  }
  return pivotValue;
}

console.log(pivot([5, 2, 1, 8, 4, 7, 6, 3])); // [2, 1, 4, 3, 5, 8, 7, 6] returns 5
