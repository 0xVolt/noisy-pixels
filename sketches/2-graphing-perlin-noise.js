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
  var y = map(noise(noiseOffset2), 0, 1, 0, height / 2);

  noiseOffset1 += 0.01;
  noiseOffset2 += 0.01;

  ellipse(x, y, 24, 24);
}

// Function to plot random points across the canvas
function plotRandomPoints() {
  for (var i = 0; i < width; ++i) {
    stroke(255);
    point(i, random(-height / 2, height / 2));
  }

}

// Building on the function above to plot random points
// If we replace the points with vertices, we can connect these points to reveal a plot
function shapeRandomPoints() {
  stroke(255);
  noFill();

  beginShape();
  for (var i = 0; i < width; ++i) {
    stroke(255);
    vertex(i, random(-height / 2, height / 2));
  }
  endShape();
}

// Implementing the same logic as before to create a noise distribution and increment the noise value every time we create a vertex
var noiseOffset = 0;
function shapeNoisyPoints() {
  stroke(255);
  noFill();

  beginShape();
  for (var x = 0; x < width; ++x) {
    stroke(255);
    // Calculate the y value with noise
    // Map it to go from -height to height since we translated y0 to the center of the canvas
    var y = map(noise(noiseOffset), 0, 1, -height / 2, height / 2);

    vertex(x, y);

    // Increment the noiseOffset value for the next vertex
    noiseOffset += 0.03;
  }
  endShape();
}

function draw() {
  background(55);
  // This would require us to have an upper bound that is height / 2 
  // Since height is the entire height of the canvas, if we move the y = 0 point to the center of the screen, half of the canvas would be above the origin and the other below
  translate(0, height / 2);
  
  drawCircleNoisy();
  // plotRandomPoints();
  // shapeRandomPoints();
  // shapeNoisyPoints();

  // Stop the draw() function from looping every frame
  // noLoop();
}
