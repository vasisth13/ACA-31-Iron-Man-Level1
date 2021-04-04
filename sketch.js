
var bg, backgroundImg;
var ironman,ironman_hit,ground;
function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironman=loadImage("images/iron.png")
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  bg.scale=2;
  ironman_hit=createSprite(200,500,20,50);
  ironman_hit.addImage("running",ironman);
  ironman_hit.scale=0.3;
  ground=createSprite(200,500,400,10);
  ground.visible=false;
}

function draw() {
    
  
  
    if(keyDown("up")){
      ironman_hit.velocityY=-10
    }
    if(keyDown("left")){
      ironman_hit.x=ironman_hit.x -5
    }
    if(keyDown("right")){
      ironman_hit.x=ironman_hit.x +5
    }

    ironman_hit.velocityY=ironman_hit.velocityY +0.5
    ironman_hit.collide(ground);
    drawSprites();

   
}

