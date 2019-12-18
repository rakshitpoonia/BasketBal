const Bodies=Matter.Bodies;
const World=Matter.World;
const Engine=Matter.Engine;
const Constraint=Matter.Constraint;

var engine,world,ball,ground,launcher,stand,ball,background,basket,ball1,ball2,ball3,ball4,ball5,ball6,ball7,ball8,ball9;
function preload(){

ball=loadImage("basketball.png");

backgroundimg=loadImage("background.png");
}
function setup() {
  createCanvas(displayWidth-20,displayHeight-20);
  engine=Engine.create();
  world=engine.world;
   ball=new Ball(displayWidth-200,displayHeight-400);
   ground=new Ground(0,displayHeight-250);
   launcher=new Launcher(ball.body,{x:displayWidth-200,y:displayHeight-400});
   
   basket=new Basket(displayWidth-1000,displayHeight-700);
   console.log(this.basket);
   ball1=createSprite(displayWidth-150,displayHeight-196,50,50);
   ball2=createSprite(displayWidth-230,displayHeight-196,50,50);
   ball3=createSprite(displayWidth-310,displayHeight-196,50,50);
   ball4=createSprite(displayWidth-390,displayHeight-196,50,50);
   ball5=createSprite(displayWidth-470,displayHeight-196,50,50);
   ball6=createSprite(displayWidth-550,displayHeight-196,50,50);
   ball7=createSprite(displayWidth-630,displayHeight-196,50,50);
   ball8=createSprite(displayWidth-710,displayHeight-196,50,50);
   ball9=createSprite(displayWidth-790,displayHeight-196,50,50);

}

function draw() {
  background(backgroundimg);

  Engine.update(engine);  
  ball.display();
  ground.display();
  basket.display();
  launcher.display();
 
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  launcher.fly();
} 
function keyPressed(){
  if(keyCode === 32 ){
    launcher.attach(ball.body);  
      Matter.Body.setPosition(ball.body, {x:displayWidth-200,y:displayHeight-400}); 

  }
 

}



