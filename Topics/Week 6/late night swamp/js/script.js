/**
 * Buzzy the parameter
 * Pippin Barr
 * 
 * A fly that buzzes around on the canvas
 */

//"use strict";
let img;
// Our fly that will buzz around
let buzzyTheFly = {
    x: 200,
    y: 200,
    size: 10,
    buzziness: 4
};

let generateFly = true;

/**
 * Create a canvas
 */
async function setup() {
   //img = await loadImage('/assets/images/swamp.jpg');
    createCanvas(400, 400);
    //background("#000d57");
    //image(img, 0, 0, width, height, 0, 0, img.width, img.height, CONTAIN);

}

/**
 * Background, move and draw buzzy
 */
function draw() {
    background("#000d57");

    // Move buzzy
    moveFly(buzzyTheFly);

    // Draw buzzy
    drawFly(buzzyTheFly);
}

/**
 * Move the fly passed in as an argument by updating its position
 * When buzzyTheFly is passed in, that means we will be changing
 * buzzyTheFly's position!
 */
function moveFly(fly) {
const d = dist(fly.x, fly.y, mouseX, mouseY);

  const overlap = (d < fly.size/2 + mouse.size/2);

  if (overlap) {
    let positiondifferncex = fly.x - mouseX
    let positiondifferncey = fly.y - mouseY
    if (positiondifferncex<0) {
        mouseX = mouseX + 2
    }
    if (positiondifferncex>-1) {
        mouseX = mouseX - 2
    }
    if (positiondifferncey<0) {
        mouseY = mouseY + 2
    }
    if (positiondifferncey>-1) {
        mouseY = mouseY - 2
    }
  }
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