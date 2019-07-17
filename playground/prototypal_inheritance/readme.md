1: 
  we know what is .prototype - diagram
  everything in JS is Object
  by default every object has it's prototype
  prototype chain - object.prototype is end point
  prototype is special type object which allows to link other objects 
  make a problem __proto__ and .prototype  distinguish
  prototype chain it is a __proto__ chain

2: 
  show diff .__proto__  vs . prototype 
    - .prototype = object with info about this particular object
    - .__proto__ = object with info about object, that has created current object

  everything can be created with new
  object (everything) creation flow in JS
    - new object
    - __proto__ is prototype of constr
    - apply constr

  DIAGRAM

3: 
  class is a function with prototype - code
  further - only functions

4: 
  code - syntax
