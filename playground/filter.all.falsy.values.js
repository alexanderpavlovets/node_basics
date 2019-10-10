const arr = [1, false, true, '', 'str', 0, [], {}, undefined, Symbol('description'), null]

const result = arr.filter(Boolean)

console.log(result)