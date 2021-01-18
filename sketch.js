const Engine = Matter.Engine;
 const World= Matter.World;
 const Bodies= Matter.Bodies;


var ground,ball
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  var ball_options={
    restitution: 1.0
  }
   ball=Bodies.circle(200,100,20,ball_options)
   World.add(world,ball)
  
  var ground_options={ isStatic: true } 
  ground= Bodies.rectangle(200,390,50,50,ground_options);
   World.add(world,ground)
}

function draw() {
  background("black");
   Engine.update(engine);
    rectMode(CENTER); 
    rect(200,200,50,50);
     rect(ground.position.x,ground.position.y,800,20);

ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);

  drawSprites();
}