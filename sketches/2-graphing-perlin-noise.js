// This sketch intends to develop further on simply moving a circle along one axis with noise to graphing noise in two dimensions

var xOffset = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(55);
  
  var x = map(noise(xOffset), 0, 1, 0, width);

  xOffset += 0.01;

  ellipse(x, 200, 24, 24);
}
