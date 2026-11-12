/**
 * Catch the Bug
 * Ahmed Ameen
 * 
 * A simple bug catcher game
 */

"use strict";

// The bugs
let bugs = [];
let score = 0;

const user = {
  x: undefined, // mouseX
  y: undefined, // mouseY
  width: 20,
  height: 20,
  fill: "#030202"
};

// Time between bugs. This will get bigger.
const minimumBugDelay = 0.5 * 1000;
const maximumBugDelay = 1 * 1000;
let bugDelay = maximumBugDelay;

/**
 * Create the canvas
*/
function setup() {
    createCanvas(600, 600);

    setTimeout(addBug, bugDelay);
}

/**
 * Adds a bug to the array, updates the timer to get faster
 */
function addBug() {
    // Create and add a bug
    const bug = createBug();
    bugs.push(bug);

    // Reduce the delay
    bugDelay -= random(0, 100);
    // Constrain it (so they don't come TOO fast)
    bugDelay = constrain(bugDelay, minimumBugDelay, maximumBugDelay);
    // Set the new timeout
    setTimeout(addBug, bugDelay);
}

/**
 * Creates and returns a randomized bug that will start at the top of the
 * canvas and move down
 */
function createBug() {
    const bug = {
        x: random(0, width),
        y: -100,
        velocity: {
            x: 0,
            y: random(2, 10)
        },
        size: random(15, 40),
        fill: "#445566"
    };
    return bug;
}

/**
 * Move and display the bugs
*/
function draw() {
    background("#ddeeff");
    extSize(20);
    textAlign(LEFT, TOP);
    text("HP: " + HP, 10, 10);

  checkOverlap(user, bugs);
  drawHover();
    moveHover();

    for (let bug of bugs) {
        moveBug(bug);
        drawBug(bug);
    }

}


/**
 * Moves a bug according to its velocity
 */
function moveBug(bug) {
    bug.x += bug.velocity.x;
    bug.y += bug.velocity.y;
}

/**
 * Draws a bug according to its properties
 */
function drawBug(bug) {
    push();
    noStroke();
    fill(bug.fill);
    ellipse(bug.x, bug.y, bug.size);
    pop();
}
function drawHover(user) {
  push();
  noStroke();
  fill(user.fill);

  rectMode(CENTER);
  circle(user.x, user.y, user.width);
  pop();
}

function checkOverlap(bug) {
    const d = dist(user.x, user.y, bug.x, bug.y);
  const overlap = (d < user.size/2 + bug.size/2);
  
  return overlap;
  }

function scoreIncrease(overlap) {
  if (overlap) {
    score += 1;

  }
}
function moveHover() {
  user.x = mouseX;
  user.y = mouseY;
}