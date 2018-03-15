let x = 0;
let y = 0;
let tim = 0
let timmul = 255

function setup() {
	colorMode(HSB);
  createCanvas(500, 500);
  background(0);
  //translate(width / 2, height / 2);

}
function draw() {
	background(50,0);
  translate(width / 2, height / 2);

	strokeWeight(2);
  //background(50);
	point(x,y);
	let prevx = x;
	let prevy = y;
	stroke(tim,255,255);
	x = x+randomGaussian(0,5)
	y = y+randomGaussian(0,5)
	line(prevx,prevy,x,y)
	tim = tim+1
	if (tim>timmul){
		tim = 1
	}


}
