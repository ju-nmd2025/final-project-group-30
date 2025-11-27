import { character } from "./character";
import platform from "platform";

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
  createCanvas(400, 400);
}

function draw() {
  background(0, 200, 250);

  //floor
  line(0, 300, 400, 300);

  //apply gravity
  velocityY += gravity;
  y += velocityY;

  // hit the ground
  if (y > 250) {
    y = 250;
    velocityY = 0;
    hitTheGround = true;

    //jump automaticlly
    velocityY = jumpSpeed;
    hitTheGround = false;

    
  }
  
  //move with clicks from left to right
  if (keyIsDown(37)) x -= 5;
  if (keyIsDown(39)) x += 5;

  //move left
  /* x--;
     if (x < 0) {
       x = 400;
     }
  */

  // draw characters and platforms
  character.draw(x, y);
  platform.draw(40, 150);
  platform.draw(200, 90);
}



