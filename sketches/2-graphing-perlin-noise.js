// This sketch intends to develop further on simply moving a circle along one axis with noise to graphing noise in two dimensions

var xOffset = 0;

function setup() {
  createCanvas(600, 600);
}


function drawCircleWithNoisyX() {
  translate(width / 2, height / 2);

  var x = map(noise(xOffset), 0, 1, -width, width);

  xOffset += 0.01;

  // Draw the circle
  ellipse(x, 0, 25, 25);
  console.log(x);
}

function draw() {
  background(55);
  
}
