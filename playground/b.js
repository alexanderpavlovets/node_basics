function factorial(number) {
  if (number === 0) {
    return 1
  }
  return number * factorial(number - 1)
}

// console.log(factorial(3))

// __________________

function greatestCommonDivisor(number1, number2) {
  if (!number2) {
    return number1
  }
  return greatestCommonDivisor(number2, number1 % number2)
}

// console.log(greatestCommonDivisor(111, 33))
