/**
 * Math Game
 * Ahmed Ameen
 * 
 * A simple math game where players solve addition problems.
 * 
 */
function setup() {
  createCanvas(400, 400);
    background("#D441FF" );
}

function draw() {

  noStroke();
  rect(30, 100, 340 ,10)
  rect(30, 200, 340 ,10)
  rect(30, 300, 340 ,10)
  rect(125, 45, 10 ,340)
  rect(250, 45, 10 ,340)
  
  
  
}
function mousePressed() {
  // Draw an ellipse on the canvas when the mouse is pressed down
  push();
  stroke(225, 225, 0);
  strokeWeight(15)
  fill("#D441FF" );
  ellipse(mouseX, mouseY, 50);
  pop();


  push();
  stroke("#41ff41");
  strokeWeight(10);
  line(mouseX - 20, mouseY - 20, mouseX + 20, mouseY + 20)
  line(mouseX + 20, mouseY - 20, mouseX - 20, mouseY + 20)
}
