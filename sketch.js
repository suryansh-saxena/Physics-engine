const World= Matter.World
const Engine=Matter.Engine
const Bodies=Matter.Bodies


var engine,world
var ground,ball

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world=engine.world;

var options={

    isStatic:true

}

ground= Bodies.rectangle(200,380,400,60,options)
World.add(world,ground)
var ball_options = {
  restitution:1
}
ball = Bodies.circle(200,200,20,ball_options)
World.add(world,ball)
}

function draw() {
  background(0);  
  Engine.update(engine)

rectMode(CENTER)
fill("green");
rect(ground.position.x,ground.position.y,400,60);

ellipseMode(CENTER)
fill("white")
ellipse(ball.position.x,ball.position.y,20,20)

  drawSprites();
}