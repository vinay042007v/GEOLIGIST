const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, stone1, rubber1, rubber2, rubber3, rubber4, rubber5,
iron1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    stone1 = new Stone(300,500,50,120);
    rubber1 = new Rubber(700,500,10);
    rubber2 = new Rubber(715,500,10);
    rubber3 = new Rubber(730,500,10);
    rubber4 = new Rubber(745,500,10);
    rubber5 = new Rubber(760,500,10);
    
    iron1 = new Iron(950,400,100,100);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone1.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    iron1.display();
}