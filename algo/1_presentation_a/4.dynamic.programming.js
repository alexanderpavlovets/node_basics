

// recursive way - O(2^n) - Bad
function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

const res = fibonacci(4); // show me 4th number in fibonacci sequence
console.log(res)


// using memorization - O(2n) - Acceptable
function fibonacci(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}

fibonacci(51); // if calculated already - memorize it
