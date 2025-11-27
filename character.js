export let character = {
    x: 50,
    y: 250,
    w: 50,
    h: 50,



    draw(x, y) {
      //character
      this.x = x;
      this.y = y;
      
      push();
      fill("magenta");
      rect(this.x , this.y ,this.w, this.h);
      pop();
      
    },
};
