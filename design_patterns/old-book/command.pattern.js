
// decouples the classes that invoke the operation from the object that knows how to execute the operation.

/*
  Good example is request object: 

  request.execute(params)

  instead of direct invoke from class: 
  class SomePage {
    getData() {
      return axios.get('url', otps)
    }
    getData() {
      return request.execute(params)
    }
  }
*/

// In addition to decoupling allows to make a queue of commands 
/*
  request.execute(params)
  request.execute(params)
  request.execute(params)
*/


// Also allows to refactor code easily in case of inner changes in "request", because interface ".execute(params)" remains the same


// example from book:
const carManager = {
  requestInfo: function (id, model) {
    console.log(`Here is your info about model ${model}, that has ID ${id}`)
  },
  buyVehicle: function (id, model) {
    console.log(`Congrats you've bought model ${model}, with ID ${id}`)
  },
  bookTestDrive: function (id, model) {
    console.log(`Great, you have booked a test drive for model ${model}, that has ID ${id}`)
  }
}

// Acceptable, but this is coupling. This is kind of direct usage, which mean "dependency"
carManager.requestInfo(1, 'Ford')
carManager.buyVehicle(2, 'Audi')
carManager.bookTestDrive(3, 'Toyota')

// To avoid coupling, it is needed to add a command (almost pseudo code, jsut to show logic):
carManager.execute = function (name, ...args) {
  carManager[name].apply(carManager, args)
}

carManager.execute('requestInfo', 1, 'Ford')
carManager.execute('buyVehicle', 2, 'Smth')
carManager.execute('bookTestDrive', 3, 'Smth 3')
