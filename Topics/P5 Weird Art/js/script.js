/**
 * This hurts the brain.
 * Ahmed Ameen
 * 
 * Simple Brain altering piece that uses mouse positions to change the colours of the squares. 

/** */

function setup() {
  createCanvas(450, 450);

}
function draw() {
  background(200);

  let c = map(mouseX, 0, 450, 0, 255);
  let c2 = map(mouseY, 0, 450, 255, 0);


  noStroke();
  fill(c);
  square(0, 0, 150)
  square(0,300, 150)
  square(150, 150, 150)
  square(300, 0, 150)
  square(300, 300, 150)

  fill(c2);
  square(150, 0, 150)
  square(0, 150, 150)
  square(300, 150, 150)
  square(150, 300, 150)
  
}


