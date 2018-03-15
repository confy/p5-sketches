	var scl = 8
	var bscl = 1
	var rscl = 1.5
	let cnt = 0


function setup() {
	ellipseMode(CENTER);
	rectMode(CENTER);




	createCanvas(640,	 480);
	pixelDensity(1)
	video = createCapture(VIDEO);
	video.size(width/scl,height/scl)
}
function mousePressed() {
	ellipse(mouseX, mouseY, scl, scl);
	return false;
}

function draw() {
	mousePressed()

	background(27);
	video.loadPixels()
	loadPixels();
	for (var y = 0; y < video.height; y++){
	for (var x = 0; x < video.width; x++){
	var index = (x + y * video.width)*4;

	var r = video.pixels[index+0]
	var g = video.pixels[index+1]
	var b = video.pixels[index+2]

	var bright = round(r+g+b)/bscl;
	let bright01 = map( bright, 0, 255, rscl, 0);
	fill(r,g,b,bright)
	rect((x*scl),(y*scl),scl*bright01,scl*bright01)
	}
	}
	bscl = bscl + 0.1
	if (bscl > 5){
	bscl = 3;
	}
	//updatePixels()
}
