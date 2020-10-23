var car,wall;
var speed,weight;

function setup() {
  createCanvas(windowWidth,windowHeight);
  speed=random(55,90);
  weight=random(400,150);

  //creating the sprites for car and wall
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);
}

function draw() {
  background("black");  

  car.velocityX = speed;

  car.collide(wall,calculate);
  drawSprites();
}
function calculate(){
  var deformation = (0.5*weight*speed*speed)/22500;
  if(deformation<100){
    wall.shapeColor = "green";
  }else if(deformation<180&&deformation>100){
    wall.shapeColor = "yellow"
  }else{
    wall.shapeColor = "red";
  }

}