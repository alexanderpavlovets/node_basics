
// Component which is instantiated only once. For example: 
// - DB client
// - Object factory

// Solves problem - constructor call may be expensive

class Singleton {
  constructor() {
    const instance = this.constructor.instance
    if (instance) {
      return instance
    }

    this.constructor.instance = this
  }
}

let s1 = new Singleton()
let s2 = new Singleton()

console.log(s1 === s2) // true
