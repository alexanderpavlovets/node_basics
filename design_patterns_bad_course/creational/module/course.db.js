const CourseDB = () => {
  return {
    dbInfo: (course) => {
      console.log('Course ID is ' + course.id + ' ... Course title' + course.title + 'Author: ' + course.author)
    }
  }
}

module.exports = CourseDB()