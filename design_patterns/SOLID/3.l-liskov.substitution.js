
// Brabara Liskov

// If some function take a base type as parameter -> it should be able to take any extendent type, without braking changes

class Rectangle {
  constructor(width, height) {
    this.width = width
    this.height = height
  }

  getArea() {
    return this.width * this.height
  }
}

class Square extends Rectangle {
  constructor(sideSize) {
    super()
    this.width = sideSize
    this.height = sideSize
  }
}

// This function should work with base class (Rect), and with every child class (Square) -  witout logic break, but:
function getAreaForWidthThree(shape) {
  shape.width = 3
  return shape.getArea()
}

const rect = new Rectangle(5, 10)
const square = new Square(5)

const rectAreadWithWidth3 = getAreaForWidthThree(rect)
const squareAreadWithWidth3 = getAreaForWidthThree(square)

console.log(`Actual result of rect area ${rectAreadWithWidth3}. Expected result is 30 
  This is ok - width is 3, height is 10`)
console.log('********')
console.log(`Actual result of square area ${squareAreadWithWidth3}. Expected result is 25 
  This is BROKEN - width is 3, height is 5. It is not a square!`)

// This is LSP - every child should be able to replace it's parent without logic break
// In this example - we should not inherit Square from Rectangle