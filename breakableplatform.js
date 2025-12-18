export class BreakablePlatform {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  draw() {
    push();
    fill("red");
    rect(this.x, this.y, this.w, this.h);
    pop();
  }
}

// Check if character is ontop on breakable platform
export function checkBreakablePlatformCollision(breakablePlatforms) {
  for (let i = 0; i < breakablePlatforms.length; i++) {
    const isFalling = velocityY > 0;
    const isAbovePlatform =
      y + character.h <= breakablePlatforms[i].y + velocityY + 1;
    const isTouchingPlatform =
      breakablePlatforms[i].x + character.w > breakablePlatforms[i].x &&
      x < breakablePlatforms[i].x + breakablePlatforms[i].w &&
      y + character.h >= breakablePlatforms[i].y;

    if (isFalling && isAbovePlatform && isTouchingPlatform) {
      y = breakablePlatforms[i].y - character.h;
      velocityY = jumpSpeed;

      breakablePlatforms.splice(i, 1);
      return true;
    }
  }
  return false;
}

// if platforms goes under screen, move up
export function recycleBreakablePlatforms(breakablePlatforms) {
  for (let p of breakablePlatforms) {
    if (p.y > height) {
      p.y = random(-200, 0);
      p.x = random(20, 320);
    }

    // If b.p splice so recycle platform.
    if (breakablePlatforms.length < 2) {
      breakablePlatforms.push(
        new BreakablePlatform(random(20, 320), random(-200, 0), 80, 20)
      );
    }
  }
}
