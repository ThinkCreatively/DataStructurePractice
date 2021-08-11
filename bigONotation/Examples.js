// Time complexity, in this file I will be giving examples of most common big O times.

// f(n) = 1 : Constant complexity O(1), (same amount of operation occur no matter how big n gets)
const constantTimeOperation = (n) => {
  return n * (n + 1) / 2;  // in this case 3 operations occur each time (*, +, /)
}

// f(n) = log n : Logrithimic complexity O(log n), (as n gets larger than number of operations gets smaller)
const logrithmicTimeOperation = (n) => {
  for (let i = 1; i < n; i = i * 2) {
    console.log(i);
  }
};

// f(n) = n : Linear complexity O(n), (number of operations depends on how big n is)
const linearTimeOperation = (n) => {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total; // in this case there is always n operations, due to the for loop having to increment n times
}

// f(n) = n^2 : Quadratic complexity O(n * n) (number of operations is around n * n amount)
const quadraticTimeOperation = (n) => {
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      console.log(i, j);
    }
  } // in this case the number of operations will always be quadratic time (n * n), EXs: n = 2: (2 * 2), n = 4: (4 * 4), n = 10: (10 * 10)
}

// f(n) = C^n : Exponential complexity O(C^n) (number of operations exponentially grows by n)
var exponentialTimeOperation = (n) => {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';

  var findPassword = function (attempt) {
    if (attempt.length > 0) {
      console.log('Trying ' + attempt);
    }
    if (attempt.length <= n) {
      for (var i = 0; i < alphabet.length; i++) {
        findPassword(attempt.concat(alphabet[i]));  // this and line 42 causes the number of operations to increase exponentially
      }
    }
  };

  findPassword('');
};