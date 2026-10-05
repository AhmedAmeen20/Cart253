/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

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

answers = [ans1, ans2, ans3];
overlaps = [false, false, false];
let rightanswer;
let choice;
let num1;
let num2;


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

  //choice = random(math);
  generateQuestion();

  // Create an array of emoji strings.
  

  // Choose a random element from the array.
  
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
  push();
  noStroke();
  fill(Hover.fill);
  ellipse(Hover.x, Hover.y, Hover.size);
  pop();



  
}


function checkOverlap(ans) {
    const d = dist(Hover.x, Hover.y, ans.x, ans.y);
  const overlap = (d < Hover.size/2 + ans.size/2);
  
  return overlap;
  }

function mouseClicked() {
  for (let i = 0; i <= overlaps.length - 1; i++) {
    overlaps[i] = checkOverlap(answers[i]);
  }
  if (overlaps[0] || overlaps[1] || overlaps[2]) {
   generateQuestion();
  }
}

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
function moveHover() {
  Hover.x = mouseX;
  Hover.y = mouseY;
}