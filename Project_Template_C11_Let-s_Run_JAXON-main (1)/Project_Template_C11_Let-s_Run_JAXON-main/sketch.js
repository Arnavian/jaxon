
function preload(){
  //pre-load images
  var groundAnimation = loadImage("path.png")
  var runnerAnimation  = loadAnimation("Runner-1.png","Runner-2.png")
  var bombAnimation = loadImage("bomb.png")
  var coinAnimation = loadImage("coin.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here 
  var ground = createSprite(400,400,400,400)
  var runner = createSprite(100,200,50,50)
  ground.scale = 1.2;
}

function gfxGeneration(){
//create & animate graphics here
if (frameCount % 60 === 0){
var bomb = createSprite(200,200,25,25)
bomb.addImage(bombAnimation)
bomb.y = runner.y-100
}

if (ground.y < 0){
var ground = ground.width/2
var coin = createSprite(200,200,25,25)
coin.addImage(coinAnimation)
coin.x = runner.x-100
coin.y = runner.y-50
}
}


runner.collide(edges)


//object velocities 
coin.velocityY = 20
bomb.velocityY = 20
ground.velocityY = 20


if (ground.y < 0||runner.x < 75){
coin.x = runner.x+100
coin.y = runner.y-100
}

//ground and runner animations
ground.addAnimation(groundAnimation)
runner.addAnimation(runnerAnimation)

//runner controls
runner.y = Mouse.y

function draw() {
  createEdgeSprites()
  gfxGeneration()
  background(0)
  drawSprites()
}
