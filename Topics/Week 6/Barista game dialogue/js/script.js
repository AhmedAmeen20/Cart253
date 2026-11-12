/**
 * Barista game dialogue demo
 * Ahmed Ameen
 *
 * 
 *
 * 
 * 
 */

// The speech itself as an array of strings
const speech = [
  "Uhh...",
  "Hi! Can i get 1 coffee please?",
  "Of course! Would you like black coffee, coffe with milk, or flavored coffee?",
  "I'll have a coffee please.",
  "Ok so black coffee got it. would you like drip coffee or an americano?",
  "No i don't want black coffee, i want coffee man also medium to go.",
  "Would youo like milk with it?",
  "Like no man, i said i want coffee? Where is your manager you clearly don't know.",
  "Sorry sir but i'm the only one working today, if you please explain to me what you want.",
  "Goodness gracious, you know what forget it. Can i have a strawberry matcha with oatmilk? extra strawberry puree please.",
  "Alright! that would be 20.74$!",
];
// Which part of the speech are we displaying?
let speechIndex = 0;
// Dialog box specification
let box = {
  x: 50,
  y: 300,
  width: 300,
  height: 80,
  padding: 20,
  fontSize: 18
};
let cafeImage = undefined;

/**
 * Loads the Marc Anthony image
 */
function preload() {
  cafeImage = loadImage("assets/images/cafe.png");
}

/**
 * Creates the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Displays Marc Anthony giving a speech
 */
function draw() {
  image(cafeImage, 0, 0);
  
  // Display Marc Anthony and his dialog
  showDialog();
}

/**
 * Display the speech in a dialog box
 */
function showDialog() {
  // The background box
  push();
  fill(0);
  stroke(255);
  strokeWeight(3);
  rect(box.x, box.y, box.width, box.height);
  pop();
  
  // The text
  // Note how we're using extra arguments in text() to specify
  // the dimensions we want the text to wrap inside, including
  // using the padding of the dialog box
  push();
  fill(255);
  textSize(18);
  text(speech[speechIndex], box.x + box.padding, box.y + box.padding, box.width - 2 * box.padding, box.height - 2 * box.padding);
  pop();
}

/**
 * When the user clicks, advance the speech if there's more.
 */
function mousePressed() {
  // Make sure we're not at the end of the speech aready
  if (speechIndex < speech.length - 1) {
    // Advance the line
    speechIndex++;
  }
}