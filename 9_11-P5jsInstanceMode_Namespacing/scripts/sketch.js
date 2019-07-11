// Whole-script strict mode syntax
'use strict';

function sketch(instP5) {
  instP5.x;
  instP5.y;

  instP5.setup = function(){
    instP5.createCanvas(400,400);
    instP5.background(51);
    instP5.x = instP5.height/2;
    instP5.y = instP5.height/2;
  }

  instP5.draw = function(){
    //instP5.fill(255,0,147,8);
    instP5.fill(147,0,255,8);
    instP5.noStroke();
    instP5.ellipse(instP5.x, instP5.y, 48, 48);

    instP5.x = instP5.x + instP5.random(-10, 10);
    instP5.y = instP5.y + instP5.random(-10, 10);
  }
}

//The sketch can be instantiated starting from an object template (function) containing all the p5 sketch elements required

let instP51 = new p5(sketch);
