
const Course = function(title, author) {
  this.title = title
  this.author = author
}

Course.prototype.toString = function() {
  console.log(this.title + ' ... Author: ' + this.author)
}

const course_1 = new Course('Prototype pattern', 'Alex')
const course_2 = new Course('Prototype pattern again', 'Alex')

course_1.toString()
course_2.toString()