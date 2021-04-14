var fixedRect,movingRect,rect3,rect4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 200, 80, 100);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(10,50,100,40);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect3 = createSprite(100,100,100,40);
  rect3.shapeColor = "green";
  rect3.debug = true;

  rect4 = createSprite(200,100,100,40);
  rect4.shapeColor = "green";
  rect4.debug = true;

}

function draw() {
  background(0);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(isTouching2(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  if(isTouching2(movingRect,rect3)){
    movingRect.shapeColor = "yellow";
    rect3.shapeColor = "yellow";
  }
  else{
    movingRect.shapeColor = "green";
    rect3.shapeColor = "green";
  }

  if(isTouching2(movingRect,rect4)){
    movingRect.shapeColor = "yellow";
    rect4.shapeColor = "yellow";
  }
  else{
    movingRect.shapeColor = "green";
    rect4.shapeColor = "green";
  }

  drawSprites();
}