const events = require('events')

const myEmitter = new events.EventEmitter()

myEmitter.on('first_event', () => console.log('Seems like you have just emitted an event'))
myEmitter.emit('first_event')



const util = require('util')
const Person = function(name) {
  this.name = name
}
util.inherits(Person, events.EventEmitter)

const sanya = new Person('Sanya')
const aristarh = new Person('Aristarh')
const eblan = new Person('Eblan')

const banda = [sanya, aristarh, eblan]
banda.forEach((man) => man.on('morning', (action) => {console.log(man.name + ' get up and make ' + action)}))

sanya.emit('morning', 'shower')

myEmitter.emit('morning', 'common action') // won't do anything, different emitters for each Person

// According to the docs:
const eventsModule = requrie('events')
class EE extends eventsModule{}
const myEE = new EE()
