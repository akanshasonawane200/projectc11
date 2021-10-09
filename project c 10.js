var b  , seaImage, scene, ship1, ship2, score=0, opscore=0, speed=5

function preload(){
  
  //shipImg1 =  loadImage("ship-1.png","ship-1,png","ship-2.png","ship-1.png");
  //shipImg1=  loadImage("ship-1","ship-1","ship-2","ship-1");
  //shipImg1= = loadImage("1.png","2.png","3.png","4.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  scene = createSprite(200,200);
  scene.addImage(b)
  ship = createSprite(200,345,200,345)
  ship.addImage(ballImage)
  ship.scale=0.1

  a1ien1 = createSprite(200,280,10,10)
  alien2 = createSprite(200,170,10,10)
  alien3 = createSprite(200,50,10,10)
  alien1.addImage(enemyImage)
  alien2.addImage(enemyImage)
  alien3.addImage(enemyImage)

  ship1.scale=0.3
  ship2.scale=0.3
  


  
   score = 0    
}

function draw() {
 background(0);
 createEdgeSprites()

 ship1.x=ship1.x+speed
 ship2.x=ship2.x-speed
 ship3.x=ship3.x+speed

 if(ship1.x<0 || ship2.x>width)
 {
   speed=speed*-1
 }



if(keyDown(UP_ARROW)){
  ball.y=ball.y-3
}

if(keyDown(DOWN_ARROW)){
  ball.y=ball.y+3
}

if(keyDown(LEFT_ARROW)){
  ball.x=ball.x-3
}

if(keyDown(RIGHT_ARROW)){
  ball.x=ball.x+3
}

if(ball.isTouching(ship1)|| ball.isTouching(ship2)|| ball.isTouching(ship3)){
  //sea.x=3;
  ball.y=350
  opscore = opscore+1
}
if(ball.y<0){
  ball.x=200
  ball.y=345
  score=score+1
}


drawSprites();
textSize(15)
  fill("Yellow")
  text("Humans:"+score,328,30);
  

textSize(15)
  fill("Yellow")
  text("Aliens:"+opscore,5,30);
  

    

}



