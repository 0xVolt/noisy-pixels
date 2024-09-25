// This is a sketch to visualize the difference between randomness and noise

function setup() {
  // Setup the size of the canvas
  createCanvas(600, 600);
}

function drawCircleWithRandomX() {
  // Shift the origin to the center of the screen
  translate(width / 2, height / 2);

  // Have the horizontal position of the circle be a random value every frame
  var x = random(-width + 50, width - 50);

  
  // Draw the circle
  noFill();
  stroke(255);
  ellipse(x, -75, 25, 25);
}

function draw() {
  background(51);
  
  drawCircleWithRandomX();
}
