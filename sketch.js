
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
  createCanvas(1200, 400);
  
  background("grey")


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1 = new ground(600,height,1200,20)
paper1 = new Paper(150,200,70)
box1 = new Box(900,300,20,200)
box2 = new Box(950,300,200,20)
box3 = new Box(1000,300,20,200)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground1.display();
  paper1.display();
  box1.display();
  box2.display();
  box3.display();

  //if(keyDown(UP_ARROW)){
	//  Matter.Body.applyForce(paperObject.body,paperObject.body,{x:85,y:-85})
  //}
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW ){
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	   Matter.Body.applyForce(paper1.body,paper1.body.position,{x:230,y:-250})

   
	 }
   
   }


