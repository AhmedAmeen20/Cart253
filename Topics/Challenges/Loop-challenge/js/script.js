/**
 * Lines
 * Pippin Barr
 * 
 * A series of lines across the canvas
 */

"use strict";

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 500);
}
let step = 50;
let stepBG = 1;
/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {
    background("pink");

    let x = 0;
    let y = 0
    for (let x = 0; x <= width; x += stepBG) {
        push();
        //colorMode(HSB, random(0, 200), 0, random(0, 100));
        translate(x, height / 2);
        stroke(map(x, 0, width, 0, 255), 25, 60);
        //strokeWeight(13);
        line(0, -height / 2, 0, height / 2);
        pop();
    } 
    while (x <= width) {
        push();
        //colorMode(HSB);
        //step += 0.025;
        translate(x, height / 2);
        stroke(map(x, 0, width, 0, 255),0, 250);
        strokeWeight(13);
        line(0, -height / 2, 0, height / 2);
        pop();
        x += step;
    }
        while (y <= height) {
        push();
        //colorMode(HSB);
        //step += 0.025;
        translate(width/ 2, y);
        stroke(map(y, 0, height, 0, 255), 0, 250);
        strokeWeight(13);
        line(-width / 2, 0, width / 2, 0);
        pop();
        y += step;
    }
}