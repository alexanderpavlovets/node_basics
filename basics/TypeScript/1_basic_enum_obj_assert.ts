// To run "npm run ts-node .\ts_basics\1_basic_enum_obj_assert.ts"

// Basic Types 
let id: number = 123
let someStr: string = 'Alex'
let isActive: boolean = false
let x: any = 'blabla'

let ids: number[] = [ 1,2,3,4,5]
let someArr: any[] = [1, true, 'str']

// Tuple
let person: [number, string, boolean] = [0, 'Alex', false] // exact types and exact order
// Tuple arr
let friends: [number, string][]
friends = [
  [1, 'Name'],
  [2, 'Name1'],
  [1, 'Name2'],
]

// Union
let pid: string | number = 54
pid = 22
pid = '22'

// Enum
enum Direction1 { // defaults values here 0 - 4
  Up,
  Down,
  Left,
  Right
}
console.log(Direction1.Up) // 0

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}

// Objects
const user: { id: number, name: string } = { // mess - types instead 
  id: 1,
  name: 'John'
}

type User = {
  id: number,
  name: string 
}
const user1: User = { id: 2, name: 'John2' }


// Type assertion
let someId: any = 1
let customerId = <number>someId // first way 
let customerId1 = someId as number // second way 

// customerId = 'str' // err 
// customerId1 = 'str' // err'



