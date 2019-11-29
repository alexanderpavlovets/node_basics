
// ISP - segregate (split) interfaces on different parts
// This allows to interface users implement only what they need, and avoid unnecessary implementstion, like this one:

// AKA Interface in JS
class PrintMachine {
  constructor() {}
  print() {}
  scan() {}
  fax() {}
}

class GreatNewPrinter extends PrintMachine {
  constructor() {super()}
  print() {
    console.log('print')
  }
  scan() {
    console.log('scan')
  }
  fax() {
    console.log('fax')
  }
}

class OldBadPrinter extends PrintMachine {
  constructor() {super()}
  print() {
    console.log('print')
  }
  scan() {
    // it is old and can't scan. But we need to imlement method, because large PrintMachine interface
  }
  fax() {
    // it is old and can't fax. But we need to imlement method or throw Error, because large PrintMachine interface
    throw new Error('Not implemeted')
  }
}

// Solution: 

/* Just define 3 interfaces: 
  - Printer (IPrinter)
  - Scanner (IScaner)
  - Fax (IFax)
*/
