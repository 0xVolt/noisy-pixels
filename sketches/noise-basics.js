// This is a sketch to visualize the difference between randomness and noise

// There are two functions that draw a circle on the canvas. One where the circle's x position is random every frame and the other where the x value is determined by a noise value every time you refresh the sketch.

// Since we know that the distribution is generated every time the sketch is refreshed, to animate the circle, we just make the seed variable every frame.
var xOffset = 0;

function setup() {
  // Setup the size of the canvas
  createCanvas(600, 600);
}

function drawCircleWithRandomX() {
  // Shift the origin to the center of the screen
  translate(width / 2, height / 2);

  // Have the horizontal position of the circle be a random value every frame
  var x = random(-width, width);
  
  // Draw the circle
  ellipse(x, -75, 25, 25);
}

function drawStaticCircleWithNoisyX() {
  // Shift the origin to the center of the screen
  translate(width / 2, height / 2);

  // Have the horizontal position of the circle be a random value every frame
  var seed = 100;
  // Map the noise value for the given seed (which ranges from 0 to 1) to a value between the left and right edges of the screen
  var x = map(noise(seed), 0, 1, -width, width);

  // Draw the circle
  ellipse(x, 75, 25, 25);
  console.log(x);
}

function drawCircleWithNoisyX() {
  // Shift the origin to the center of the screen
  translate(width / 2, height / 2);

  // Map the noise value for the given seed (which ranges from 0 to 1) to a value between the left and right edges of the screen
  var x = map(noise(xOffset), 0, 1, -width, width);

  // Add to the offset every time the function is called
  xOffset += 0.01;

  // Draw the circle
  ellipse(x, 0, 25, 25);
  console.log(x);
}

function draw() {
  background(55);
  
  // Try both of these functions and see how the result changes. Every time you refresh the sketch window, a new distribution for the noise values is created. That's why there's only one circle that can be drawn.
  // drawCircleWithRandomX();
  // drawStaticCircleWithNoisyX();

  // This is the smooth random movement we were looking for
  drawCircleWithNoisyX();
}
