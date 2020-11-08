var fixedObject; 
var movingObject;
var newObject1; 
var newObject2;

function setup() {
  createCanvas(800,400);
  fixedObject = createSprite(400, 300, 50, 50);
  fixedObject.shapeColor = "blue"

  movingObject = createSprite(200,100, 40, 40);
  movingObject.shapeColor = "red"
  movingObject.velocityX = 0
  movingObject.velocityY = 4

  newObject1 = createSprite(200, 300, 50 ,50);
  newObject1.shapeColor = "pink";

  newObject2 = createSprite(600, 300, 50, 50);
  newObject2.shapeColor = "lightBlue";
}

function draw() {
  background(255,255,255);  

  bounceAl(movingObject, newObject1);
  drawSprites();
}

