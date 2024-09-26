// This sketch intends to develop further on simply moving a circle along one axis with noise to graphing noise in two dimensions

function setup() {
  createCanvas(600, 600);
}

// We use 2 noise offset values to keep the perlin noise space the same but take two different values from it
var noiseOffset1 = 0;
var noiseOffset2 = 1000;

// Function to draw an ellipse every frame where the x and y positions of the circle change with a single noise space
function drawCircleNoisy() {
  // Using the two offsets from the same noise space to generate noisy x and y values
  var x = map(noise(noiseOffset1), 0, 1, 0, width);
  var y = map(noise(noiseOffset2), 0, 1, 0, height);

  noiseOffset1 += 0.01;
  noiseOffset2 += 0.01;

  ellipse(x, y, 24, 24);
}

function graphNoise() {
  for (var i = 0; i < width; ++i) {
    stroke(255);
    point(i, 0);
  }
}

function draw() {
  background(55);
  
  // drawCircleNoisy();

  translate(0, height / 2);
  graphNoise();
}
