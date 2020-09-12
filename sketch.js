var dog, happydog, ndog;
var food, foodstock;
var database;
function preload()
{
  //load images here
  ndog=loadImage("images/Dog.png");
  happydog=loadImage("images/Dog.png");
}

function setup() {
  createCanvas(800, 700);
  food=database.ref('food');
  foodstock.on("value",readStock);
  dog= createSprite(200,350,100,100);
  dog.addImage("normal", ndog);
}


function draw() {  
  background(46, 139, 87);
if(keyWentDown(UP_ARROW)){
  writeStock(food);
  dog.addImage("normal",happydog);
}
dog.display();
  drawSprites();
  //add styles here
text("Press up arrow to feed", 50,100);
}
function readStock(data){
  food=data.val();

}
function writeStock(x){
  database.ref('/').update({food:x})
}



