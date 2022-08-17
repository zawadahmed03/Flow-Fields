let cols, rows;
let increment = 0.5;
let scl = 30;
let fr;
let zOff = 0;

let particles = [];

let flowField;

function setup() {
  createCanvas(innerHeight, innerHeight);
  background('#151515')
  cols = floor(width / scl);
  rows = floor(height / scl);

  flowField = new Array(cols * rows);

  for (let i = 0; i < 500; i++) {
    particles[i] = new Particle();
  }

  let yOff = 0;
  for (let y = 0; y < rows; y++) {
    let xOff = 0;
    for (let x = 0; x < cols; x++) {
      let index = x + y * rows;
      let angle = noise(xOff, yOff, zOff) * TWO_PI;
      let v = p5.Vector.fromAngle(angle);
      v.setMag(0.05);
      flowField[index] = v;
      xOff += increment;
    }
    yOff += increment;

    zOff += 0.05;
  }
}

function draw() {
  for (let i = 0; i < particles.length; i++) {
    particles[i].follow(flowField);
    particles[i].edge();
    particles[i].update();
    particles[i].show();
  }
}
