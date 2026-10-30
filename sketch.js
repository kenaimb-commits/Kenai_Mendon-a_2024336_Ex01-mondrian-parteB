function setup() {
  createCanvas(500, 500);
  strokeWeight(6);
background(random(255), random(255), random(255));

     // R, G & B values.
  fill(random(255), random(255), random(255));
  rect(-3, -3, 230, 200);
    // R, G & B values.
  fill(random(255), random(255), random(255));
  square(230, 330, 140);
  // R, G & B values.
  fill(random(255), random(255), random(255));
  rect(-3, 330, 45, 170);

  stroke(0);
  strokeWeight(10);
  line(0, 200, 500, 200);
  line(0, 330, 500, 330);
  strokeWeight(6);
  line(230, 0, 230, 500);
  line(370, 330, 370, 500);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}