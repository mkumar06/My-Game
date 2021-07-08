var shark;
var sharkImg;
var backgroundImg;

function preload() {
  sharkImg = loadImage("SharkIMG.png");
  backgroundImg = loadImage("BackgroundIMG.jpg");
}


function setup() {
  createCanvas(800, 1000);

  backgroundSprite = createSprite(400, 500, 600, 800);
  backgroundSprite.addImage("BackgroundIMG.jpg", backgroundImg);
  backgroundSprite.scale = 1.8

  shark = createSprite(125, 400, 10, 10);
  shark.addImage("SharkIMG.png", sharkImg);
  shark.scale = 0.4;
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

//Spawn fishes and plastic
//Score when eating fishes = +1, Score when eating plastic = -5 w/ 3 lives
//Key Up and Down
//Increase speed in intervals