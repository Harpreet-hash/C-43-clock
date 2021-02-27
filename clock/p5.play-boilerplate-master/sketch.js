

function setup() {
  createCanvas(800,800);
  
  
}

function draw() {
  background(0);
  sec=second();
  hr=hour();
  min=minute();
  
  //----------------------------- MAPPING

  if(hr>12){
    //to convert 24 hr format to 12hr
    newHr=hr%12;
    mapHr=map(newHr,0,12,0,360);
  }else{
    mapHr=map(hr,0,12,0,360);

  }
  mapMin=map(min,0,60,0,360);
  mapSec=map(sec,0,60,0,360);
  
  //---------------------------------------

  
  strokeWeight(5)
  angleMode(DEGREES)

  //----------------circles-------------------
  
  push();
  translate(400,400)  
//for loop for circles
//origin is translated only once and keeps rotating by 30deg everytime for loop runs
//hence a new circle is created at the spot with reference to rotated axis
//hence circles keep shifting with axis
  for(var i=1;i<13;i+=1){
    fill(255)
    circle(0,200,20)
    rotate(30)
  }
  pop();
  //-------------------------------------------
  

  //seconds
  push()
  translate(400,400);
  stroke("red") 
  rotate(mapSec)
  line(0,0,0,-200)  
  pop()

  //hrs
  push()
  translate(400,400);
  stroke("blue")
  rotate(mapHr)
  console.log(mapHr)
  line(0,0,0,-100)
  pop()

  //mins
  push()
  translate(400,400);
  stroke("yellow")
  rotate(mapMin)
  line(0,0,0,-200)
  pop()

  //--------------ARCS
  noFill()

 
  stroke("red")
  //START=> -90 bcoz arc starts at 3pm, we want at 12pm hence subtract 90deg
  //STOP=> mapSec-90 bcoz arc reference is 3pm, so by 3pm, 90deg is already covered
  arc(400,400,600,600,-90,mapSec-90)
  stroke("blue")
  arc(400,400,500,500,-90,mapHr-90)
  stroke("yellow")
  arc(400,400,550,550,-90,mapMin-90)
  
  

  

  
  
}