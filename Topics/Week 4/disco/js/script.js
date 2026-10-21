/**
 * Disco
 * Ahmed Ameen
 * 
 * A dicso game where you can change the background colour, the circle colour, and the square colour by pressing certain keys.
 * 
 */
// The background colour
const bg = {
    fill: "#000000",
    fills: {
        black: "#000000",
        white: "#ffffff"
    },
    switchKey: 32 // Space bar
}

const circle = {
    x: 200,
    y: 200,
    size: 50,
    fill: "#ff0000",
    fills: {
        red: "#ff0000",
        blue: "#0000ff"
    },
    switchKey: 67 // C keyccc
}


const square = {
    x: 100,
    y: 300,
    size: 50,
    fill: "#00ff00",
    fills: {
        green: "#00ff00",
        purple: "#800080",
    },
    switchKey: 83 // S key
};

/**
 * Create the canvas and set up event listener
 */
function setup() {
    createCanvas(400, 400);
    
    // Listen for key down
    window.addEventListener("keydown", changeBG);
    window.addEventListener("keydown", changeCircle);
    window.addEventListener("keydown", changeSquare);
}

/**
 * Fill the canvas
 */
function draw() {
    background(bg.fill);


    push();
    noStroke();
    fill(circle.fill);
    ellipse(circle.x, circle.y, circle.size);
    pop();

    push();
    noStroke();
    fill(square.fill);
    rect(square.x, square.y, square.size, square.size);
    pop();
}

/**
 * Switch the background
 */
function changeBG(event) { // NOTE the event parameter
    // Use event.keyCode to check if they pressed the switching key...
    if (event.keyCode === bg.switchKey) {
        if (bg.fill === bg.fills.black) {
            bg.fill = bg.fills.white;
        }
        else {
            bg.fill = bg.fills.black;
        }
    }
}

/**
 * Switch the circle colour
 */
function changeCircle(event) { // NOTE the event parameter
    // Use event.keyCode to check if they pressed the switching key...
    if (event.keyCode === circle.switchKey) {
        if (circle.fill === circle.fills.red) {
            circle.fill = circle.fills.blue;
        }
        else {
            circle.fill = circle.fills.red;
        }
    }
}
function changeSquare(event) { // NOTE the event parameter
    // Use event.keyCode to check if they pressed the switching key...
    if (event.keyCode === square.switchKey) {
        if (square.fill === square.fills.green) {
            square.fill = square.fills.purple;
        }
        else {
            square.fill = square.fills.green;
        }
    }
}