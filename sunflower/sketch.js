var n = 0;
var c = 0.25;
var amount = [10000];


function setup(){
  createCanvas(windowWidth,windowHeight);
  background(0);
  frameRate(60);
  angleMode(DEGREES);
  colorMode(HSB);

}
function fib(i){
  var angle = i * 137.4;
  var r = c * sqrt(i*i);
  var x = r * cos(angle) + width/2
  var y = r * sin(angle) + height/2
  fill((angle-r)%255,(n)%255,r%255);
  ellipse(x,y, 11);


}

function draw(){


  //var scale = createSlider();
for (var i = 0; len = amount.length; i < len, i++) {
  fib(i);
  }
}
