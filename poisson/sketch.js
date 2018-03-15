var r = 10;
var k = 30;
var grid = []
var w = r / Math.sqrt(2);
var active = []




function setup() {
	createCanvas(400,400);
	background(0)
	strokeWeight(4);
	//step 0
	var cols = floor(width/w);
	var rows = floor(height/w);
	for (var i = 0; i <cols*rows; i++){
		grid[i] = -1;
	}

	//step 1 random point
	var x = random(width);
	var y = random(height);
	var i = floor(x / w);
	var j = floor(y / w);
	var pos = createVector(x,y);
	grid [i+j *cols] = pos;
	active.push(pos);
}

function draw() {
	background(0);

	//step 2

	if (active.length > 0){
		var r = floor(random(active.length));
		var pos = active[r];
		for (var n = 0; n<k; n++){
			var sample = p5.Vector.random2D();
			var m = random(r, 2*r);
			sample.setMag(m);
			sample.add(pos);

		}
	}
	for (var i = 0; i < grid.length; i++){
		if (grid[i] != -1){
			stroke(255);
			strokeWeight(4);
			point(grid[i].x,grid[i].y)
		}
	}
	for (var i = 0; i < active.length; i++){
		stroke(255,0,255);
		strokeWeight(4);
		point(active[i].x, active[i].y);
	}

}
