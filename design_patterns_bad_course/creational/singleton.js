const Singleton = (() => {
  let course

  const assignCourse = () => {
    const course = new Object('JavaScript')
    return course
  }

  return {
    getInstance: () => {
      if (!course) {
        course = this.assignCourse()
      }
      return course
    }
  }
})()

const buyFirstTime = Singleton.getInstance()
const buySecondTime = Singleton.getInstance()

console.log(buyFirstTime)
console.log(buySecondTime)

if (buyFirstTime === buySecondTime) {
  console.log('Go to course')
}