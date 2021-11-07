var player,playerImg,playerGun;
var bg;
var zombie,zombieImg;
var heart1 , heart2,heart3
var bullets=120
var GameState="fight"

function preload() {

  bg=loadImage("self design game haloween.jpg");
  playerImg=loadImage("images/shooter_2.png");
  playerGun=loadImage("images/shooter_3.png");
  zombieImg=loadImage("images/zombie.png");
  heart1=loadImage("images/heart_1.png");
  heart2=loadImage("images/heart_2.png");
  heart3=loadImage("images/heart_3.png");
}

function setup() {

  createCanvas(windowWidth, windowHeight);

  player=createSprite(160,550,70,70);
  player.addImage(playerImg);
  player.scale=0.5
  //player.debug=true
  player.setCollider("rectangle",0,0,200,400);

  zombieGroup=new Group ()
  bulletGroup=new Group ()

 h1=createSprite(1000,40,30,10)
 h1.addImage(heart1);
 h1.scale=0.4

 h2=createSprite(1150,40,10,10)
 h2.addImage(heart2);
 h2.scale=0.4

 h3=createSprite(1300,40,10,10)
 h3.addImage(heart3);
 h3.scale=0.4
}


function draw() {

  background(bg);
   if(GameState==="fight"){
   
    

   

  if(keyDown("W")){

    player.y=player.y-10

  }

  if(keyDown("S")){
    player.y=player.y+10
  }
  if(keyDown("space")){
player.addImage(playerGun);

  }
  else if(keyWentUp("space")){
   player.addImage(playerImg)
  }

  if(zombieGroup.isTouching(bulletGroup)){
    for(i=0;i<zombieGroup.length;i++){
      if(zombieGroup[i].isTouching(bulletGroup)){
        zombieGroup[i].destroy();
        bulletGroup.destroyEach();
      }
    }
    
  }
  if(keyWentDown("space")){
    bullet=createSprite(player.x,player.y-40,10,10);
    bullet.velocityX=20
    player.addImage(playerGun);
    bullet.shapeColor="brown"
    bulletGroup.add(bullet)
    bullets=bullet-2
  }

  else if(keyWentUp("space")){
    player.addImage(playerImg);
  }
  enimy();

   }

  drawSprites();

  if(GameState==="lost"){
    textSize(100);
    fill("red");
    text("GAME OVER",700,500);
    zombieGroup.destroyEach()
    player.destroy()
  }

}

function enimy() {

  if(frameCount%60===0){
    zombie=createSprite(random(1000,1500),random(100,500),70,70);
    zombie.addImage(zombieImg);
    zombie.scale=0.3
  //zombie.debug=true
  zombie.setCollider("rectangle",0,0,400,950)
    zombie.velocityX=-5

    zombieGroup.add(zombie)

  }

 
  
}
