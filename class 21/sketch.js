var fixedRect, movingRect;
var G1, G2, G3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  G1 = createSprite(200,200,50,50)
  G1.shapeColor = "red"
  G2 = createSprite(400,200,50,50)
  G2.shapeColor = "red"
  G3 = createSprite(800,200,50,50)
  G3.shapeColor = "red"
} 

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if (ifTouching(fixedRect, movingRect)){
  movingRect.shapeColor = "orange"
  fixedRect.shapeColor = "orange"
  }
  else{
    movingRect.shapeColor = "green"
    fixedRect.shapeColor = "green"
  }
  if (ifTouching(G1, movingRect)){
    movingRect.shapeColor = "orange"
    G1.shapeColor = "orange"
    }
    else{
      movingRect.shapeColor = "green"
      G1.shapeColor = "green"
    }
    if (ifTouching(G2, movingRect)){
      movingRect.shapeColor = "orange"
      G2.shapeColor = "orange"
      }
      else{
        movingRect.shapeColor = "green"
        G2.shapeColor = "green"
      }
      if (ifTouching(G3, movingRect)){
        movingRect.shapeColor = "orange"
        G3.shapeColor = "orange"
        }
        else{
          movingRect.shapeColor = "green"
          G3.shapeColor = "green"
        }
  
  drawSprites();

 }
