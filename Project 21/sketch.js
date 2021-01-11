function setup() {
  createCanvas(800,400);
 
  box = createSprite(random(60,700), 370, 50, 50);
  box.shapeColor = 'white';


  surface1 = createSprite(130,420,150,70);
  surface1.shapeColor = 'blue';

  surface2 = createSprite(290,420,150,70);
  surface2.shapeColor = 'green';

  surface3 = createSprite(450,420,150,70);
  surface3.shapeColor = 'red';

  surface4 = createSprite(610,420,150,70);
  surface4.shapeColor = 'yellow';



}

function draw() {
  background(225);  

if(surface1.isTouching(box)){
  box.shapeColor = 'blue';

}

if(surface2.isTouching(box)){
  box.shapeColor = 'green';
}
  
if(surface3.isTouching(box)){
  box.shapeColor = 'red';

}

if(surface4.isTouching(box)){
  box.shapeColor = 'yellow';
}
  drawSprites();
}