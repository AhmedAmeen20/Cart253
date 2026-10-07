/**
 * Barista guide
 * Ahmed Ameen
 * 
 * A simple barista guide where players can click on a button to serve a free drink to french customers.
 * 
 */
// the variables of the game
let drink = "..."
let serve = "here is your drink"
// this variable checks if the user has clicked on the "Serve drink" and moves on to the next customer after 2 seconds
let clickserve = false;
let serveStart = 0;
let serveDuration = 2000;

// the setup function creates the canvas and generates a random set of drink orders for the user to serve
function setup(){
  createCanvas(500, 300);
  let temp = random(["Iced", "Hot"]);
  // the random drink orders are selected from an array of menu items and a customer order is generated using this template
  let liquid = random(["Espresso", "Tea", "Matcha"]);
  let milk = random(["Regular milk", "Oat milk", "Almond milk", "Coconut milk", "Spoiled milk", "Soy milk",]);
  let sweetener = random(["Vanilla", "Honey", "Sugar", "Caramel"]);

  // the customer order
  drink = `Moi je prendrai un ${temp} ${liquid} avec de ${milk} a la ${sweetener} s'il tu plait`
}


function draw() {
  background (100, 100, 255)
  // the text of the customer order and the "Serve drink" button
  textSize(13);
  if (clickserve && millis() - serveStart < serveDuration) {
    text(serve, 40, 100);
  } else {
    clickserve = false;
    text(drink, 20, 200);
  }

  // this checks if the mouse is over the "Serve drink" text. and can be clicked to serve the drink and move on to the next customer
  if (mouseX > 20 && mouseX < 120 && mouseY > 238 && mouseY < 260) {
    fill(255, 255, 0);
  } else {
    fill(255);
  }
  text("Serve drink", 20, 250)
    fill(255);
}
// this ends the game and then loops back to the setup function to generate a new customer order
function mousePressed() {
  if (mouseX > 20 && mouseX < 120 && mouseY > 238 && mouseY < 260) {
    clickserve = true;
    serveStart = millis();
  }
}

