function setup() {
  createCanvas(400, 400);
  background(255, 100, 150,);
   for (i = 0; i < 50; i++){
    flower(random(0, 500), random(0, 500), random(0, 500));
   }
}

function draw() {
}

function flower(x, y, size){
  noStroke();
  fill(255, 255, 0);
  circle(x - 100, y - size - 50, 25);
  fill(255);
  circle(x - 85, y - size - 35, 25);
  fill(255);
  circle(x - 103, y - size - 69, 25);
  fill(255);
  circle(x - 108, y - size - 31, 25);
  fill(255);
  circle(x - 118, y - size - 53, 25);
  fill(255);
  circle(x - 82, y - size - 57, 25);
}