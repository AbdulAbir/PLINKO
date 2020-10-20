  const Engine = Matter.Engine;
  const World = Matter.World;
  const Events = Matter.Events;
  const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;


function setup() {
  createCanvas(482,750);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,2000,20);
  bodder1 = new Ground(480,height,5,2000);
  bodder2 = new Ground(0,height,5,2000);
  bottom = new Division(0,height-10,1000,10);

   for (var k = 0; k <=width; k = k + 80) 
   {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
   }

   for (var j = 40; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 15; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 40; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 15; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

}

function draw()
{
  background(0); 

  Engine.update(engine);

 for (var i = 0; i < plinkos.length; i++) 
  {
     
   plinkos[i].display();
     
  }

    if(frameCount%60===0)
    {
     particles.push(new Particle(random(width/2-10, width/2+10), 10,10));
     
    }

  for (var j = 0; j < particles.length; j++) 
    {
   
     particles[j].display();
    }

  for (var k = 0; k < divisions.length; k++) 
  {
   
    divisions[k].display();
  }

  bottom.display();
  bodder1.display();
  bodder2.display();
  ground.display();
  
 
}