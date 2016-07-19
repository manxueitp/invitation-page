
// //yes button
//     push();
//     translate(width*0.3, height*0.55);
//     fill(252, 225, 42, 255);
//     ellipse(0, 0, 5+sYes+random(randomV+10), 5+sYes+random(randomV+10));
//     fill(0, 0, 0, a);
//     ellipse(0, 0, sYes+random(randomV), sYes+random(randomV));
//     //words
//     textSize(yesTSize);
//     fill(0,0,0,255-yesA);
//     text("Yes", -30+random(-2,2), 10);
//     fill(3,199,255,yesA);
//     textFont("Helvetica");
//     text("Yes", -30+random(-randomV+3,randomV-3), 10); 
//     fill(r,g,b);
//     fill(a,a,a);
//     textFont("Helvetica");
//     text("Yes", -30, 10);
//     pop();
// //yes button end





var btnYes = function(mass,x,y) {
    this.power = 400;
    this.mass = mass;
    this.position = createVector(width*x, height*y);
    
   
   this.display = function() {
      push();
      translate(this.position.x, this.position.y);
  //yes button
      fill(252, 225, 42, 255);
      ellipse(0, 0, 5+sYes+random(randomV+10), 5+sYes+random(randomV+10));
      fill(0, 0, 0, a);
      ellipse(0, 0, sYes+random(randomV), sYes+random(randomV));
      //words
      textSize(yesTSize);
      fill(0,0,0,255-yesA);
      text("Yes", -30+random(-2,2), 10);
      fill(3,199,255,yesA);
      textFont("Helvetica");
      text("Yes", -30+random(-randomV+3,randomV-3), 10); 
      fill(r,g,b);
      fill(a,a,a);
      textFont("Helvetica");
      text("Yes", -30, 10);
      pop();
   //yes button end  
   };

   this.expend=function(){
      yesCX=width*0.3;
      yesCY=height*0.5;
      dYes = dist(mouseX, mouseY, yesCX, yesCY);
    
      if (dYes < 200){
        sYes = map(dYes, 200, 0, 160,280 );
        yesTSize = map(dYes, 200, 0, 36,48);
        randomV=map(dYes,200,0,5,10);
        yesA=map(dYes,120,100,255,0);
        a=map(dYes,140,60,255,0);
      //console.log('sYes '+ sNo);
      }

   };

     this.repel=function(p){
      var dir = p5.Vector.sub(this.position, p.position); // Calculate direction of force
      var d = dir.mag();                                // Distance between objects
      dir.normalize();                                  // Normalize vector (distance doesn't matter here, we just want this vector for direction)
      d = constrain(d, 1, 120);                         // Keep distance within a reasonable range
      var force = -1 * this.power/ (d * d);             // Repelling force is inversely proportional to distance
      dir.mult(force);                                  // Get force vector --> magnitude * direction
      return dir;
   };


};