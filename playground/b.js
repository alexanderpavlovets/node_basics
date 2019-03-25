

const variab = function () {
  console.log('i am first function ')
}

variab.myProperty = 123 

console.log(variab)
console.log(variab.prototype) 
console.log(variab.prototype.constructor) 
console.log(variab.__proto__)
console.log(variab.__proto__.constructor) 
console.log(variab.__proto__.constructor.prototype)
console.log(variab.constructor)