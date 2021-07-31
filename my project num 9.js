

function setup() {
  createCanvas(400,400);


}

function draw() 
{
if(keyIsdown(DOWN_ARROW)){
  background('pink');
}

if(keyIsdown(UP_ARROW)){
background('purple');
}

if(keyIsdown(RIGHT_ARROW)){
  background('blue')
}

if(keyIsdown(LEFT_ARROW)){
  background('green')
}


  background(30);
drawSprites()
}




