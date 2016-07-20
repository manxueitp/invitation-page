var r, g, b;
var width;
var height;
var yesX;
var noX;
var btnY;
var sYes;
var sNo;
var m;
var randomV=5;
var noRandomV=5;
var dYes;
var dNo;
var yesA=255;
var noA=255;
var yesTSize=36;
var noTSize=36;

var a=255;
var yesCX, yesCY,noCX,noCY;

var movers=[];

var yesSong;
var noSong;
 
// var r=[250,252,3,84];//red yellow,blue,purplr,green(88,240,177)
// var g=[130,225,199,95];//
// var b=[71,42,255,241];

var r=[250,250,245,23];//red yellow,pink,purplr,green(88,240,177)
var g=[130,225,8,254];//
var b=[71,42,231,6];

var yesBtn;
var noBtn;

var ps;

function setup() {
  //yesSong = loadSound('../assets/1.mp3');
  //noSong = loadSound('../assets/2.mp3');
  //console.log('in setup!!');
  width = document.getElementById('canvas').offsetWidth;
  height = document.getElementById('canvas').offsetHeight;
  //console.log(width);
  var myCanvas = createCanvas(width,700);
  yesX=width/5;
  noX=width/5*4;
  var btnY=400;
  myCanvas.parent('canvas');

  background(255);

  sYes=160;
  sNo=160;

  for (var i = 0; i <= 20; i++) {
  	var positionx= random(1,10)/10;
  	var positiony= random(4,10)/10;
  	var rrate=random(10,100);
  	var rmass=random(10,20);
    var rn=round(random(0,4));
  	var seed=random(0,1);

  	//console.log("seed"+seed);
  	if (seed>0.5){
  		rrate=-rrate;
  	}else{
  		rrate=rrate;
  	}
  	//console.log("rrate"+rrate);

  	movers.push(new Mover(rmass,positionx,positiony,rrate,rn));
  }

  ps = new ParticleSystem(createVector(random(width), -10));
  yesBtn=new btnYes(30,0.16,0.7);
  noBtn=new btnNo(30,0.84,0.7);
}

function draw() {

    //background(252,250,42);
    background(84,15,216);
    noStroke();
	
	for (var i = 0; i < movers.length; i++) {
		movers[i].display();
		movers[i].update();
	}

 // background triangle  
    push();
    m=30;
    translate(width*0.2, height*0.5);
    rotate(frameCount / 200.0);
    fill(84,95,254);
    triangle(0, -1.15*m, -m, 0.58*m, m, 0.58*m);
    pop();

    push();
    m=30;
    translate(width*0.42, height*0.4);
    rotate(frameCount / 200.0);
    fill(252,225,42);
    triangle(0, -1.15*m, -m, 0.58*m, m, 0.58*m);
    pop();

    push();
    m=26;
    translate(width*0.1, height*0.3);
    rotate(-frameCount / 100.0);
    fill(250,130,71);//red
    triangle(0, -1.15*m, -m, 0.58*m, m, 0.58*m);
    pop();

    push();
    translate(width*0.8, height*0.6);
    m=30;
    rotate(-frameCount / 100.0);
    fill(22,201,253);
    triangle(0, -1.15*m, -m, 0.58*m, m, 0.58*m);
    pop();

    push();
    translate(width*0.4, height*0.15);
    m=38;
    rotate(-frameCount / 100.0);
    fill(252,225,42);
    triangle(0, -1.15*m, -m, 0.58*m, m, 0.58*m);
    pop();

    push();
    translate(width*0.6, height*0.25);
    m=26;
    rotate(frameCount / 100.0);
    fill(250,130,71);
    triangle(0, -1.15*m, -m, 0.58*m, m, 0.58*m);
    pop();
  //triangle end


  ps.addParticle();
// Apply gravity force to all Particles
  var gravity = createVector(0,0.03);
  ps.applyForce(gravity);
  ps.applyRepeller(yesBtn);
  //ps.applyRepeller(noBtn);
  //ps.checkEdges();
  
  yesBtn.display();
  yesBtn.expend();
  noBtn.display();
  noBtn.shrink();
  noBtn.repel(ps);

  ps.run();




 // //no button
 //    push();
 //    translate(width*0.7, height*0.55);
 //    fill(3, 199, 255, 255);
 //    ellipse(0, 0, 5+sNo+random(noRandomV+10), 5+sNo+random(noRandomV+10));
 //    fill(0, 0, 0, 255);
 //    ellipse(0, 0, sNo+random(noRandomV), sNo+random(noRandomV));
 //    //words
 //    textSize(noTSize);
 //    fill(3,199,255,noA);
 //    textFont("Helvetica");
 //    text("No", -20+random(-noRandomV,noRandomV), 10); 
 //    fill(r,g,b);
 //    fill(255,255,255,noA);
 //    text("No", -20, 10); 
 //    pop();
 // //no button end
    
    
 
    // noCX=width*0.7;
    // noCY=height*0.5;


    // dNo = dist(mouseX, mouseY, noCX, noCY);

    //  if (dYes < 200){
    // 	sYes = map(dYes, 200, 0, 160,280 );
    //     yesTSize = map(dYes, 200, 0, 36,48);
    //     randomV=map(dYes,200,0,5,10);
    //     yesA=map(dYes,120,100,255,0);
    //     a=map(dYes,140,60,255,0);
    // 	//console.log('sYes '+ sNo);
    // }

    //  if (dNo < 180){
    // 	sNo = map(dNo, 180, 0, 160,0 );
    //     noTSize = map(dNo, 180, 0, 36,0 );
    //     noRandomV=map(dNo,180,0,5,0);
    //     noA=map(dNo,180,0,255,0);
    // 	//console.log('sNO '+ sNo);
    // }

    
  
}

function mousePressed() {
  // Check if mouse is inside the circle
  var d = dist(mouseX, mouseY, yesCX, yesCY);
  if (d < 90) {
    //console.log("mousePressed", document);
    //yesSong.play();
    window.location = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Really+Good+Party,+You+Should+Come!&dates=20160722T230000Z/20160723T040000Z&details=Really+Good+Intern+Party&location=The+Deck&sf=true&output=xml#eventpage_6"
  }


  

   

}


//google calender link
//https://www.google.com/calendar/render?action=TEMPLATE&text=Your+Event+Name&dates=20140127T224000Z/20140320T221500Z&details=For+details,+link+here:+http://www.example.com&location=Waldorf+Astoria,+301+Park+Ave+,+New+York,+NY+10022&sf=true&output=xml


