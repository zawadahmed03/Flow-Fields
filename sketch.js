let cols, rows;
let increment = 0.75;
let scl = 40;

let particles = [];

function setup() {
  createCanvas(1920, 1080);
  background("#000000");
  cols = floor(width / scl);
  rows = floor(height / scl);

  for (let i = 0; i < 5000; i++) {
    particles[i] = new Particle();
  }
}

function draw() {
  for (let i = 0; i < particles.length; i++) {
    particles[i].follow();
    particles[i].edge();
    particles[i].update();
    particles[i].show();
  }
}

// let flowField;
//flowField = new Array(cols * rows);

// let yOff = 0;
// for (let y = 0; y < rows; y++) {
//   let xOff = 0;
//   for (let x = 0; x < cols; x++) {
//     let index = y + x * rows;
//     let angle = noise(xOff, yOff) * TWO_PI;
//     let v = p5.Vector.fromAngle(angle);
//     v.setMag(0.1);
//     flowField[index] = v;
//     xOff += increment;
//   }
//   yOff += increment;
// }
