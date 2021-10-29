
// Regular function:
const dragon = (name, size, element) => {
  return `${name} is a ${size} dragon that breathes ${element}!`
}
console.log(dragon('fluffykins', 'tiny', 'lightning'))


// Same function with currying
const dragonCurrying = name => size => element => {
  return `${name} is a ${size} dragon that breathes ${element}!`
}
console.log(dragonCurrying('fluffykins')('tiny')('lightning'))


// Currying allows to "split" these functions:
const fluffykinsDragon = dragonCurrying('fluffykins')
const tinyDragon = fluffykinsDragon('tiny')
console.log(tinyDragon('lightning'))

