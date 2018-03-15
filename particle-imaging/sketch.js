let bubbles = [];

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 60; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 50);
    let vel = -1
    let acc = 0
    bubbles[i] = new Bubble(x, y, r, vel, acc);
  }
}

function draw() {
  background(0);

  for (let b of bubbles) {

    b.receiveForces(createVector(0,0.01))
    b.move()
    b.show();

    if (b.offscreen()) {
      b.y = random(0, height);
      b.x = random(0, width);
    }
    let overlapping = false;
    for (let other of bubbles) {
      if (b !== other && b.intersects(other)) {
        overlapping = true;
      }
    }
    if (overlapping) {
      b.changeColor(255);
    } else {
      b.changeColor(0);
    }

  }

}

class Bubble {
  constructor(x, y, r = 50) {
    this.r = r;
    this.pos = createVector(x, y)
    this.vel = createVector()
    this.acc = createVector()
    this.x = x;
    this.y = y;
    this.brightness = 0;
  }

  intersects(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    return (d < this.r + other.r);
    // if (d < this.r + other.r) {
    //   return true;
    // } else {
    //   return false;
    // }
  }

  changeColor(bright) {
    this.brightness = bright;
  }

  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }
  receiveForces(acc) {
    this.acc = this.acc.add(acc);
    this.vel = this.vel.add(this.acc);
    this.pos = this.pos.add(this.vel);
  }
  move() {
    this.x = this.pos.x
    this.y = this.pos.y
  }
  offscreen() {
    if (this.x > width + this.r * 2) {
      return true;
    } else if (this.y > height + this.r * 2) {
      return true;
    } else {
      return false;
    }
  }
  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.brightness, 125);
    ellipse(this.x, this.y, this.r * 2);
  }
}
