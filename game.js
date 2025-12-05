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

//define platform
let platforms = [
  {x: 40, y: 150, w: 80, h:20},
  {x: 200, y:90, w: 80, h: 20},
  {x: 100, y: 250, w: 80,h: 20} //optional floor platform

];

//setup canvas
function setup() {
  createCanvas(400, 400);
}

//Check if character is ontop on platform
function checkPlatformCollision(){
  for (let p of platforms) {
    // check if character is falling and touches top of platform
    if (
      velocityY > 0 && // only when falling
      x + character.w > p.x && // horisontal overlap
      x < p.x + p.w &&
      y + character.h >= p.y && // bottom touches top of platform
      y + character.h <= p.y + velocityY + 1 // prevent sticking from below
    ) {
      // place character on top of platform
      y = p.y - character.h;
      velocityY = jumpSpeed; // automatically jump
      return true;
    }
  }
  return false;
}

function draw() {
  background(0, 200, 250);

  //floor
  line(0, 300, 400, 300);

  //apply gravity
  velocityY += gravity;
  y += velocityY;

//check collisions with platforms
checkPlatformCollision ();



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



  // draw platforms
for (let p of platforms){
  rect (p.x, p.y, p.w, p.h);
}

// draw chararcter
character.draw (x, y);

}



