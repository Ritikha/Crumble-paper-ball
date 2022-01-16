
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
function preload()
{
	
}

function setup() {
	createCanvas(2000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options={
     isStatic : false,
	 restitution:0.3,
	 friction:0,
	 density:1.2

 }
ball = Bodies.circle(50,10,50,ball_options)
World.add(world,ball)
groundObj = new ground (width/2,670,width,20)
leftSide = new ground (1100,600,20,120)
rigthSide = new ground (1500,600,20,120)	

Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,50,50)
 groundObj.display()
 leftSide.display()
 rigthSide.display()
 

  drawSprites();
 
}

function keyPressed()
{
   if (keyCode===UP_ARROW) {
	   Matter.Body.applyForce(ball,ball.position,{x:50,y:-150})
   }

	
}

