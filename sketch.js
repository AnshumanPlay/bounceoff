var moving,fixed;
function setup() {
  createCanvas(800,400);
 fixed= createSprite(300, 200, 50, 50);
 moving=createSprite(300,150,50,50)
 moving.velocityY=2
fixed.velocityY=-2
}

function draw() {
  background(255,255,255);  


  
bounceoff(moving,fixed);
  drawSprites();
}
