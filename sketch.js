
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var dustbin1, dustbin2, dustbin3;
var ground;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,height,1200,80);
	dustbin1 = new Dustbin(600, 650, 20, 200);
	dustbin2 = new Dustbin(500, 610, 100, 20);
	dustbin3 = new Dustbin(700, 610, 100, 20);
	paper = new Paper(200, 610, 10,20);
	paper.shapeColor = color(0, 225, 225); 

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
}



