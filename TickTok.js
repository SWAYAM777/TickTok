

function setup() {
  createCanvas(720,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);
  let c = map(mouseX, 0, width, 0, 175);
  let d = map(mouseX, 0, width, 40, 300);
  fill(255, c, 0);
  ellipse(width/2, height/2, d, d);  
  hr = hour();
  mn = minute();
  sc = seconds();
  angleMode(DEGREES);
  scAngle = map(Sc, 0, 60, 0, 360);
stroke (255,0,0);
strokeWeight(7);
line(0, 0, 100, 0);
arc(50, 55, 50, 50, 0, HALF_PI);
noFill();
arc(50, 55, 60, 60, HALF_PI, PI);
arc(50, 55, 70, 70, PI, PI + QUARTER_PI);
arc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);
strokeWeight(6);
stroke(4);
  drawSprites();
}