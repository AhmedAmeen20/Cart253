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
  size: 75,
  fill: "#000000"
};

const ans1 = {
  x: 100,
  y: 300,
  size: 75,
  fill: "#10000"
};

const ans2 = {
  x: 200,
  y: 300,
  size: 75,
  fill: "#10000"
};

const ans3 = {
  x: 300,
  y: 300,
  size: 75,
  fill: "#10000"
};


let math = ['5 + 5 = ?', '5 + 10 = ?', '20 + 5 = ?', '20 + 10 = ?', '10 + 20 = ?' ];
let choice;

function setup() {
  createCanvas(400, 400);

  choice = random(math);

  // Create an array of emoji strings.
  

  // Choose a random element from the array.
  

  // Style the text.
  textAlign(CENTER);
  textSize(75);

  // Display the emoji.

}

function draw() {
  background(200);
  text(choice, 200, 100);

  drawHover();
  moveHover();
  
  clickans1();
  showans1();

  
}

function drawHover(){
  push();
  noStroke();
  fill(Hover.fill);
  ellipse(Hover.x, Hover.y, Hover.size);
  pop();

  
}

function showans1() {
  push();
  noStroke();
  fill(ans1.fill);
  ellipse(ans1.x, ans1.y, ans1.size);
  pop();
}


function clickans1(){
  const d = dist(Hover.x, Hover.y, ans1.x, ans1.y);

  const overlap = (d < Hover.size/2 + ans1.size/2);

  if (overlap) {
    let positiondifferncex = Hover.x - ans1.x
    let positiondifferncey = Hover.y - ans1.y
    if (positiondifferncex<0) {
        choice = random(math);
    }
    if (positiondifferncex>-1) {
        choice = random(math);
    }
    if (positiondifferncey<0) {
        choice = random(math);
    }
    if (positiondifferncey>-1) {
        choice = random(math);
    }
  }
}

function moveHover() {
  Hover.x = mouseX;
  Hover.y = mouseY;
}

