var bg,bg2,form,system,code,security;
var score=0;
var time=20;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
  text("00 : " + time, width-100, 50);

  if(score === 3) {
    clear()
    background(bg2)
    fill("white")
    stroke("black");
    strokeWeight(4);
    textSize(30);
    text(`You: YAYYYYYYY!!!!!! TREASURE UNLOCKED.
Guard: Well, I must say! I am impressed...
Great job seeker of treasure!`,100, 200);
  }
  drawSprites();

  if(frameCount % 35 === 0 && time != 0) {
    timeChanger();
  }
  if(time === 0 && score != 3) {
    time=0;
    timer(); 
    security.button1.hide();
    security.button2.hide();
    security.button3.hide();
    security.access1.hide();
    security.access2.hide();
    security.access3.hide();
  }
}

function timer()
{       background("white");
        push();
        fill("black");
        text(`Time's up, my friend.... Do not take time for granted.
You couldn't prove your intelligence, could you? 
Well, what are you waiting for? Reload the page to restart the game.`, 100, height/3);
        pop();     
    
}

function timeChanger() {
  setTimeout(()=>{
    time -= 1;
  }, 1000);
}