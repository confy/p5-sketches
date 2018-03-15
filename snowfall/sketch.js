let snow = [];
let g
let sizeLim = 100;
let sizeMin = 6
let factor = 35;
function setup() {
	createCanvas(windowWidth, windowHeight);

	g = createVector(0.01,0.05);
}

function draw() {

	background(27,27,27,27);
	snow.push(new Snowflake());
	for (flake of snow)	{
		let x = random(-0.01, 0.01);
		let	y = random(0.01, 0.01);
		let randf = createVector(x,y)
		flake.applyForce(randf.mult(g));
		flake.update();
		flake.render();

	}
	for (let i = snow.length-2; i>=0; i--){
		if (snow[i].offScreen())
			snow.splice(i, 1);
	}

}
