// This sketch intends to develop further on simply moving a circle along one axis with noise to graphing noise in two dimensions

// We use 2 noise offset values to keep the perlin noise space the same but take two different values from it
var noiseOffset1 = 0;
var noiseOffset2 = 1000;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(55);
  
  // Using the two offsets from the same noise space to generate noisy x and y values
  var x = map(noise(noiseOffset1), 0, 1, 0, width);
  var y = map(noise(noiseOffset2), 0, 1, 0, height);

  xOffset += 0.01;

  ellipse(x, 200, 24, 24);
}
