// You could have multiple flags like: start, launch to indicate the state of the game.

 const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

// The above line creates different constant variables for Engine, World, Bodies etc.
var engine,world;

var ground,base,tanker,shooter;

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(400,400);
    
    engine = Engine.create();
    world = engine.world;

    
    base = new Tanker(50,340,20,40);
    tanker= new Tanker(50,370,70,20);
    ground = new Ground(200,390,400,30);
    shooter = new Tanker(55,330,50,20);

    
    
  
}

function draw() {
// Remember to update the Matter Engine and set the background.
    background(0);    
    Engine.update(engine);
    
    shooter.display(); 
    tanker.display();
    base.display();
    ground.display();
    
   
}

