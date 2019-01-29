const myObjWithSecretValues = {
  secretValue1: 'I should not be shown',
  secretValue2: 'I should not be shown also',
  regularValue1: 'Show me',
  regularValue2: 'Show me too',
  *[Symbol.iterator](){
    for ( const key of Object.keys(this)) {
      if (!key.includes('secret')) {
        yield this[key]
      } else {
        // do nothiing
      }
    }
  }
}

console.log([...myObjWithSecretValues])