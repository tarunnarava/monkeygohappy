
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivaltime=0;


function preload(){
  
  monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {

  monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;


  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;  

  
 obstacleGroup=new Group();
  foodGroup=new Group();
}



function draw() {
background("lightblue");

  text("survivaltime:"+survivaltime,100,50);  
survivaltime=survivaltime+Math.round(getFrameRate()/60);
  
  if(ground.x<0){
ground.x=ground.width/2;
  }
  
  if (keyDown("space")){
    monkey.velocityY=-12;
  }
  
  monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(ground);
  
  if (obstacleGroup.isTouching(monkey)){
    ground.velocityX=0;
    monkey.velocityY=0;
    obstacleGroup.setVelocityXEach(0);
    foodGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
 foodGroup.setLifetimeEach(-1);
    survivaltime=0;
  }
  
  obstacle();
 food();
  drawSprites();
}






function food(){
  if (frameCount%80===0){
    
    banana=createSprite(600,200,15,15);
    banana.velocityX=-5;
 banana.y=random(120,200);
 banana.addImage(bananaImage);
banana.scale=0.1;
  banana.lifetime=300;
  foodGroup.add(banana);
  }
 
}

function obstacle(){
  if (frameCount%300===0){
    
    stone=createSprite(800,320,10,40);
    stone.velocityX=-4;
    stone.addImage(obstaceImage);
    stone.scale=0.20;
    stone.lifetime=300;
    obstacleGroup.add(stone);
  }
  
  
}