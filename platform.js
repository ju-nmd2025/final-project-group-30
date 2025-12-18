export let platform = {
  x: 250,
  y: 250,
  w: 80,
  h: 20,
};

export class Platform {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  draw() {
    push();
    fill("pink");
    rect(this.x, this.y, this.w, this.h);
    pop();
  }
}

// Check if character lands on platform
export function checkPlatformCollision(platforms) {
  for (let p of platforms) {
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

//if platform goes under screen, remove and move up
export function recyclePlatforms() {
  for (let p of platforms) {
    if (p.y > height) {
      p.y = random(-200, 0);
      p.x = random(20, 320);
    }
  }
}
