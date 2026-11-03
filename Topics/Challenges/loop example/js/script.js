"use strict";

function setup() {
  createCanvas(800, 800);
}

function draw() {
    background(0);

    let step = 10;

    for (let x = 0; x <= width; x += step) {
        push();
        //colorMode(HSB);
        step += 0.025;
        translate(x, height / 2);
        rotate (map(x, 0, width, 0, mouseX));
        stroke(map(x, 0, width, 0, 255), 100, 100);
        //strokeWeight(13);
        line(0, -height / 2, 0, height / 2);
        pop();
    }

   //let x = 0;
   // while (x <= width) {
   //     stroke(255);
    //    line(x, 0, x, height);
    //    x += 50;
   // }
}