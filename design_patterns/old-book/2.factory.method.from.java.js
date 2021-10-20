
// this example is from Java, just to show the sence - hardly applicable for JS

// Basically - FactoryMethod used, when you have creation of object, inside method of subclass
// but common logic or if/else in parent class

/*
  Factory method is generally used when you have some generic processing in a class, 
  but want to vary which kind of fruit you actually use. So:

abstract class FruitPicker {
  protected abstract Fruit makeFruit();
  public void pickFruit() {
    private final Fruit f = makeFruit(); // The fruit we will work on..
    <bla bla bla>
  }
}

  ...then you can reuse the common functionality in FruitPicker.pickFruit() 
  by implementing a factory method in subclasses:

class OrangePicker extends FruitPicker {
  @Override
  protected Fruit makeFruit() {
    return new Orange();
  }
}
*/

