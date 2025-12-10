export default class MovingPlatform {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    
  }

  //platforms goes to the left
  update() {
    this.x -= 2; 

    if (this.x < 0) {
      this.x = 400; 
    }
  }

  // draw platform
  draw() {
    push();
    fill("pink");
    rect(this.x, this.y, this.w, this.h);
    pop();
  }
}


// Check if character is ontop on movingplatform

function checkMovingPlatformCollision() {
  for (let p of movingPlatforms) {
    const isFalling = velocityY > 0;
    const isAbovePlatform = y + character.h <= p.y + velocityY + 1;
    const isTouchingPlatform =
      x + character.w > p.x && x < p.x + p.w && y + character.h >= p.y;

    if (isFalling && isAbovePlatform && isTouchingPlatform) {
      y = p.y - character.h;
      velocityY = jumpSpeed;
      return true;
    }
  }
  return false;
}

// if platforms goes under screen, move up
function recycleMovingPlatforms() {
  for (let p of movingPlatforms) {
    if (p.y > height) {
      p.y = random(-200, 0);
     p.x = random(20, 320);
    }
  }
}



