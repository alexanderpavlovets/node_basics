// "npm run ts-node .\ts_basics\2_func_inter_class.ts"

// Funtions
// params and return type
function addNum (x: number, y: number): number {
  return x + y
}


// Void
function logMsg(msg: string | number): void {
  console.log(msg)
}


// Interfaces
interface UserInterface { // also possible naming convention - IUser
  readonly id: number, // can't assing this key
  name: string,
  age?: number
}
const someUser: UserInterface = { id: 1, name: 'asd' }
// diff with types - type can have unions and primitives, interfaces - only objs
type someType1 = number | string
// interface ISomeInt = number // err

// Interface with functions
interface IMathFunction {
  (x: number, y: number): number
}
const add: IMathFunction = (x: number, y: number): number => x + y
const sub: IMathFunction = (x: number, y: number): number => x - y


// Classes
class Person {
  readonly id: number
  private name: string         // accesable only within a class
  protected position: string    // accessable in class and child classes (child = extended from this one)
  static status: string = 'Not an alien'
  justField: any

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  register(): void {
    console.log(`${this.name} is passed registration`)
  }
}
const alex = new Person(2, 'Alex')
alex.register()

// Interface dof Class - implements
interface IPerson1 {
  id: number
  name: string
  register(): void
}
class Person1 implements IPerson1 { 
  id
  name
  register() {}
}