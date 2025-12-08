import { character } from "./character.js";
import { platform } from "./platform.js";

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
  { x: 40, y: 150, w: 80, h: 20 },
  { x: 200, y: 90, w: 80, h: 20 },
  { x: 100, y: 250, w: 80, h: 20 }, //optional floor platform
];

//setup canvas
function setup() {
  createCanvas(400, 600);

}

//Check if character is ontop on platform
function checkPlatformCollision() {
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

function recyclePlatforms() {
  for (let p of platforms) {
    // If platform goes down under screen, move up.
    if (p.y > height) {
      p.y = random(300, 200);
      p.x = random(20, 350);
    }
  }
}

function draw() {
  background(0, 220, 250);
  rect(0, 540, 400, 300);
  //floor
  /*line(0, 400, 400, 400);*/

  //rect(0, 540, 400, 300);
  strokeWeight(0);
  fill(255, 250, 200);

  //apply gravity
  velocityY += gravity;
  y += velocityY;

  //check collisions with platforms
  checkPlatformCollision();

  // hit the ground
  if (y > 500) {
    velocityY = 0;

  }

  //move with clicks from left to right
  if (keyIsDown(37)) x -= 5;
  if (keyIsDown(39)) x += 5;

  if (y < height / 2) {
    let diff = height / 2 - y;
    y = height / 2;

    //Move platforms down
    for (let p of platforms) {
      p.y += diff;

      //When platforms moves offscreen remove and add new one
      if (p.y > height) {
        recyclePlatforms();
      }
    }
  }

  // draw platforms
  for (let p of platforms) {
    rect(p.x, p.y, p.w, p.h);
  }

  // draw chararcter
  character.draw(x, y);
}
