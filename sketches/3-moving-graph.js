// This is a sketch that builds on graphing perlin noise by making the graph a lot easier to understand
// In this sketch, we explore what it would look like if we were to scan through the perlin noise space
// We would do this by changing our frame of reference and having the increment to the argument to the noise function, to be variable as well

var increment = 0.1;
var noiseOffset = 100;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(51);

  noFill();
  stroke(255);

  beginShape();
  for (var x = 0; x < width; ++x) {
    var y = map(noise(noiseOffset), 0, 1, 0, height);

    vertex(x, y);

    noiseOffset += increment;
  }
  endShape();

  noLoop();
}