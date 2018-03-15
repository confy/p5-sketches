function setup(){
	createCanvas(500,500);
	angleMode(DEGREES);

}


function draw(){
	background(0);
	let hr = hour();
	let mn = minute();
	let sc = second();
	let hrmap = map(hr, 0, 24, 0, 720);
	let mnmap = map(mn, 0, 60, 0, 360);
	let scmap = map(sc, 0, 60, 0, 360)

	stroke(255);
	strokeWeight(20);
	noFill();
	ellipse(250,250,400)

	stroke(127,52,200);
	strokeWeight(10)
	arc(250,250,400,400,0,scmap);


	fill(255);
	noStroke();
	text(hr + ':'+ mn + ':' + sc, 10, 250);

}
