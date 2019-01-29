const name = 'Alex'

// \ - allow to continue writing string from new line without "" + ""
const stringContinuation = 'Hello \
continiation of the string symbol'

// Escape new line in template literal

const msgWithNewLine = `Hello ${name}
 this is a new line`

const msgWithoutNewLine = `Hello ${name} \
this is just a line because of back-slash`

console.log(msgWithNewLine)
console.log(msgWithoutNewLine)

// _________________

// Tag functions
console.log('Yag functions - preprocessors for template strings ')

const name1 = 'Alex1'
const justVar = 'I am Variable'

function foo(strings, value1, value2) {
  // Used as pre-processor for strings
  // "strings" = ['Hello ', '. Some weird stuff ']
  // "value1" = name
  // "value2" = justVar
  return 'I am evil!!!' // Totally replace the initial template-string
}
const msg = foo`Hello ${name}. Some weird stuff ${justVar}`
console.log(msg)

// Example of preprocesor for template strings - devide all numbers by 2
function devideByTwoAllNumbers(strings, ...values) {
  console.log(`Got strings: [${strings}]`)
  console.log(`Got gathered via ... values: [${values}]`)
  let resultString = ''
  for (let i = 0; i < strings.length; i++) {
    if(i > 0) {
      if ( typeof values[i -1] === 'number') {
        resultString += values[i - 1] / 2
      } else {
        resultString += values[i - 1]
      }
    }
    resultString += strings[i]
  }
  return resultString
}

const firstNumber = 2
const secondNumber = 9
const devidedNumbers = devideByTwoAllNumbers`String with devided by 2 numbers. First: ${firstNumber} and second: ${secondNumber}`

console.log(devidedNumbers)