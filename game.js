import { character } from "./character.js";
import Platform from "./platform.js";
import MovingPlatform from "./movingplatforms.js";
import BreakablePlatform from "./breakableplatform.js";

//set start position
let x = 100;
let y = 100;


//jump system
let velocityY = 0;
const gravity = 0.35;
const jumpSpeed = -15;
let hitTheGround = false;


//generare platforms (arrays)
let platforms = [];
let startY = 500; // Starta nära marken
let spacing = 80; // Avstånd

for (let i = 0; i < 10; i++) {
  let px = random(20, 320); // Slumpmässig x-position
  let py = startY - i * spacing; 
  platforms.push(new Platform(px, py, 80, 20));
}


//generate some movingplatforms (arrays)
let movingPlatforms = [
  new MovingPlatform(40, 150, 80, 20),
  new MovingPlatform(200, 90, 80, 20),
  new MovingPlatform(100, 250, 80, 20),
  new MovingPlatform(50, 350, 80, 20),
  new MovingPlatform(260, 420, 80, 20),
  
];

//Generate BreakingPlatforms (array)
//generate some movingplatforms (arrays)
let breakablePlatforms = [
  new BreakablePlatform(40, 150, 80, 20),
  new BreakablePlatform(200, 90, 80, 20),
];



//setup canvas
function setup() {
  createCanvas(400, 600);

}

function draw() {
  background(0, 220, 250);
  rect(0, 540, 400, 300);
  strokeWeight(0);
  fill(255, 250, 200);


  //apply gravity to character
  velocityY += gravity;
  y += velocityY;

  // hit the ground
  if (y > 500) {
    velocityY = 0;
  }


  //move with clicks from left to right
  if (keyIsDown(37)) x -= 5;
  if (keyIsDown(39)) x += 5;


  //call the functions "check collision" from files
  checkPlatformCollision();
  checkMovingPlatformCollision();
  checkBreakablePlatformCollision();


  //move platforms down
  if (y < height / 2) {
    let diff = height / 2 - y;
    y = height / 2;

    //Move Regularplatforms down
    for (let p of platforms) {
      p.y += diff;

      //When Regularplatforms goes under screen, remove and add new 
       recyclePlatforms();
        
    }
    // movingPlatforms goes down
    for (let mp of movingPlatforms){
      mp.y+= diff;
    }

    // when movingPlatforms goes under screen, remove and add new
    recycleMovingPlatforms();

    //breakable platforms goes down
    for(let bp of breakablePlatforms){
      bp.y+= diff;
    }

    // when Brakable platforms goes under screen, remove and add new
    recycleBreakablePlatforms();
  }

 

  // draw platforms
  for (let p of platforms) {
    p.draw();
  }

  //draw movingPlatforms
  for (let mp of movingPlatforms) {
    mp.update(); // gå åt sidan
    mp.draw();
  }

  // draw  breakable platform
  for (let bp of breakablePlatforms){
    bp.draw ();
  }

  // draw chararcter
  character.draw(x, y);
}

