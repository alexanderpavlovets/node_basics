
// Facade - pretty simple - hide complex logic behind simple facade 
// Kind of present simple API of your module to outer world

const person = (function () {
  function checkDirection(direction) {
    console.log(`I am going to the ${direction}`)
  }

  function checkSeason(season) {
    let clothes = ''
    switch(season) {
      case 'winter': clothes = 'heavy'; break;
      case 'autumn': clothes = 'so so'; break;
      case 'spring': clothes = 'light'; break;
      default: clothes = 'nothing'
    }
    const message = `I am wearing ${clothes} clothes, and going to walk`
    console.log(message)
  }

  return {
    facadeGoWalk: function ({ direction, season }) {
      checkDirection(direction)
      checkSeason(season)
    }
  }
})()

// as a result - we don't care in inner implementation of "facadeGoWalk" - we just use it in simplified way
person.facadeGoWalk({ direction: 'left', season: 'winter' })
person.facadeGoWalk({ direction: 'left', season: 'autumn' })
person.facadeGoWalk({ direction: 'right' })

/*
  moment.js - i think good example of facade - whatever you give it - it will create 
  a date in moment format, how it will do that - you don't care at all = facade.
*/ 