// Space Complexity, in this file I will be going over common space complexity examples
// NOTE:
// ~ booleans, numbers, undefined, and null are constant space
// ~ Strings, (generally) arrays and objects are linear space (n is the length of the string)

// Constant O(1) - in this example one variable and i in the for loop is always created no matter what n is
const constantSpace = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// Linear O(n) - in this example the result array that is created is dependant on n
const linearSpace = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}

