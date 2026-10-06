/**
 * Barista guide
 * Ahmed Ameen
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */
let drink = "..."

function setup(){
  createCanvas(500, 300);
  let temp = random(["Iced", "Hot"]);

  let liquid = random(["Espresso", "Tea", "Matcha"]);
  let milk = random(["Regular milk", "Oat milk", "Almond milk", "Coconut milk", "Spoiled milk", "Soy milk",]);
  let sweetener = random(["Vanilla", "Honey", "Sugar", "Caramel"]);

  drink = `Moi je prendrai un ${temp}${liquid} avec de ${milk} a la ${sweetener} s'il tu plait`
}


function draw() {
  background (100, 100, 255)

  textSize(13);
  text(drink, 20, 200)
}

