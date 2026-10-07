/**
 * Barista guide
 * Ahmed Ameen
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */
let drink = "..."
let serve = "here is your drink"
let clickserve = false;
let serveStart = 0;
let serveDuration = 2000;

function setup(){
  createCanvas(500, 300);
  let temp = random(["Iced", "Hot"]);

  let liquid = random(["Espresso", "Tea", "Matcha"]);
  let milk = random(["Regular milk", "Oat milk", "Almond milk", "Coconut milk", "Spoiled milk", "Soy milk",]);
  let sweetener = random(["Vanilla", "Honey", "Sugar", "Caramel"]);

  drink = `Moi je prendrai un ${temp} ${liquid} avec de ${milk} a la ${sweetener} s'il tu plait`
}


function draw() {
  background (100, 100, 255)

  textSize(13);
  if (clickserve && millis() - serveStart < serveDuration) {
    text(serve, 40, 100);
  } else {
    clickserve = false;
    text(drink, 20, 200);
  }

  // Check if the mouse is over the "Serve drink" text.
  if (mouseX > 20 && mouseX < 120 && mouseY > 238 && mouseY < 260) {
    fill(255, 255, 0);
  } else {
    fill(255);
  }
  text("Serve drink", 20, 250)
    fill(255);
}

function mousePressed() {
  if (mouseX > 20 && mouseX < 120 && mouseY > 238 && mouseY < 260) {
    clickserve = true;
    serveStart = millis();
  }
}

