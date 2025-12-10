export default class BreakablePlatform {
    constructor (x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
draw  (){
    push ();
    fill ("red");
    rect (this.x, this.y, this.w, this.h);
    pop();
}
}

// Check if character is ontop on breakable platform
function checkBreakablePlatformCollision() {
  for (let p of breakablePlatforms) {
    const isFalling = velocityY > 0;
    const isAbovePlatform = y + character.h <= p.y + velocityY + 1;
    const isTouchingPlatform =
      x + character.w > p.x && x < p.x + p.w && y + character.h >= p.y;

    if (isFalling && isAbovePlatform && isTouchingPlatform) {
      y = p.y - character.h;
      velocityY = jumpSpeed;

      breakablePlatforms.splice(p, 1);
      return true;
    }
  }
  return false;
}


// if platforms goes under screen, move up
function recycleBreakablePlatforms() {
  for (let p of breakablePlatforms) {
    if (p.y > height) {
      p.y = random(-200, 0);
     p.x = random(20, 320);
    }
  }
}