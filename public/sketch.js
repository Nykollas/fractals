let canvasWidth;
let canvasHeight;
let maxIterations = 1000;

function setup() {
  canvasWidth = windowWidth;
  canvasHeight = windowHeight;
  createCanvas(canvasWidth, canvasHeight);
  pixelDensity(1);
  noLoop();
}

function draw() {
  loadPixels();

  for (let x = 0; x < canvasWidth; x++) {
    for (let y = 0; y < canvasHeight; y++) {
      let zx = x * (3.5 / canvasWidth) - 2.5;
      let zy = y * (2 / canvasHeight) - 1;
      let cX = zx;
      let cY = zy;
      let iterations = 0;

      while (iterations < maxIterations) {
        let xTemp = zx * zx - zy * zy + cX;
        zy = 2 * zx * zy + cY;
        zx = xTemp;
        iterations++;

        if (zx * zx + zy * zy > 4) break;
      }

      let color = iterations / maxIterations * 255;

      let index = (x + y * canvasWidth) * 4;
      pixels[index] = color;
      pixels[index + 1] = color;
      pixels[index + 2] = color;
      pixels[index + 3] = 255;
    }
  }

  updatePixels();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  draw();
}
