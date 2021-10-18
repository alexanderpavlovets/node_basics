
// Visition allows adding extra behaviors to entire hierarchies of classes

// Visitor - a component that knows how to traverse (пересекать / перемещатся) a data structure composed of (posibly related) types.

// Intrusive - назойливый


// We will intriduce expression "1 + (2 + 3)" in object-oriented way:
class NumberExpression {
  constructor(value) {
    this.value = value;
  }

  // 
  // print(buffer) {
  //   buffer.push(this.value.toString());
  // }
}

class AdditionExpression {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  // print(buffer) {
  //   buffer.push('(');
  //   this.left.print(buffer);
  //   buffer.push('+');
  //   this.right.print(buffer);
  //   buffer.push(')');
  // }
}

// 1 + (2+3)
let e = new AdditionExpression(
  new NumberExpression(1),
  new AdditionExpression(
    new NumberExpression(2),
    new NumberExpression(3)
  )
);
console.log(e)




// The task - we wont now this expression to be printed out as a string: 
// - add "print" methods
// - add code below


let buffer = [];
// buffer  - is visitor here, it is visiting expression and gather data.
e.print(buffer);
console.log(buffer.join(''));

// Violates OCP, require direct modification in several places (adding "print" method).
