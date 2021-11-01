
// calculate n! using recursion
function factorial(n) {
  if (n <= 1) {
      return 1;
  } else {
      return factorial(n-1) * n;
  }
}


const res = factorial(5);
console.log(res)
