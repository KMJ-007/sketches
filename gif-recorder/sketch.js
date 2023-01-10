let isRecording = true; //assign as true when you want to record
let firstFrame = 1; //choose a starting point to record
let lastFrame = 600; //choose an ending point to finish recording
//Your Global Declarations Here:

function setup() {
  canvasToRecord = createCanvas(400, 400).canvas;
  //Your Initializations/Assignments Here:
  
}
let circleY = 0;
let circleX = 400;
function exampleDraw() {
  background(0);
  //Your Animation Here:
  exampleAnimation()
  
  //Keep "recordGIF() at the end of the draw function"
  recordGIF()
}

function draw(){
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
  recordGIF()
}
