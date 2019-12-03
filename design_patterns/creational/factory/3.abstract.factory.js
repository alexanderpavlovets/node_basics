
// Basically - abstract factory is showing type relationships. it can create objects of some type - HotDrinks for example.

const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Abstract class for Hot Drink
class HotDrink {
  consume() {}
}

class Tea extends HotDrink {
  consume() {
    console.log('This tea is nice with lemon!');
  }
}

class Coffee extends HotDrink {
  consume()
  {
    console.log(`This coffee is delicious!`);
  }
}

// Abstract class for Hot Drink Factory
class HotDrinkFactory {
  prepare(amount) { /* abstract */ }
}

class TeaFactory extends HotDrinkFactory {
  prepare(amount) {
    console.log(`Put in tea bag, boil water, pour ${amount}ml`);
    return new Tea();
  }
}

class CoffeeFactory extends HotDrinkFactory {
  prepare(amount) {
    console.log(`Grind some beans, boil water, pour ${amount}ml`);
    return new Coffee();
  }
}

let AvailableDrinks = Object.freeze({
  coffee: CoffeeFactory,
  tea: TeaFactory
});

// This is abstract factory. It will make a drink, while you just provide the type in the terminal.
class HotDrinkMachine {
  constructor() {
    this.factories = {};
    for (let drink of Object.keys(AvailableDrinks))
    {
      this.factories[drink] = new AvailableDrinks[drink]();
    }
  }

  interact(consumer) {
    rl.question('Please specify drink and amount ' +
      '(e.g., tea 50): ', answer => {
      let parts = answer.split(' ');
      let name = parts[0];
      let amount = parseInt(parts[1]);
      let drink = this.factories[name].prepare(amount); // this is a key row to show abstract factory.
      rl.close();
      consumer(drink);
    });
  }
}

let machine = new HotDrinkMachine();

machine.interact(
  function (drink) {
    drink.consume();
  }
);