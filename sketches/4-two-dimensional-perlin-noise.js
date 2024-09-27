// This is the sketch that we've been building up to
// We're going to draw a grid of pixels whose greyscale values correlate to a noise value in x and y dimensions
// Hopefully, we'll see something cool like a heatmap or a top-down view of noisy terrain 

var increment = 0.01;

function setup() {
  createCanvas(600, 600);
  frameRate(5);

  // To avoid high-density pixel displays from clumping pixels together
  pixelDensity(1);
}

function draw() {
  // Initializing the p5.js pixel array to work with the pixels directly
  loadPixels();

  var noiseX = 0;
  for (var x = 0; x < width; ++x) {
    var noiseY = 0;
    for (var y = 0; y < height; ++y) {
      var index = (x + y * width) * 4;
      
      var r = map(noise(noiseX, noiseY), 0, 1, 0, 255); 
      
      // Change pixel values to R, G, B and alpha
      pixels[index] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = 255;

      noiseY += increment;
    }
    noiseX += increment;
  }
  updatePixels();

  noLoop();
}
