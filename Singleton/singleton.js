/*========================================================================
// This singleton design pattern houses a single instance of a class.
// When initially instantiated, the singleton will be created. Future
// calls will reference the already created instance, preventing creation
// of additional singleton classes in memory.
========================================================================*/
let Singleton = (() => {
  // Store reference to the singleton
  let instance;

  // The singleton class. We will create a random number within the constructor
  // to demonstrate that only one singleton is ever created in memory.
  class Singleton {
    constructor() {
      this.firstName = "Singleton";
      this.lastName = "Example";
      this.instanceNum = Math.floor(Math.random() * 1000);
    }

    getSingletonNumber() {
      return `${this.instanceNum}`;
    }
  }

  // Determine if an instance of the singleton already exists. If not, created
  // one. If so, return reference to the already instantiated singleton.
  return {
    getInstance: () => {
      if (!instance) {
        instance = new Singleton();
      }
      return instance;
    }
  };
})();

// Instantiate a singleton and print out its randomized instance number
let singletonInstance = Singleton.getInstance();
let singletonNumber = singletonInstance.getSingletonNumber();
console.log(`Singleton instance number: ${singletonNumber}`);

// Attempt to instantiate a second singleton, which will end up referring to
// the already created singleton instance. Print out its instance number to
// demonstrate that it's referred to the same instance as above.
let singletonReference = Singleton.getInstance();
let singletonReferenceNumber = singletonReference.getSingletonNumber();
console.log(`Second singleton instance number: ${singletonReferenceNumber}`);
