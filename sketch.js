var sound;
var squares = [];

function preload(){
  sound = loadSound("sound.flac");
}
function setup() {
  createCanvas(400, 400);
  sound.loop();
  for(var i = 0; i < 7; i++){
    squares[i] = new Square(10+(i*50), 40);
  }
  
  for(var i = 7; i < 14; i++){
    squares[i] = new Square(10+((i-7)*50), 250);
  }
  
}

function draw() {
  background(500,200,0);
  makeBox();
  
  for(i = 0; i < 7; i ++){
    squares[i].move();
    squares[i].display();
  }
   for(var i = 7; i < 14; i++){
    squares[i].move();
    squares[i].display();
     
  }
  
}

function makeBox(){
  fill('aqua');
  strokeWeight(10);
  rect(100,150, 200,50);
  
  textSize(30);
  fill(0,0,0);
  textAlign(CENTER);
  text('My first p5js!', 200, 180);
}

class Square{

  constructor(X, Y){
    this.X = X;
    this.inX = X;
    this.speedX = .32;
    this.Y = Y;
    this.size = 30;
    this.dir = true;
    this.count = 0;
  
  }
  display(){
    fill('red');
    strokeWeight(2);
    square(this.X, this.Y, this.size);
  }
  move(){
    if(this.X-this.inX < 50 && this.X-this.inX >= 0){
      this.X +=this.speedX;
    }
    else{
      this.speedX = -this.speedX;
      this.X += this.speedX;
    }
  }
}
