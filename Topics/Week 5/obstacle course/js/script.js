/**
 * Ahmed Ameen
 * Obstacle Course
 * This is a simple obstacle course where the user moves a rectangle
 */

let target1 = undefined;
let target2 = undefined;
let target3 = undefined;
let target4 = undefined;
let target5 = undefined;
let target6 = undefined;

let finishbutton = undefined;
const targets = [];

let HP = 150;

const user = {
  x: undefined, // mouseX
  y: undefined, // mouseY
  width: 20,
  height: 20,
  fill: "#411100"
};

function setup() {
  createCanvas(400, 400);
  
  target1 = createTarget(100, 100, 150, 75);
  target2 = createTarget(200, 200, 100, 100);
  target3 = createTarget(300, 300, 50, 175);
  target4 = createTarget(100, 300, 100, 50);
  target5 = createTarget(300, 100, 50, 100);
  target6 = createTarget(200, 200, 75, 75);
  finishbutton = createFinish(50, 50, 10, 10);
}


function createFinish(x, y, width, height) {
  const finish = {
  x: random(50, 350),
  y: random(50, 350),
  width: 10,
  height: 10,
  fill: "#00a708"
};
  return finish;
}

function createTarget(x, y, width, height) {
  const target = {
    x: 0,
    y: 0,
    width: random(50, 100),
    height: random(50, 100),
    fill: "#0800a7", 
    fills: {
      noOverlap: "#0800a7",
      overlap: "#ff5900"
    }
  };

  // Keep trying random positions until this target does not overlap any
  // target that has already been placed.
  let overlaps;
  do {
    target.x = random(target.width / 2, 400 - target.width / 2);
    target.y = random(target.height / 2, 400 - target.height / 2);
    overlaps = targets.some(other =>
      target.x + target.width / 2 > other.x - other.width / 2 &&
      target.x - target.width / 2 < other.x + other.width / 2 &&
      target.y + target.height / 2 > other.y - other.height / 2 &&
      target.y - target.height / 2 < other.y + other.height / 2
    );
  } while (overlaps);

  targets.push(target);
  return target;
}

/**
 * Move the user rectangle, check for overlap, draw the rectangles
 */
function draw() {
  // Aaaaaa!
  background("#ab9bf1");
  textSize(20);
  textAlign(LEFT, TOP);
  text("HP: " + HP, 10, 10);
  
  // Move user
  user.x = mouseX;
  user.y = mouseY;
  
  // Check overlap
  checkOverlap(user, target1);
  checkOverlap(user, target2);
  checkOverlap(user, target3);
  checkOverlap(user, target4);
  checkOverlap(user, target5);
  checkOverlap(user, target6);

  // Draw the targets and the user
  drawElement(target1);
  drawElement(target2);
  drawElement(target3);
  drawElement(target4);
  drawElement(target5);
  drawElement(target6);
  drawfinish(finishbutton);

  drawHover(user);
  
  // Did you see how tidy that draw() is???
}

/**
 * Checks overlap between the user rectangle and a provided target.
 * Changes the target's fill depending on whether there is an
 * overlap.
 */
function checkOverlap(user, target) {
  // Painstakingly calculate whether each of the four edges of the user
  // overlap the target. But notice we only need the code for this
  // ONE TIME because of the function
  const overlap = user.x + user.width/2 > target.x - target.width/2 &&
                  user.x - user.width/2 < target.x + target.width/2 &&
                  user.y + user.height/2 > target.y - target.height/2 &&
                  user.y - user.height/2 < target.y + target.height/2;

  // Set the target's fill based on whether they overlap
  if (overlap) {
    target.fill = target.fills.overlap;
    HPDecrease(overlap);
  }
  else {
    target.fill = target.fills.noOverlap;
  }
}

/**
 * Draws a rectangular element using its position, size, and fill.
 */
function drawElement(element) {
  push();
  noStroke();
  fill(element.fill);
  // THIS IS IMPORTANT
  // In checkOverlap() we calculate the overlap based on the x, y
  // coordinated being in the CENTRE of each shape
  rectMode(CENTER);
  rect(element.x, element.y, element.width, element.height);
  pop();
}

function drawfinish(finishbutton) {
  push();
  noStroke();
  fill("#00a708");
  rectMode(CENTER);
  rect(finishbutton.x, finishbutton.y, finishbutton.width, finishbutton.height);
  pop();
}

/**
 * Draws a hover effect for the user circle.
 */
function drawHover(user) {
  push();
  noStroke();
  fill(user.fill);
  // THIS IS IMPORTANT
  // In checkOverlap() we calculate the overlap based on the x, y
  // coordinated being in the CENTRE of each shape
  rectMode(CENTER);
  circle(user.x, user.y, user.width);
  pop();
}
function HPDecrease(overlap) {
  if (overlap) {
    HP -= 1;
  }
  if (HP <= 0) {
    HP = 0;
    noLoop();
    textSize(32);
    textAlign(CENTER, CENTER);
    fill("#9c0000");
    text("Game Over", width/2, height/2);
  }
}

function mousePressed() {
  if (mouseX > finishbutton.x - finishbutton.width / 2 &&
      mouseX < finishbutton.x + finishbutton.width / 2 &&
      mouseY > finishbutton.y - finishbutton.height / 2 &&
      mouseY < finishbutton.y + finishbutton.height / 2) {
    noLoop();
    textSize(64);
    textAlign(CENTER, CENTER);
    fill("#fbff00");
    text("You Win!", width/2, height/2);
  }
}