/**
 * Buzzy the parameter
 * Pippin Barr
 * 
 * A fly that buzzes around on the canvas
 */

//"use strict";

// Our fly that will buzz around
let fly1 = undefined;
let fly2 = undefined;
let fly3 = undefined;
let fly4 = undefined;
let fly5 = undefined;
let fly6 = undefined;
let fly7 = undefined;

let generateFly = true;

let sample;

/**
 * Create a canvas
 */
async function setup() {
   //img = await loadImage('/assets/images/swamp.jpg');
    //sample = await loadSound('/assets/sounds/night.mp3');

 //set the sample to loop
    //sample.loop(true);

    //sample.onended(stopSound);

createCanvas(400, 400);
    //background("#000d57");
    //image(img, 0, 0, width, height, 0, 0, img.width, img.height, CONTAIN);
    fly1 = createFly(random(1, 5));
    fly2 = createFly(random(1, 5));
    fly3 = createFly(random(1, 5));
    fly4 = createFly(random(1, 5));
    fly5 = createFly(random(1, 5));
    fly6 = createFly(random(1, 5));
    fly7 = createFly(random(1, 5));
}

/**
 * Background, move and draw buzzy
 */

function createFly(buzziness) {
    const fly = {
        // Position (random)
        x: random(0, width),
        y: random(0, height),
        // Size (default)
        size: random(20, 40),
        // How much to move per frame (parameter)
        buzziness: buzziness
    };
    return fly;
}

function draw() {
    background("#00093c");

    moveFly(fly1);
    moveFly(fly2);
    moveFly(fly3);
    moveFly(fly4);
    moveFly(fly5);
    moveFly(fly6);
    moveFly(fly7);

    drawFly(fly1);
    drawFly(fly2);
    drawFly(fly3);
    drawFly(fly4);
    drawFly(fly5);
    drawFly(fly6);
    drawFly(fly7);
}
/**
 * Move the fly passed in as an argument by updating its position
 * When buzzyTheFly is passed in, that means we will be changing
 * buzzyTheFly's position!
 */
function moveFly(fly) {
    fly.x += random(-fly.buzziness, fly.buzziness);
    fly.y += random(-fly.buzziness, fly.buzziness);
}

/**
 * Draw the fly passed in as an argument
 */
function drawFly(fly) {
    if (generateFly === true) {
        push();
        noStroke();
        fill("yellow");
        drawingContext.shadowBlur = 32;
        drawingContext.shadowColor = color("Yellow");
        ellipse(fly.x, fly.y, fly.size);
        pop();
        
    }
}