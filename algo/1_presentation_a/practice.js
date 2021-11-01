
// Nothing interesting - just for history here

function compareFunction(fn1, fn2, n = 1) {
  console.time("Fn1");
  for(let i =0 ; i < n; i++) {
     fn1;
  }
  console.timeEnd("Fn1");
  console.time("Fn2");
  for(let i =0 ; i < n; i++) {
      fn2;
  }
   console.timeEnd("Fn2"); 
}
// compareFunction(fn1('test'), fn2('test'), 1);


// _______ task 1 
/* 
We need to filters an array of objects 
and keep only items, where a > 5 
and extend them with a new field sum = a + b
*/
	
const itemsArray = [
  { a: 1, b: 3 },
  { a: 3, b: 3 },
  { a: 6, b: 3 },
  { a: 10, b: 10 },
  { a: 41, b: 1 },
  { a: 0, b: 4 }
];
 
function filterAndExtendItems(array) {} // use just 1 reduce to save the memory vs .filter and .map


// _______ task 2
/* 
We need to calculate the amount of a given symbol in a given string
*/
const inputStr = "Remember, all I’m offering is the truth. Nothing more.";
function calcStringSymbols(str, symbol) {
  let amount = 0;
  
  for(let i=0; i<str.length; i++) {
    if (str.charAt(i) === symbol) {
      amount += 1;
    }
  }
 
  return amount;
}
const symbolsAmount = calcStringSymbols(inputStr, 'm')
console.log(`Task 2 result - amount of symbols in string is ${symbolsAmount}`)



// _______ task  whatever - reverse array
const itemsArrayN = [
  { n: '1' },
  { n: '2' },
  { n: '3' },
  { n: '4' },
  { n: '5' },
];
	
// .concat instead of push, due to return type ... okay 
function reverse(array) {
  return arr.reduceRight((acc, curr) => acc.concat(curr), [])
}
const res = reverse(itemsArrayN)
console.log(res)
