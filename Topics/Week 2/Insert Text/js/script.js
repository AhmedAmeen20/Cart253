/**
 * Insert Text
 * Ahmed Ameen
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */
function setup() {
  createCanvas(400, 400);
  background("green");
  describe('Two horizontal lines. The top line grows horizontally as the mouse moves to the right. The bottom line also grows horizontally but is scaled to stay on the left half of the canvas.');
}




function draw() {


  // Remap mouseX from [0, 100] to [0, 50].
  let x = map(mouseX, 0, 100, 0, 50);

  text('Insert Text', mouseX, mouseY);

  describe('The text "hi" written in black in the middle of a gray square.');

}