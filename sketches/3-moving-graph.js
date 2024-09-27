// This is a sketch that builds on graphing perlin noise by making the graph a lot easier to understand
// In this sketch, we explore what it would look like if we were to scan through the perlin noise space
// We would do this by changing our frame of reference and having the increment to the argument to the noise function, to be variable as well

var increment = 0.01;
var start = 0;

function setup() {
  createCanvas(1200, 600);
  frameRate(5);
}

function draw() {
  background(51);
  
  noFill();
  stroke(255);
  
  beginShape();
  // It's important that this line is in the draw() function and not declared globally
  var noiseOffset = start;
  for (var x = 0; x < width; ++x) {
    var y = map(noise(noiseOffset), 0, 1, 0, height);

    vertex(x, y);

    noiseOffset += increment;
  }
  endShape();

  start += increment;

  // noLoop();
}