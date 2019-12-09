
// Continuation of previous example. Moving "print" method in ceparate class
// Reflective - because we need to define the type of element in "ExpressionPrinter" class, in OOP languages this is done by reflection

class NumberExpression {
  constructor(value) {
    this.value = value;
  }
}

class AdditionExpression {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }
}

// Reflective Visitor
class ExpressionPrinter {
  print(e, buffer) {
    if (e instanceof NumberExpression) {
      buffer.push(e.value);
    }
    else if (e instanceof AdditionExpression) {
      buffer.push('(');
      this.print(e.left, buffer);
      buffer.push('+');
      this.print(e.right, buffer);
      buffer.push(')');
    }
  }
}

let e = new AdditionExpression(
  new NumberExpression(1),
  new AdditionExpression(
    new NumberExpression(2),
    new NumberExpression(3)
  )
);

let buffer = [];
let ep = new ExpressionPrinter();
ep.print(e, buffer);
console.log(buffer.join(''));

// Problem here - need to manage potentially a lot of if/else statements, while defining the type
