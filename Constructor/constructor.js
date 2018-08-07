/*========================================================================
// This constructor design pattern includes a Player class used in my
// Ladybug Frogger project. The class is responsible to defining the
// location of the player character on screen in addition to determining
// which sprite to use (the player can change sprites by pressing C).
// Upon instantiation, the values defined within the constructor are set.
// Two class methods are located below, although they aren't part of the
// constructor design pattern. At the bottom the player object is
// instantiated, effectively creating a single instance of the defined 
// class in memory.
========================================================================*/
class Player {
    constructor() {
        this.x = 200; // Player location on the x axis
        this.y = 380; // Player location on the y axis
        this.spriteIndex = 0; // Index of currently selected sprite
        this.SPRITE_FILES = [ // Available sprite files
            'images/char-boy.png',
            'images/char-cat-girl.png',
            'images/char-horn-girl.png',
            'images/char-pink-girl.png',
            'images/char-princess-girl.png'
        ]
        this.sprite = this.SPRITE_FILES[this.spriteIndex]; // Currently selected sprite
    }

    // This function will update the location of the Player character.
    // If the user is located at the top row of the game field, they score.
    update() {
        this.x = this.x;
        this.y = this.y;
    
        if (this.y === -20) {
            stats.score();
            stats.timer = stats.timer + 3;
            alertText("You scored!");
        }
    }

    // This function will render the Player on the screen.
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

// Instantiate the player object
let player = new Player();