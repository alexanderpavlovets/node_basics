
// A bit more complicated - classical Visitor example

class GrebetsJun {
  constructor(name) {
    this.name = name
    this.title = 'Junior'
  }

  accept(visitor) {
    visitor.visitJunior(this)
  }
}

class GrebetsMid {
  constructor(name) {
    this.name = name
    this.title = 'Middle'
  }

  accept(visitor) {
    visitor.visitMiddle(this)
  }
}

class GrebetsSen {
  constructor(name) {
    this.name = name
    this.title = 'Senior'
  }

  accept(visitor) {
    visitor.visitSenior(this)
  }
}


class VisitorTeacher {
  constructor () {
    this.report = {
      juniors: 0,
      middles: 0,
      seniors: 0
    }
  }

  visitJunior(grebets) {
    console.log(`Teaching ${grebets.name}, how he/she can write console.logs`)
    this.report.juniors++
  }

  visitMiddle(grebets) {
    console.log(`Teaching ${grebets.name}, how he/she can write call/bind/apply`)
    this.report.middles++
  }

  visitSenior(grebets) {
    console.log(`Teaching ${grebets.name}, how he/she can do nothing while juniors are working`)
    this.report.seniors++
  }

  teach(place) {
    place.forEach((grebets) => {
      grebets.accept(this)
    })
  }
}

class VisitorTimelogger {
  constructor() {
    this.hoursToLog = {
      juniors: 6,
      middles: 5,
      seniors: 3
    }
  }

  visitJunior(grebets) {
    console.log(`I am ${grebets.title} ${grebets.name}, and i will log ${this.hoursToLog.juniors} hours, even when i don't have .log() method`)
  }

  visitMiddle(grebets) {
    console.log(`I am ${grebets.title} ${grebets.name}, and i will log ${this.hoursToLog.middles} hours, even when i don't have .log() method`)
  }

  visitSenior(grebets) {
    console.log(`I am ${grebets.title} ${grebets.name}, and i will log ${this.hoursToLog.seniors} hours, even when i don't have .log() method`)
  }

  logTime(grebtsy) {
    grebtsy.forEach((grebets) => {
      grebets.accept(this)
    })
  }
}

const paluba = [
  new GrebetsSen('Vania'),
  new GrebetsMid('Petia'),
  new GrebetsMid('Kolia'),
  new GrebetsJun('Vlad'),
  new GrebetsJun('Galia')
]

const visitorTeacher = new VisitorTeacher()
visitorTeacher.teach(paluba)
console.log(visitorTeacher.report)


const visitorTimelogger = new VisitorTimelogger()
visitorTimelogger.logTime(paluba)