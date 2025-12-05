
export let platform = {
  x: 350,
  y: 350,
  w: 80,
  h: 20,




  draw(x, y) {
    push();
    fill("pink");
    rect(x, y, this.w, this.h);
    pop();

  }


};




