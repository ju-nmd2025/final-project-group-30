import { character } from "./character";
import platform from "platform";

let x = 100;
let y = 100;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 200, 250);
  line(0, 300, 400, 300);
  x--;
  if (x < 0) {
    x = 400;
  }

  character.draw();
  platform.draw(100, 50);
  platform.draw(200, 90);
}
