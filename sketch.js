let cols, rows;
let increment = 0.2;
let scl = 30;
let fr;
let zOff = 0;

let particles = [];

let flowField;

function setup() {
  createCanvas(800, 800);
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP("");

  flowField = new Array(cols * rows);

  for (let i = 0; i < 500; i++) {
    particles[i] = new Particle();
  }

  let yOff = 0;
  noFill();
  for (let y = 0; y < cols; y++) {
    let xOff = 0;
    for (let x = 0; x < rows; x++) {
      let index = x + y * rows;
      let angle = noise(xOff, yOff) * TWO_PI;
      let v = p5.Vector.fromAngle(angle);
      v.setMag(0.01);
      flowField[index] = v;
      // push();
      // stroke(0, 0);
      // strokeWeight(4);
      // strokeCap(SQUARE);
      // translate(x * scl, y * scl);
      // rotate(v.heading());
      // line(0, 0, scl, 0);
      // pop();
      xOff += increment;
    }
    yOff += increment;

    zOff += 0.0005;
  }
}

function draw() {
  for (let i = 0; i < particles.length; i++) {
    particles[i].follow(flowField);
    particles[i].edge();
    particles[i].update();
    particles[i].show();
  }

  fr.html(floor(frameRate()));
}
