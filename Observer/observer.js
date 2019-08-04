/*=======================================================================
// This observer design pattern demonstrates the subscription and
// notification principles of the pattern. In this example, we create
// a solution for defining a Rocket class that has a dynamic number of
// Fuel Observers that monitor the flow of fuel propellant exiting
// each of its engines. To achieve this, we create two classes, one high 
// level class that contains an array of all currently subscribed observers, 
// as well as a class for each observer. The high level class includes 
// methods for subscription, unsubscription, single observer notification, 
// and global notification. 
=======================================================================*/
// First we create the Rocket class, which will handle storing of subscribers
// and high level methods.
class Rocket {
  // Store an array of all currently subscribed fuel observers, defaulting
  // at empty.
  constructor() {
    this.fuelObservers = [];
  }

  // This method will subscribe a single passed-in Fuel Observer.
  subscribeFuelObserver(fuelObserver) {
    this.fuelObservers.push(fuelObserver);
    console.log(`Subscribed a Fuel Observer.`);
  }

  // This method will unsubscribe a single passed-in Fuel Observer.
  unsubscribeFuelObserver(fuelObserver) {
    let index = this.fuelObservers.indexOf(fuelObserver);
    if (index > -1) {
      this.fuelObservers.splice(index, 1);
      console.log(`Unsubscribed a Fuel Observer.`);
    }
  }

  // This method will trigger the notification method of a single
  // passed-in Fuel Observer.
  notifyFuelObserver(fuelObserver) {
    let index = this.fuelObservers.indexOf(fuelObserver);
    if (index > -1) {
      this.fuelObservers[index].notification();
    }
  }

  // This method will trigger the notification method of every
  // subscribed Fuel Observer.
  notifyAllFuelObservers() {
    for (let i = 0; i < this.fuelObservers.length; i++) {
      this.fuelObservers[i].notification(i);
    }
  }
}

// The Fuel Observer class contains the name of the specific
// observer and a method for logging a notification.
class FuelObserver {
  constructor(name) {
    this.name = name;
  }

  notification() {
    console.log(`Notification received by ${this.name}.`);
  }
}

// Instantiate an instance of the Rocket class.
let rocket = new Rocket();

// Instantiate four Fuel Observers.
let observer1 = new FuelObserver("Obs-1");
let observer2 = new FuelObserver("Obs-2");
let observer3 = new FuelObserver("Obs-3");
let observer4 = new FuelObserver("Obs-4");

// Subscribe all four Fuel Observers.
rocket.subscribeFuelObserver(observer1);
rocket.subscribeFuelObserver(observer2);
rocket.subscribeFuelObserver(observer3);
rocket.subscribeFuelObserver(observer4);

// Notify one Fuel Observer.
rocket.notifyFuelObserver(observer1);

// Unsubscribe Fuel Observer 4 due to engine issue.
rocket.unsubscribeFuelObserver(observer4);

// Notify all Fuel Observers.
rocket.notifyAllFuelObservers();
