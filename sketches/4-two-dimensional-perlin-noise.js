// This is the sketch that we've been building up to
// We're going to draw a grid of pixels whose greyscale values correlate to a noise value in x and y dimensions
// Hopefully, we'll see something cool like a heatmap or a top-down view of noisy terrain 

var increment = 0.01;

function setup() {
  createCanvas(400, 400);
  frameRate(5);
}

function draw() {
  // Initializing the p5.js pixel array to work with the pixels directly
  loadPixels();

  background(0);
  stroke(255);

  noFill();
  beginShape();
  for (var x = 0; x < width; ++x) {
    for (var y = 0; y < height; ++y) {

    }
  }
  endShape();

  
}
