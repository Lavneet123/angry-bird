const Engine= Matter.Engine;
const Bodies= Matter.Bodies;
const World= Matter.World;


function setup() 
{
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options =
   {
      isStatic: true
  }
  
  ground = Bodies.rectangle(100,390,500,20,ground_options) 
  World.add(world,ground)
  console.log(ground.position.x)

  var ball_options =
   {
      restitution:1.0
  }
  ball = Bodies.circle(200,100,20,ball_options)
  World.add(world,ball)
box1 = new Box(200,350,50,50)
box2 = new Box(200,300,50,50)
box3 = new Box(200,250,50,50)
box4 = new Box(200,200,50,50)
box5 = new Box(200,150,50,50)
}

function draw()
 {
  background("yellow");  
  Engine.update(engine)
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y, 500, 20);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  
  
}





