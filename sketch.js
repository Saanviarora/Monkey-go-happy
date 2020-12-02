
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var invisibleGroup;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}
function setup(){
  createCanvas(500,500)
  monkey =  createSprite(150,390,20,50)
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.2
  
  ground = createSprite(200,450,1000,10)
  ground.velocityX = -4;
  ground.x = ground.width /2;
 
  ground.shapeColor= "olivedrab"
  console.log(ground.x)
  
  invisibleGroup= createSprite(600,490,20,50)
  invisibleGroup.visible= false;
}




  

  



function draw() {
background(500)
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
   ground.velocityX=-5;
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
      
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
    monkey.collide(ground) 
  
  var survivalTime=0;
  stroke("black")
  textSize(20);
  fill("black")
  survivalTime= Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100,50)
 
  
drawSprites()
  bananaA();
  obstacleA();
  
}
function bananaA(){
  if(World.frameCount%80==0){
   banana = createSprite(200,200,10,10);
    banana.y = Math.round(random(20,320));
    banana.addImage(bananaImage)
    banana.scale=0.1
    banana.velocityX = -3;
    banana.lifetime=200
    
}
}
function obstacleA(){
  
    if(World.frameCount%300==0){
      obstacle = createSprite(600,410,10,10)
      obstacle.addImage(obstacleImage)
      obstacle.scale=0.2
      obstacle.velocityX=-3
      obstacle.lifetime=200;
    
  }
}





