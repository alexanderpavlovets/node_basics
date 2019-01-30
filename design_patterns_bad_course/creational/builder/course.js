class Course {
  constructor(builderObject) {
    this.name = builderObject.name
    this.sales = builderObject.sales || 0
    this.isFree = builderObject.isFree
    this.price = builderObject.price || 0
    this.isCampain = builderObject.isCampain
  }

  toString() {
    console.log(JSON.stringify(this))
  }
}

module.exports = Course