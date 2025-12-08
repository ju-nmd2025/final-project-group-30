
export default class Platform {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  draw () {
    push();
    fill("pink");
    rect(this.x, this.y, this.w, this.h);
    pop();
  }
}


// Check if character is ontop on platform
function checkPlatformCollision() {
  // Loop through each platform
  for (let p of platforms) {
    // Only check when falling and character is over the platform
    const isFalling = velocityY > 0;
    const isAbovePlatform = y + character.h <= p.y + velocityY + 1;
    const isTouchingPlatform =
      x + character.w > p.x && x < p.x + p.w && y + character.h >= p.y;

    if (isFalling && isAbovePlatform && isTouchingPlatform) {
      y = p.y - character.h; // Place character on top
      velocityY = jumpSpeed; // Jump automatically
      return true;
    }
  }
  return false;
}



function recyclePlatforms() {
  for (let p of platforms) {
    // if platforms goes down under screen, move up.
    if (p.y > height) {
      p.y = random(-200, 0);
      p.x = random(20, 320);
    }
  }
}


  