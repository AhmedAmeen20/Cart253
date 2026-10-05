/**
 * Barista guide
 * Ahmed Ameen
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

let Earlgrey;
let milk;
let filteredcoffee;
let espresso;





function setup() {
  createCanvas(400, 400);

  //choice = random(math);

  // Create an array of emoji strings.
  

  // Choose a random element from the array.
  
  // Style the text.
  textAlign(CENTER);
  textSize(75);

  // Display the emoji.

}

function draw() {
  background(200);
  textSize(40);
  text ("Barista guide", 200, 40);
    textSize(20);
    text ("Click on the ingredients to make a drink", 200, 80);

menu();
menu2()

  
 
  
}

function menu(){
  textSize(20);
  text ("Earl grey", 200, 150);
  text ("Filtered coffee", 200, 200);
  text ("Espresso", 200, 250);
}
function menu2(){
  textSize(20);
  text ("Milk", 200, 300);
}

function mouseClicked(){
  if (mouseX > 150 && mouseX < 250 && mouseY > 130 && mouseY < 170){
    console.log("Earl grey");


  }
  if (mouseX > 150 && mouseX < 250 && mouseY > 180 && mouseY < 220){
    console.log("Filtered coffee");
  }
  if (mouseX > 150 && mouseX < 250 && mouseY > 230 && mouseY < 270){
    console.log("Espresso");
  }
} 
