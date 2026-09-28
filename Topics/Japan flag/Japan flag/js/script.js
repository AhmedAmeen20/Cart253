/**
 * Japan Flag
 * Ahmed Ameen
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let angrybird = {

  x: 200,
  y: 100,
  size: 100,

  fill: {
    r: 200,
    g: 50,
    b: 50,
  }
};

let sky = {
    r : 255,
    g : 255,
    b : 255,
}


function setup() {
  createCanvas(400, 200);
}





function draw() {
  background(sky.r, sky.g, sky.b);
  // Draw Mr. Furious as a coloured circle
  let angrybirdDistance = map(mouseX, 0, 100, 0, 255);
  let rage = map(angrybirdDistance, 150, 0, 50, 0, true)
  push();
  noStroke();
  fill(angrybird.fill.r, angrybird.fill.g, angrybird.fill.b);
  

  ellipse(angrybird.x + random(-rage, rage), angrybird.y, angrybird.size);
  pop();

  push()


}