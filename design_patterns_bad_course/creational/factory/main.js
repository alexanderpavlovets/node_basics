const userFactory = require('./user.factory')

const alex = userFactory('instructor', 'Alex', 'Automation engineer', 3000)
const paul = userFactory('student', 'Paul', '', null, 'Beginner')

console.log(alex.toString())
console.log(paul.toString())