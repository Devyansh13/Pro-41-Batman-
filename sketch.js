var d1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function preload(){
    
}

function setup(){
    createCanvas(500,600);
    engine = Engine.create();
    world = engine.world;
    
    d1=new Drop(100,100,20);
}

function draw(){
    background(0);
    d1.display();
    d1.velocityY=5;
}   

