
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint

var tree;
var ground;
var stone;
var mango1,mango2,mango3,mango4,mango5,mango6;
var boy,boyimg;


function preload()
{

	boyimg=loadImage('boy.png')
	
}

function setup() {
	createCanvas(1200, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	boy=createSprite(200,428,50,50);
	boy.addImage('boy',boyimg);
	boy.scale=0.1;

	ground=new Ground(600,490,1200,20);
	
	stone=new Stone(100,480,20);

	mango1=new Mango(1000,200,20);
	mango2=new Mango(900,150,20);
	mango3=new Mango(1000,100,20);
	mango4=new Mango(1100,220,20);
	mango5=new Mango(1050,180,20);
	mango6=new Mango(950,220,20);
	
	tree=new Tree();
	rope= new Rope(stone.body,{x:147,y:380});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('white');


	tree.display();
	 
	ground.display();

	stone.display();
	  
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	
	rope.display();

	detectcollision(mango1.body,stone.body);
	detectcollision(mango2.body,stone.body);
	detectcollision(mango3.body,stone.body);
	detectcollision(mango4.body,stone.body);
	detectcollision(mango5.body,stone.body);
	detectcollision(mango6.body,stone.body);
  
  drawSprites();


 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rope.fly();
}

function detectcollision(stone,mango){
  mangopos=mango.position;
  stonepos=stone.position;

  var distance=dist(stonepos.x,stonepos.y,mangopos.x,mangopos.y)
  if (distance<=mango.r+stone.r){
	  Matter.body.setStatic(mango.body,false)
  }

}


