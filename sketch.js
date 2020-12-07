
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject,bobObject2,bobObject3,bobObject4,bobObject5;
var roofObject;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	bobObject = new Bob(450,600,25);
	bobObject2 = new Bob(500,600,25);
	bobObject3 = new Bob(550,600,25);
	bobObject4 = new Bob(600,600,25);
	bobObject5 = new Bob(650,600,25);
	roof = new Roof(550,300,100,10);
	
	rope1 = new Rope(bobObject.bob,roof.body,-100,0);
	rope2 = new Rope(bobObject2.bob,roof.body,-50,0);
	rope3 = new Rope(bobObject3.bob,roof.body,0,0)
	rope4 = new Rope(bobObject4.bob,roof.body,50,0)
	rope5 = new Rope(bobObject5.bob,roof.body,100,0)
	
	


	


	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  bobObject.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  rope1.display();
  rope2.display();
  
  rope3.display();
  
  rope4.display();
  rope5.display();
  
  
  
 

  drawSprites();
  
 
}

function keyPressed() {
	if(keyCode=== UP_ARROW) {
		Matter.Body.applyForce(bobObject.bob,bobObject.bob.position,{x:-50,y:50});
	}
}
