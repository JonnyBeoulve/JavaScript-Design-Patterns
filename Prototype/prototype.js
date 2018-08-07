/*========================================================================
// This prototype design pattern defines a class for telescopes with
// default attributes. Using prototypal inheritance this class gains
// access to several methods outside of the initial class definition that 
// are able to pass in arguments and alter the value of an instance's
// attributes.
========================================================================*/
class Telescope {
    constructor() {
        this.type = 'Refractor';
        this.focal = 'f/7';
        this.resolve = '116/D';
        this.aperture = 140;
        this.height = 0;
        this.axis = 0;
        this.degree = 0;
        this.magnification = 0;
    }
}

// Prototype method for adjusting telescope height
Telescope.prototype.heightAdjust = function(newHeight) {
    this.height = newHeight;
}

// Prototype method for adjusting telescope axis
Telescope.prototype.axisAdjust = function(newAxis) {
    this.axis = newAxis;
}

// Prototype method for adjusting telescope degree
Telescope.prototype.degreeAdjust = function(newDegree) {
    this.degree = newDegree;
}

// Prototype method for adjusting telescope magnification
Telescope.prototype.magnificationAdjust = function(newMagnification) {
    this.magnification = newMagnification;
}

// Prototype method for displaying current telescope attributes
Telescope.prototype.outputConfiguration = function() {
    console.log("===== MY TELESCOPE CONFIGURATION =====");
    console.log("Type: " + this.type);
    console.log("Focal: " + this.focal);
    console.log("Resolve: " + this.resolve);
    console.log("Aperture: " + this.aperture);
    console.log("Height: " + this.height);
    console.log("Axis: " + this.axis);
    console.log("Degree: " + this.degree);
    console.log("Magnification: " + this.magnification);
}

// Instantiate an instance of telescope, update its configuration, and then display attributes
let myTelescope = new Telescope();
myTelescope.heightAdjust(121.92);
myTelescope.axisAdjust(42.40);
myTelescope.degreeAdjust(127.22);
myTelescope.magnificationAdjust(200);
myTelescope.outputConfiguration();
