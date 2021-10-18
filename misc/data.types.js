
// Biggest possible number in JS is 2^53-1 ( 9007199254740991 ) or -(2^53-1)

// Add "n" to the end to show that it is bigInt 

const bigInt = 1234567890123456789012345678901234567890n;

console.log(typeof bigInt) // bigint

const bigint1 = 1234567890123456789012345678901234567890n;
const sameBigint1 = BigInt("1234567890123456789012345678901234567890");
const bigintFromNumber1 = BigInt(10); // same as 10n

// math is done only between bigints - impossible to add (for ex) bigint and number

const bigIntsAreWithRoundedResults = 5n / 2n 
console.log(bigIntsAreWithRoundedResults) // 2n
