function bounceoff(moving,fixed){
    if(moving.x-fixed.x<fixed.width/2+moving.width/2 && fixed.x-moving.x<fixed.width/2+moving.width/2){
    moving.velocityX=moving.velocityX*(-1)
      moving.shapeColor="green"
      fixed.shapeColor="green"
    fixed.velocityX=fixed.velocityX*(-1)
    }
    if(moving.y-fixed.y<fixed.height/2+moving.height/2 && fixed.y-moving.y<fixed.height/2+moving.height/2){
  moving.velocityY=moving.velocityY*(-1)
  fixed.velocityY=fixed.velocityY*(-1)
    }
  }