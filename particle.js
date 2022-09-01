function Particle() {
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.maxSpeed = 2;
  this.hue = random(0,360)
  this.alpha = 0

  this.update = function () {
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
    if (this.hue <= 360) this.hue += 0.5
    else this.hue = 0
    if (this.alpha < 1) this.alpha += 0.001
  };

  this.applyForce = function (force) {
    this.acc.add(force);
  };

  this.show = function () {
    colorMode(HSB);
    stroke(this.hue, 75, 75, this.alpha);
    strokeWeight(1);
    point(this.pos.x, this.pos.y);
  };

  this.edge = function () {
    if (this.pos.x > width) {
      this.pos.x = 0;
    }
    if (this.pos.x < 0) {
      this.pos.x = width;
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
    }
    if (this.pos.y > height) {
      this.pos.y = 0;
    }
  };

  this.follow = function () {
    let x = this.pos.x / scl;
    let y = this.pos.y / scl;
    let angle = noise(x, y) * TWO_PI;
    let v = p5.Vector.fromAngle(angle);
    v.setMag(1);
    v.mult(0.1)
    let force = v 
    this.applyForce(force);
  };
}
