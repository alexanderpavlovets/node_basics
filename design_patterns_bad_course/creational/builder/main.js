const CourseBuilder = require('./course.builder')

const course_1 = new CourseBuilder('Builder pattern 2').makePaid(100).makeCampain().build()
const course_2 = new CourseBuilder('Builder pattern 2').build()

course_1.toString()
course_2.toString()
