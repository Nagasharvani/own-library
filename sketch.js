var rect1,rect2;
var moving,fixed;

function setup() {
  createCanvas(800,400);
  rect1=createSprite(200, 300, 50, 50);
  rect2=createSprite(400,300,50,50);

  moving=createSprite(300, 50, 50, 50);
  fixed=createSprite(600, 100, 50, 50);

  rect1.shapeColor="green";
  rect2.shapeColor="green";

  moving.shapeColor="yellow";
  fixed.shapeColor="yellow";

  rect1.velocityX=3;
  rect2.velocityX=-3;
}

function draw() {
  background("black");

  moving.y=World.mouseY;
  moving.x=World.mouseX; 

 bounceOff(rect1,rect2);

 if(isTouching(moving,fixed))
 {
  moving.shapeColor="blue";
  fixed.shapeColor="blue"; 
 }
 else
 {
  moving.shapeColor="yellow";
  fixed.shapeColor="yellow";
 }

  drawSprites();
}

