/*=======================================================================
// In this decorator design pattern we will define a class that houses
// the package name and price of a Volkswagen GTI S model. Both of its
// properties are defined as functions that return a value, which can be
// decorated using the two functions below, which upgrade the package
// and price upon being called, but don't override the original
// constructor.
=======================================================================*/
class VolkswagenGTI {
    constructor() {
        this.package = () => { return 'S'; };
        this.price = () => { return 26415; };
    }
}

// SE package upgrade decorator
function seUpgrade(gti) {
    let prevPrice = gti.price();
    if (prevPrice === 26415) {
        gti.package = () => { return 'SE'; };
        gti.price = () => { return newPrice + 4055; };
    } else  {
        console.log("ERROR: seUpgrade function was called upon an already modified VolkswagenGTI instance.")
    }
}

// Autobahn package upgrade decorator
function autobahnUpgrade(gti) {
    let prevPrice = gti.price();
    if (prevPrice === 26415) {
        gti.package = () => { return 'Autobahn'; };
        gti.price = () => { return prevPrice + 8655; };
    } else  {
        console.log("ERROR: autobahnUpgrade function was called upon an already modified VolkswagenGTI instance.")
    }
}

// Instantiate an instance of the VolkwagenGTI class before upgrading
// to Autobahn, and outputting the package andm and price as proof
let vw = new VolkswagenGTI();
autobahnUpgrade(vw);
console.log(vw.package());
console.log(vw.price());
