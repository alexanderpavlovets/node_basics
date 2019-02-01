
// Modify the object dynamically
// Uses compisition instead of inherutance
// more flexibility than static inheritance

class BaseCar {

  constructor(name, maxSpeed) {
    this.name = name
    this.maxSpeed = maxSpeed
  }

  say(){return 1}
}

class FastCar {
  constructor(baseCar) {
    this.name = `${baseCar.name} is now a fast car`
  }
}

class SlowCar {
  constructor(baseCar) {
    this.name = `${baseCar.name} is now a slow car`
  }
}

const baseCar = new BaseCar('BMW', 200)
const fastBMW = new FastCar(baseCar)
const slowBMW = new SlowCar(baseCar)

console.log(fastBMW)
console.log(slowBMW)


