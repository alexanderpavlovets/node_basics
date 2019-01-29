const a = 1

const c = 'hello' // i need 'hello' to be a property name

const obj = {
  a,            // Just a, makes like a: a
  b(){},         // b: function(){}.  PAY Attention it is not b: function b(){} - you don't have self-reference here
  [c]: 42,
  [`${c} some text`]: 'Nooo way! But working! ',  // Any valid JS expression is allowed
  [Number('asdasda')]: 'Nooo way! But working! ',   // NaN! NaN, Carl !!!
  [c + 'fn'](){},   // function "hellofn"
  *foo() {}, // generators. Instead of foo: function*(){}
  *[c + 'gn'](){}, // Computed consized generator. WTF ??))
}

console.log(obj)
