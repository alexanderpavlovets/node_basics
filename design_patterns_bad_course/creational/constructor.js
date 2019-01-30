
// Old style
const Course = function(title, author) {
  this.title = title
  this.author = author

  this.toString = function() {
    return this.title + ' ... Author: ' + this.author
  }
}

const course_1 = new Course('Constructor pattern', 'Alex')
const course_2 = new Course('Constructor pattern again', 'Alex')

console.log(course_1.toString())
console.log(course_2.toString())


// ES6 Syntax
class CourseES6 {
  constructor(title, author) {
    this.title = title
    this.author = author
  }

  toString() {
    console.log(this.title + ' ... Author: ' + this.author)
  }
}

const course_1ES6 = new CourseES6('Constructor pattern ES6', 'Alex')
const course_2ES6 = new CourseES6('Constructor pattern ES6 again', 'Alex')

course_1ES6.toString()
course_2ES6.toString()