// Table of patterns from Gang Of Four:

const patternsStructure = {
  creational: {
    factoryMethod: 'Makes an instance of several derived classes based on interfaced data or events.',
    abstractFactory: 'Creates an instance of several families of classes without detailing concrete classes.',
    builder: 'Separates object construction from its representation, always creates the same type of object.',
    prototype: 'A fully initialized instance used for copying or cloning.',
    singleton: 'A class with only a single instance with global access points.'
  },
  structural: {
    adapter: 'Match interfaces of different classes therefore classes can work together despite incompatible interfaces.',
    bridge: 'Separates an object\'s interface from its implementation so the two can vary independently.',
    composite: 'A structure of simple and composite objects which makes the total object more than just the sum of its parts.',
    decorator: 'Dynamically add alternate processing to objects.',
    facade: 'A single class that hides the complexity of an entire subsystem.',
    flyweight: 'A fine-grained instance used for efficient sharing of information that is contained elsewhere.',
    proxy: 'A place holder object representing the true object.'
  },
  behavioral: {
    interpreter: 'A way to include language elements in an application to match the grammar of the intended language.',
    templateMethod: 'Creates the shell of an algorithm in a method, then defer the exact steps to a subclass.',
    chainOfResponsibility: 'A way of passing a request between a chain of objects to find the object that can handle the request.',
    command: 'Encapsulate a command request as an object to enable, logging and/or queuing of requests, and provides error-handling for unhandled requests.',
    iterator: 'Sequentially access the elements of a collection without knowing the inner workings of the collection.',
    mediator: 'Defines simplified communication between classes to prevent a group of classes from referring explicitly to each other.',
    memento: 'Capture an object\'s internal state to be able to restore it later.',
    observer: 'A way of notifying change to a number of classes to ensure consistency between the classes.',
    state: 'Alter an object\'s behavior when its state changes.',
    strategy: 'Encapsulates an algorithm inside a class separating the selection from the implementation.',
    visitor: 'Adds a new operation to a class without changing the class.'
  }
}