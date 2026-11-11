/**
 * Girrafe's back
 * Ahmed Ameen
 * 
 * Just a girrafe's back
 */

"use strict";

let spots = [];


function setup() {
createCanvas(400, 400);

    addSpot();
    addSpot();
    addSpot();
    addSpot();
    addSpot();
    addSpot();
    addSpot();


}


function addSpot() {

  const x = random(0, width);
  const y = random(0, height);
  const size = random(20, 80);

  const spot = createSpot(x, y, size);

  spots.push(spot);
}


function createSpot(x, y, size) {
  const spot = {

    x: x,
    y: y,
    size: size,

    velocity: {
      x: 0,
      y: 0
    },
    // Appearance
    fill: "#632e00"
  };
  return spot;
}

function draw() {
  background("#ffcc00");
  
  for (const spot of spots) {
    drawSpot(spot);
  }
}



function drawSpot(spot) {
  push();
  noStroke();
  fill("#632e00");
  ellipse(spot.x, spot.y, spot.size);
  pop();
}
