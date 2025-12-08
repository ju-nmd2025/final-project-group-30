import { character } from "./character.js";
import { platform }from "./platform.js";


//set start position
let x = 100;
let y = 100;

//jump system
let velocityY = 0;
const gravity = 0.4;
const jumpSpeed = -13;
let hitTheGround = false;


//setup canvas
function setup() {
  createCanvas(400, 600);
  
}


function draw() {
  background(0, 220, 250);

  //floor
  /*line(0, 400, 400, 400);*/
  
  rect(0,400, 400, 300);
  strokeWeight(0);
  fill(255,250,200);

  //apply gravity
  velocityY += gravity;
  y += velocityY;


  // hit the ground
  if (y > 350) {
    y = 350;
    velocityY = 0;
    hitTheGround = true;

    //jump automaticlly
    velocityY = jumpSpeed;
    hitTheGround = false;

    
  }

  //move with clicks from left to right
  if (keyIsDown(37)) x -= 5;
  if (keyIsDown(39)) x += 5;

 
  // draw characters and platforms
  character.draw(x, y);
  platform.draw(30, 250);
  platform.draw(200, 110);
}

