function getRandomSize() {
  let r = randomGaussian() * factor ;
  return constrain(abs(r), sizeMin, sizeLim);

  // while(true){
  //   let r1 = random(1);
  //   let r2 = random(1);
  //   if (r2 > r1){
  //     return r1*36;
  //   }
  // }
}

class Snowflake {
  constructor() {
    let x = random(width);
  	let y = random(-100, -10);
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector();
    this.r = getRandomSize()
  }

  applyForce(force){
    //Parallax
    let f = force.copy();
    f.mult(this.r);
    //let f = force.copy()
    //f.div(this.mass);
    this.acc.add(f);
  }


  update()  {
    this.pos.add(this.vel);
    this.vel.limit(this.r*0.05);
    if (this.vel.mag() < 0.5){
      this.vel.normalize()
    }
    this.vel.add(this.acc);
    this.acc.mult(0);
  }


  render()  {
    stroke(map(this.r, sizeMin, sizeLim, 127, 255));
    strokeWeight(this.r);
    point(this.pos.x, this.pos.y);

  }
  offScreen(){
    return (this.pos.y > height + this.r);
  }
}
