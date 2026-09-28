/**
 * Pink floors in a cage.
 * Ahmed Ameen
 * 
 * Simple Isometric Abstract Art Project 
 * DON'T REMOVE A GRADE FROM MY WORK IF IT'S GRADED!

/** */

function setup() {
  createCanvas(600, 600);

  background(200);

  noStroke();
  rect(0, 550, 600, 50);
  rect(0, 450, 600, 50);
  rect(0, 350, 600, 50);
  rect(0, 250, 600, 50);
  rect(0, 150, 600, 50);
  rect(0, 50, 600, 50);

  noStroke();
  fill(0, 0, 0)
  rect(0, 500, 600, 50);
  rect(0, 400, 600, 50);
  rect(0, 300, 600, 50);
  rect(0, 200, 600, 50);
  rect(0, 100, 600, 50);
  rect(0, 0, 600, 50);


  fill(255, 97, 198)
  quad(250, 870, 430, 600, 250, 540, 70, 600);

  fill(255, 159, 221)
  quad(250, 760, 430, 550, 250, 490, 70, 550);

  fill(255, 97, 198)
  quad(250, 660, 430, 500, 250, 440, 70, 500);

  fill(255, 159, 221)
  quad(250, 570, 430, 450, 250, 390, 70, 450);

  fill(255, 97, 198)
  quad(250, 490, 430, 400, 250, 340, 70, 400);

  fill(255, 159, 221)
  quad(250, 420, 430, 350, 250, 290, 70, 350);

  fill(255, 97, 198)
  quad(250, 360, 430, 300, 250, 240, 70, 300);
  
  fill(255, 159, 221)
  quad(250, 310, 430, 250, 250, 190, 70, 250);

}


