/**
 * Day and Night Cycle
 * Ahmed Ameen
 * 
 * Implemented a simple day and night cycle thru a highway scene.
 */

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // The background goes from white to red to green to blue fill
  background(paletteLerp([
    ['lightblue', 0.25],
    ['darkblue', 1],
    ['lightblue', 2,25],
    ['darkblue', 1],
    
  ], millis() / 10000 % 1));

  
  fill(0, 116, 14)
  triangle(30, 300, 200, 300, 86, 100);

  fill(0, 140, 14)
  triangle(80, 300, 300, 300, 200, 140);

  
  fill(255, 255, 0)
  noStroke();
  circle(300, 60, 75)


  fill(158, 158, 158)
  rect(0, 290, 400, 150)
  
  fill(0, 0, 0)
  quad(50, 290, 90, 290, 300, 400, 100, 400);

  
  fill(255, 255, 255)
  rect(25, 30, 160, 50, 20)
  rect(100, 60, 100, 30, 20)

  rect(200, 80, 100, 30, 20)
  rect(300, 150, 80, 28, 20)

  fill(100, 100, 100)
  square(300, 360, 60)
  rect(307, 240, 45, 120)
  rect(252, 200, 100, 40)
  rect(252, 210, 50, 40)

  square(200, 310, 25)
  rect(203, 240, 18, 70)
  rect(173, 240, 30, 17)
  rect(173, 250, 18, 17)

  square(130, 290, 15)
  rect(132, 250, 10, 40)
  rect(120, 250, 20, 8)
  rect(173, 250, 18, 17)

  



  

}