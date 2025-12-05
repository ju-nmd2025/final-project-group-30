

export let character = {
    x: 50,
    y: 250,
    w: 50,
    h: 50,

    draw(x, y) {
      //character 
      this.x = x;
      this.y = y;

      //face
      push();
      fill("pink");
      ellipse(this.x+ 24, this.y+27, this.w, this.h);
      pop();

      //left eye
      ellipse(x + 14, y + 19, 8, 10); 
      // right eye
      ellipse(x + 33, y + 19, 8, 10);

      push(0);
      fill(0);
      ellipse(x + 14, y + 19, 4, 4); //left pupil
      ellipse(x + 33, y + 19, 4, 4); // right pupil
      pop();

      //nose
      ellipse(x + 24, y + 34, 20, 15); 

      push();
      fill(0);
      ellipse(x + 28, y + 34, 5, 5); // left nostril
      ellipse(x + 20, y + 34, 5, 5); // right nostril
      pop();


      // left ear
      push(); // spara nuvarande koordinatsystem
      fill("pink");
      strokeWeight(0);
      translate(x + 5, y +10); // flytta origo till cirkelns/ellipsens mitt
      rotate(radians(50)); // rotera 45° (ändra värdet som du vill)
      ellipse(0, 0, 15, 25);
      pop(); // återställ koordinatsystemet

      //right ear
      push();
      fill("pink");
      strokeWeight(0);
      translate(x+43, y+10);
      rotate(radians(130));
      ellipse(0, 0, 15, 25);
      pop();
    }


};


