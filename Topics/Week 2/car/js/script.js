/**
 * CAR
 * Ahmed Ameen
 * 
 * HOW embarrassing indeed! IT'S JUST A CAR!
 * PLEASE DON'T REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";


let sky = {
    r : 160,
    g : 180,
    b : 200,
}

function setup() {
  createCanvas(600, 400);
}
let car = {
  x: 600,
  y: 320,
  size: 200,
  velocity : 1
  // Colour
}
function draw() {
  background(20,170, 244);

  noStroke();
  fill(100, 255, 100)
  square(0, 250, 600)

  fill(0, 0, 0)
  square(0, 300, 600)

  fill(255, 255, 255)
  rect(30, 350, 50, 10)
  rect(130, 350, 50, 10)
  rect(230, 350, 50, 10)
  rect(330, 350, 50, 10)
  rect(430, 350, 50, 10)
  rect(530, 350, 50, 10)
  rect(630, 350, 50, 10)

  
  fill("red")
  stroke("black");
  square(car.x, car.y, 50);
  pop()
  car.x = car.x * 0.991;
  
}