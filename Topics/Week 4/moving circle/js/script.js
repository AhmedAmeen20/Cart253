/**
 * Moving Circle Game
 * Ahmed Ameen
 * 
 * 
 * 
 */

// The constants for the game
// The Hover object represents the mouse cursor's hover effect
const ball = {
    x: undefined,
    y: undefined,
    size: 50,
};

function setup() {
  createCanvas(400, 400);

//moveCircle();
  background(0);
  // Filling the background here so it DOESN'T
  // happen every frame
}

function draw() {
  // This is empty!

  // All the action happens when the mouse is pressed
  // By not refilling the background every frame we can see
  // the cumulative effect of the mouse presses!

  ball.x += 1;

  push();
  noStroke();
  ellipse(ball.x, ball.y, ball.size);
  pop();
}
    

/**
 * The mousePressed() function is AUTOMATICALLY CALLED BY p5
 * whenever the mouse button is pressed down! Handy!
 */
function mousePressed() {
  // Move the circle randomly along the x axis on each press
  moveCircle();

  
}

function moveCircle() {
  ball.x = mouseX;
  ball.y = mouseY;
}
