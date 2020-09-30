
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



var roof1,bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof1 = new Roof(400,40,800,20);

	bob1 = new Bob(400,580);
	bob2 = new Bob(425,580);
	bob3 = new Bob(450,580);
	bob4 = new Bob(475,580);
	bob5 = new Bob(500,580);

	rope1 = new Rope(bob1.body,roof1.body,-100,0);    
	rope2 = new Rope(bob2.body,roof1.body,-50,0);
	rope3 = new Rope(bob3.body,roof1.body,0,0);
	rope4 = new Rope(bob4.body,roof1.body,50,0);
	rope5 = new Rope(bob5.body,roof1.body,100,0);


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  background(255);
  
  
  Engine.update(engine);

  roof1.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

 

 
  drawSprites();
 
}

function keyPressed(){

	
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-40,y:400});
}

}



