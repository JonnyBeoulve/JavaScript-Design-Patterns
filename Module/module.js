/*========================================================================
// This module design pattern will house a private variable that prevents
// mutation from global scope. ALong with it are two method closures that
// can be called to alter the value of the variable.
========================================================================*/
let stockHandler = (() => {
    // private variable
    let inventory = 0;

    // methods for incrementing or decrementing stock
    return {
        incrementStock: () => {
            return inventory++;
        },

        decrementStock: () => {
            return inventory--;
        }
    };
})();

// call the module methods to alter the value of inventory
stockHandler.incrementStock();
stockHandler.decrementStock();