let circleY = 0;
let circleX = 400;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  noStroke();
  circle(200,circleY,60);
  circle(circleY,200,60);
  circle(circleX,200,60);  
  circle(200,circleX,60);
  circle(circleY,circleX,60);
  circle(circleY,circleY,60);
  circle(circleX,circleY,60);
  circle(circleX,circleX,60);
  circleY = circleY +1;
  circleX = circleX -1;
  if(circleY ==400 && circleX ===0){
    circleY = 0;
    circleX = 400;
  }
}
