const Course = require('./course')

const course = new Course({id: 1, title: 'WTF!', author: 'No way - i won\'t write such piece of shit ever !!!'})

course.dbRequest()