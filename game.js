import { character } from "./character.js";
import Platform from "./platform.js";

//set start position
let x = 100;
let y = 100;

//jump system
let velocityY = 0;
const gravity = 0.35;
const jumpSpeed = -15;
let hitTheGround = false;

// generera plattformar

/*let platforms = [
  new Platform(40, 150, 80, 20),
  new Platform(200, 90, 80, 20),
  new Platform(100, 250, 80, 20),
  new Platform(50, 350, 80, 20),
  new Platform(260, 420, 80, 20),
  new Platform(120, 500, 80, 20),
];


//Define platforms (arrays)
let platforms = [];

for (let i = 0; i < 10; i++) {
  let px = random(0, 320);
  let py = random(0, 500);
  platforms.push(new Platform(px, py, 80, 20));
}

*/

//generera plattformar
let platforms = [];
let startY = 500; // Starta nära marken
let spacing = 80; // Avstånd mellan plattformarna (justera för lättare/hårdare hopp)

for (let i = 0; i < 10; i++) {
  let px = random(20, 320); // Slumpmässig x-position
  let py = startY - i * spacing; // Plats uppåt, jämnt mellanrum
  platforms.push(new Platform(px, py, 80, 20));
}


//setup canvas
function setup() {
  createCanvas(400, 600);

}


function draw() {
  background(0, 220, 250);
  rect(0, 540, 400, 300);
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

  //move platforms down
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
    p.draw(); 
  }


  // draw chararcter
  character.draw(x, y);
}
