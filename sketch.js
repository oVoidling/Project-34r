const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var boatImg
var bg_Img;
var blower;
var boat
var options = {
  isStatic: false,
}
var ground

function preload(){
  boatImg = loadImage("boat.png");
  bg_Img = loadImage("background.png");
}

function setup() {
  createCanvas(1000,700);
 
  frameRate(80);

  

  engine = Engine.create();
  world = engine.world;
  
  

  blower = createImg('blower.png');
  blower.position(10,250);
  blower.size(150,100);
  blower.mouseClicked(airblow);

  boat = Bodies.rectangle(100,500,100,100,options);
  World.add(world,boat);

  ground = Bodies.rectangle(500,600,1200,20,{isStatic:true});
  World.add(world,ground);

 

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  image(bg_Img,0,0,1200,700);
  imageMode(CENTER);
  image(boatImg,boat.position.x,boat.position.y,100,100);
  rectMode(CENTER);
  Engine.update(engine);
 

  drawSprites();   
}

function airblow()
{
  Matter.Body.applyForce(boat,{x:0,y:0},{x:0.1,y:0});

}




