// decorators in Type Sript

// decorators can be applied to: class, method, parameters, accessors and properties


// ___________________________ Declaring
// 2 ways of declaring:
// 1st:
function myDecorator(target, propertyKey, descriptor) {}
class ClassOne{
  @myDecorator
  myMethodOne(){
    
  }
}

// 2nd:
function myAdvancedDecorator(info?: string) {
  return (target, propertyKey, descriptor) => {
    
  }
}

class ClassTwo {
  @myAdvancedDecorator('advancedInfo')
  myMethod() {

  }
}
// ___________________________ end of declaring

