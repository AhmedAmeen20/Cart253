/**
 * Math Game
 * Ahmed Ameen
 * 
 * A simple math game where players solve addition problems.
 * 
 */

// The constants for the game
// The Hover object represents the mouse cursor's hover effect
const Hover = {
  x: undefined, // will be mouseX
  y: undefined, // will be mouseY
  size: 50,
  fill: "#000000"
};

const ans1 = {
  x: 100,
  y: 300,
  size: 75,
  fill: "#10000",
  number: 0,
};

const ans2 = {
  x: 200,
  y: 300,
  size: 75,
  fill: "#10000",
  number: 0,
};

const ans3 = {
  x: 300,
  y: 300,
  size: 75,
  fill: "#10000",
  number: 0,
};

// The varisables for the game
answers = [ans1, ans2, ans3];
overlaps = [false, false, false];
let rightanswer;
let choice;
let num1;
let num2;

// This is a function that generates a new math question and provides 1 accurate answer and 2 incorrect answers
function generateQuestion() {
  num1 = floor(random(20));
  num2 = floor(random(20));
  rightanswer = floor(random(3)); 
  for (let i = 0; i <= answers.length - 1; i++) {
    if (i == rightanswer) {
      answers[i].number = num1 + num2;
    }
    else {
      answers[i].number = floor(random(40));
      if (answers[i].number == num1 + num2) {
        answers[i].number = num1 + num2 + floor(random(5));
      }
    }
  }
}

function setup() {
  createCanvas(400, 400);

// Starts the game by generating the first question and answers
  generateQuestion();
  
  // Style the text.
  textAlign(CENTER);
  textSize(75);

  // Display the emoji.

}

function draw() {
  background(200);
  text(num1 + " + " + num2 + " = ?", 200, 100);
  showans();
  moveHover();
  drawHover();
  
 
  
}
// this is the cursor that follows the mouse and changes color when it hovers over an answer
function drawHover(){
  for (let i = 0; i <= overlaps.length - 1; i++) {
    overlaps[i] = checkOverlap(answers[i]);
  }
     if (overlaps[0] || overlaps[1] || overlaps[2]) {
        Hover.fill = "#3700ff5d";
        Hover.size = 70;
     }
     else
       { Hover.fill = "#000000";
        Hover.size = 50;
   }
   // The hover effect
  push();
  noStroke();
  fill(Hover.fill);
  ellipse(Hover.x, Hover.y, Hover.size);
  pop();



  
}

// this is the function that checks if the mouse is hovering over an answer and returns true or false
function checkOverlap(ans) {
    const d = dist(Hover.x, Hover.y, ans.x, ans.y);
  const overlap = (d < Hover.size/2 + ans.size/2);
  
  return overlap;
  }
// this is the function that lets the user click on an answer and generates a new question when the user clicks on any answer
function mouseClicked() {
  // Check if the mouse is over any of the answers
  for (let i = 0; i <= overlaps.length - 1; i++) {
    overlaps[i] = checkOverlap(answers[i]);
  }
  if (overlaps[0] || overlaps[1] || overlaps[2]) {
   generateQuestion();
  }
}
// this is the function that displays the answers on the screen
function showans() {
    for (let i = 0; i <= answers.length - 1; i++) {
  push();
  noStroke();
  fill(answers[i].fill);
  ellipse(answers[i].x, answers[i].y, answers[i].size);
  fill("#ff000dcb");
    textSize(40);
  text(answers[i].number, answers[i].x - 12.51,answers[i].y-16  , 25);
  pop();
    }
}
// this is the function that lets the hover circle follow th mouse
function moveHover() {
  Hover.x = mouseX;
  Hover.y = mouseY;
}