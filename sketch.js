
var GAMEOVER,score=0,gameState="play";
function preload(){
  heroImage = loadImage("sprite_0-1.png");
  backgroundImage = loadImage("space3.jpg");
  chickenImage = loadImage("sprite_0-2.png");
  gun =loadSound("Bullet (1).mp3");
}
function setup(){
createCanvas(windowWidth,windowHeight);  
background1 = createSprite(200, 200);
background1.addImage(backgroundImage);
background1.scale = 10;
hero = createSprite(200, height-30);
hero.addImage(heroImage);
hero.scale = 0.5;
cGroup = createGroup();
bulletGroup = createGroup();
}
function draw() {
  background(0);
  drawSprites();
  if(gameState==="play"){

  chicken();
  if (cGroup.isTouching(bulletGroup)) {
    bulletGroup.destroyEach();
    cGroup.destroyEach();
    score=score+5;
  }
  if (keyDown("left")) {
    hero.x = hero.x-6;
  }
  if (keyDown("right")) {
    hero.x=hero.x +6;
  }
  if (keyDown("space")) {
    bullets();
    gun.play();
  }
  if (hero.isTouching(cGroup)) {
   gameState="end";
  }
  }
  else if(gameState==="end"){
     bulletGroup.destroyEach();
    cGroup.destroyEach();
    hero.destroy();
    fill("red");
    textSize(100);
    text("GAME OVER",200,height/2);
  }
  
  fill("white");
  textSize(20);
  text("SCORE   "+score,100,50);
}
function bullets() {
  var bullet = createSprite(196, 305, 7, 3);
  bullet.shapeColor = "red";
  bulletGroup.add(bullet);
  bullet.velocityY = -4;
  bullet.x = hero.x-1;
  bullet.y = hero.y+1;
  
}
function chicken() {
  if (frameCount%150===0) {
var c = createSprite(Math.round(random(50,width-50)),-10);
c.addImage(chickenImage);
c.scale = 0.4;
c.velocityY = +4;
cGroup.add(c);
c.setCollider("circle", 0, 0, 70);
  
  }
}

