/**
 * tic tac toe
 * Ahmed Ameen
 * 
 * A simple tic tac toe game where you play as 2 players.
 * 
 */
"use strict";

// Current score
let score = 0;

// Is the game over?
let gameOver = false;
let pressCount = 0;


function setup() {
  createCanvas(400, 400);
    background("#D441FF" );
}

function draw() {

  noStroke();
  rect(30, 140, 340 ,10)

  rect(30, 275, 340 ,10)
  rect(125, 45, 10 ,340)
  rect(250, 45, 10 ,340)


    if (!gameOver) {
    // Score increases relatively slowly
    score += 0.05;
  }
  displayUI();

  
  
}
function displayUI() {
  if (gameOver) {
    push();
    textSize(48);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text("Game finished!", width/2, height/3);
    pop();
  }
  displayScore();
}


function mousePressed() {
  if (gameOver) return;
  pressCount++;

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
  pop();

  if (pressCount >= 9) {
    gameOver = true;
  }
}