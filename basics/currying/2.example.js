
// Example to show why to use it

let dragons = [
  { name: 'fluffykins', element: 'lightning' },
  { name: 'noomi', element: 'lightning' },
  { name: 'karo', element: 'fire' },
  { name: 'doomer', element: 'timewarp' },
]

let hasElement = (element, obj) => obj.element === element

let lightningDragons = dragons.filter(x => hasElement('lightning', x))
console.log(lightningDragons)


// Improvement with currying: 
const _ = require('lodash') // just to have curry out of the box

let hasElementWithCurry = _.curry((element, obj) => obj.element === element)

// after currying - we just pass as cb, because it will return another function, that expect and argument - obj
let lightningDragonsWithCurry = dragons.filter(hasElementWithCurry('lightning')) 
console.log(lightningDragonsWithCurry)