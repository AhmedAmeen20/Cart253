/**
 * Mr. Furious
 * Marko Anastasovski and Luca Garreffa
 *
 * A guy who becomes visibly furious!
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
  // Position and size
  x: 200,
  y: 200,
  size: 100,
  // Colour
  fill: {
    r: 255,
    g: 225,
    b: 225,
  }
};

//the sky is darkening, the clouds are gathering, and Mr. Furious is getting madder and madder.
let sky = {
    r : 160,
    g : 180,
    b : 200,
}
/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

let bird = {
    x : 500,
    y : 150,
    velocity : 1

}


/**
 * Draw (and update) Mr. Furious
 */
function draw() {
  background(sky.r, sky.g, sky.b);
  let birdDistance = abs(mrFurious.x - bird.x);
  let rage = map(birdDistance, 0, 150, 50, 0, true);
  // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  

  ellipse(mrFurious.x + random(-rage, rage), mrFurious.y, mrFurious.size);
  pop();
  mrFurious.fill.g = mrFurious.fill.g - 1;
  mrFurious.fill.b = mrFurious.fill.b - 1;

  sky.r = sky.r- 0.5;
  sky.g = sky.g- 0.5;
  sky.b = sky.b- 0.5;

  push()
  fill("grey")
  stroke("orange");
  square(bird.x, bird.y, 25);
  pop()
  bird.x = bird.x * 0.991;
 



}