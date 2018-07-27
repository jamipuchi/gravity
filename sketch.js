ybird = 300
pipes = []
gravity = 0
score = 0
playing = true
gi=1.5
sp = 8

function setup() {
  createCanvas(800, 400);
  for (i = 0; i<4; i++){
    pipes.push({
      h : random(height/2)+height/4,
      x : width*1.5 + i * width/1.8,
      r: random()
    })
  }
}

function draw() {
  if (playing){

     background(220);

    for(i=0; i<pipes.length; i++){
      if (pipes[i].r<0.5){
        rect(pipes[i].x, pipes[i].h+height/4, 60, 500)
        if(pipes[i].x < width/4+10 && pipes[i].x+80>=width/4-10 && pipes[i].h+height/4<=ybird) playing = false
      }else{
        rect(pipes[i].x, pipes[i].h-height/4, 60, -500)
        if(pipes[i].x < width/4+10 && pipes[i].x+80>=width/4-10 && pipes[i].h-height/4>ybird) playing = false
      }
      pipes[i].x -= sp
    }

    ellipse(width/4,ybird, 40)
    ybird += gravity
    gravity += gi
    if (pipes[0].x< -60){
      pipes.push({
        h : random(height/2)+height/4,
        x : pipes[pipes.length-1].x + (random()+0.5)*width/1.8,
        r : random()
      })
      score+=1
      pipes.splice(0,1)
    }
    if(ybird<0){
      ybird = 0;
      gravity=0
    }
    if(ybird>height){
      ybird=height
      gravity=0
    }
    textSize(20)
  	text(score, 20, 30)
    textAlign(CENTER)
    sp+=0.001
  }else{
		background(255,0,0)
    textSize(20)
  	text(score, 20, 30)
    textAlign(CENTER)
    textSize(height/10)
    text('RETRY', width/2, height/2)
  }
}

function mouseClicked(){
  if (playing) gi = -gi
  else {
  	playing = true
    ybird= 300
    sp = 8
    pipes = []
    gravity = 0
    score = 0
    setup()
  }
}
