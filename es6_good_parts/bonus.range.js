Number.prototype[Symbol.iterator] = function*() {
  if (this < 0) {
    for (let i = this; i <= 0; i++) {
      yield Number(i)
    }
  } else {
    for (let i = 0; i <= this; i++) {
      yield i
    }
  }
}

console.log([...10])
