var bullet,wall;
var speed,weight,thickness;
var deformation;

function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83);

  bullet=createSprite(50, 200, 50, 50);

  bullet.velocityX=speed;

  bullet.shapeColor=color(255)

  wall=createSprite(1000,200,thickness,height/2);

  wall.shapecolor=color("white")
  
}

function draw() {
  background(0);
  
  if(hasCollided(bullet,wall)){
    
    bullet.velocityX=0;
    var damage =0.5 * weight * speed* speed* speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor="red"
    }

    if(damage<10){
      wall.shapeColor="green"
    }

  }
  drawSprites();
  hasCollided();
}

function hasCollided(lBullet,lWall){
  bulletRightEdge=lbullet.x +lBullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}