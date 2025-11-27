/*import { character } from "./character";
import platform from "platform"; */


let x = 100 ;
let y = 100 ;

function setup (){
    createCanvas (400,400);
    
}

function draw(){
    background(0,200,250);

    x--;
    if (x<0){ 
    x=400;
}

drawCharacter();
drawPlatform(100, 300);
drawPlatform2(300,250);
}

function drawCharacter(){
    //character
    push();
    fill("magenta");
    rect(x-50, y+150, 50, 50);
    pop();
}

function drawPlatform(x, y){
    //platform
    push();
    fill("pink");
    rect(x-40, y-120, 80, 20);
    pop();
}
function drawPlatform2(x, y){
//platform2
push();
fill("pink");
rect(x-40, y-120, 80, 20);
pop();


//floor
line(0, 300, 400, 300);

}
