const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function preload() {
   polygonimg = loadImage ("polygon.png") 
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

   // create 2 stand  - 2 objects of ground clas
   stand1 = new Ground(400, 280, 300, 10)
   stand2 = new Ground(900, 200, 230, 10)

   // create multiple objects of Block class
   block8 = new Block(330,235,30,40);
   block9 = new Block(360,235,30,40);
   block10 = new Block(390,235,30,40);
   block11 = new Block(420,235,30,40);
   block12 = new Block(450,235,30,40);
   block20 = new Block(480,235,30,40);
   block21 = new Block(300,235,30,40);
   block13 = new Block(360,195,30,40);
   block14 = new Block(390,195,30,40);
   block15 = new Block(420,195,30,40);
   block22 = new Block(450,195,30,40);
   block23 = new Block(330,195,30,40);
   block16 = new Block(390,155,30,40);
   block24 = new Block(420,155,30,40);
   block25 = new Block(360,155,30,40);
   block26 = new Block(390,115,30,40);
   block17 = new Block(900,160,30,40);
   block18 = new Block(930,160,30,40);
   block19 = new Block(870,160,30,40);
   block27 = new Block(960,160,30,40);
   block28 = new Block(840,160,30,40);
   block29 = new Block(900,120,30,40);
   block30 = new Block(870,120,30,40);
   block31 = new Block(930,120,30,40);
   block32 = new Block(900,80,30,40);

   polygon = Bodies.circle(50,200,20)
   World.add(world,polygon)

   slingShot = new Chain(this.polygon,{x:100,y:200})
   // add text
}

function draw(){
    background("red");
    Engine.update(engine);
    
    textSize(18)
    text("drag the Hexagonal stone and release it,to lauch it toward the blocks", 200,100)

    ground.display();
    stand1.display()
    stand2.display();
    block8.display();
    block9.display();
    block10.display();
    block12.display();
    block11.display();
    block13.display();
    block15.display();
    block14.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();
    block31.display();
    block32.display();
    imageMode (CENTER)
    image(polygonimg,polygon.position.x,polygon.position.y,40,40)
    slingShot.display();
}

function mouseDragged(){
Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

