var gameState = "play"
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup, bananaGroup
var score = 0
var monkey2, monkeyImage, monkey2Image, jungleImage

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  monkey2Image = loadImage("monkey2.png")
  monkeyImage = loadImage("Monkey.png")
  jungleImage= loadImage("jungle.jpg");
}



function setup() {
  createCanvas(600,600);
 // background=createSprite(0,0,600,600);
  //background.scale = 2
  
  
  ground=createSprite(300,590,1200,30)
  ground.velocityX=-5;
  
  monkey1 = createSprite(75,500,20,20);
  monkey1.addAnimation("running",monkey_running)
  monkey1.scale = 0.2;
  
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
  
  
}


function draw() {
 background("white");
  if(gameState === "play"){
     Obstacle();
      banana();
    if(ground.x<0){
      ground.x=ground.width/2;
      
    }
    
  
      monkey1.collide(ground);
    
      
    
    
  if(keyDown("space") ){
    monkey1.velocityY = -12;
  }
   
    monkey1.velocityY=monkey1.velocityY + 0.8;
  
  if(monkey1.isTouching(bananaGroup)){
    bananaGroup.destroyEach();
    
   

}
  if(monkey1.isTouching(obstacleGroup)){
     gameState="end"
   
  }
    
  
    drawSprites();
    
    stroke("white");
    textSize(20);
    fill("white");
    text("Score: "+ score, 500,50);

}
  if(gameState === "end"){
  text("game over",300,300)
  bananaGroup.destroyEach();
  obstacleGroup.destroyEach();
  ground.velocityX=0;
  }

} 

function banana() {
  if(frameCount%150 === 0)
  {
   bannana=createSprite(600,Math.round(random(200,400)),50,50);
    bannana.addImage( bananaImage );
    bannana.velocityX=-10;
    bannana.scale=0.2;
    bannana.lifetime=300;
    bananaGroup.add(bannana);
    
    
  
  }
  
}

function Obstacle() {
  if(frameCount%250 === 0){
      obstacle=createSprite(600,550,50,50);
    obstacle.addImage(obstacleImage );
obstacle.velocityX=-10;
   obstacle.scale=0.2;
  obstacle.lifetime=300;
 obstacleGroup.add(obstacle);
    
    
  
    }
  
}



