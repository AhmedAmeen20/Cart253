"use strict";

/**
 * Create the canvas
 */
function setup() {
    createCanvas(600, 400);
}

/**
 * Draw the three suns
 */
function draw() {
    // Night sky
    background("#003566");

    drawMoon(100, 200, 150);
    drawMoon(300, 200, 150);
    drawMoon(500, 200, 150);

  
}

/**
 * Draws a Trisolarian sun
 */
function drawMoon(x, y, size) {
    // Calculate the stroke weight of the sun
    let weight = calculateStrokeWeight(x, y);

    push();
    strokeWeight(weight);
    stroke(random(255), random(255), random(255));
    fill(random(255), random(255), random(255));
    ellipse(x, y, size);
    pop();
}

/**
 * Adds the two parameters together and returns the result
 */
function calculateStrokeWeight(x, y) {
    // Calculate the stroke weight of a sun based on
    // the distance of the mouse position
    const minWeight = random(1,20);
    const maxWeight = random();
    let d = dist(mouseX, mouseY, x, y);
    let result = map(d, 0, width, minWeight, maxWeight);
    // Actually return the result of our calculation to wherever this
    // function was called
    return result;
}