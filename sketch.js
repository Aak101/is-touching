var fr, mr


function setup() {
  createCanvas(800,400);
  fr = createSprite(400, 200, 50, 80);
  mr = createSprite(500, 200, 80, 50);

  fr.shapeColor = 'red'
  mr.shapeColor = 'red'
 
  
}

function draw() {
  background(255,255,255);  

mr.x = World.mouseX
mr.y = World.mouseY

if (mr.x - fr.x <= mr.width/2 + fr.width/2 &&
  mr.y - fr.y <= mr.width/2 + fr.width/2 &&
  fr.y - mr.y <= mr.width/2 + fr.width/2 &&
  fr.x - mr.x <= mr.width/2 + fr.width/2
  ){

  fr.shapeColor = 'green'
  mr.shapeColor = 'green'

}
else {

  fr.shapeColor = 'red'
  mr.shapeColor = 'red'

}

  drawSprites();
}