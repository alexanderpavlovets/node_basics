const tuple = <T extends string[]>(...args: T) => args
const furniture = tuple('chair', 'table', 'lamp')
type Furniture = typeof furniture[number]


const tupleMine = (...args) => args
const numbers = tupleMine(1, 2, 3)
