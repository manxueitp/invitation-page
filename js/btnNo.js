// //no button
//     push();
//     translate(width*0.7, height*0.55);
//     fill(3, 199, 255, 255);
//     ellipse(0, 0, 5+sNo+random(noRandomV+10), 5+sNo+random(noRandomV+10));
//     fill(0, 0, 0, 255);
//     ellipse(0, 0, sNo+random(noRandomV), sNo+random(noRandomV));
//     //words
//     textSize(noTSize);
//     fill(3,199,255,noA);
//     textFont("Helvetica");
//     text("No", -20+random(-noRandomV,noRandomV), 10); 
//     fill(r,g,b);
//     fill(255,255,255,noA);
//     text("No", -20, 10); 
//     pop();
//  //no button end

var btnNo = function(mass,x,y) {
    this.power = 400;
    this.mass = mass;
    this.position = createVector(width*x, height*y);
    
   
   this.display = function() {
      push();
      translate(this.position.x, this.position.y);
    //no button
      fill(3, 199, 255, 255);
      ellipse(0, 0, 5+sNo+random(noRandomV+10), 5+sNo+random(noRandomV+10));
      fill(0, 0, 0, 255);
      ellipse(0, 0, sNo+random(noRandomV), sNo+random(noRandomV));
      //words
      textSize(noTSize);
      fill(3,199,255,noA);
      textFont("ComicSansMSRegular");
      text("No", -20+random(-noRandomV,noRandomV), 10); 
      fill(r,g,b);
      fill(255,255,255,noA);
      text("No", -20, 10); 
      pop();
   //no button end
   };

   this.shrink=function(){
      noCX=width*0.84;
      noCY=height*0.7;
      dNo = dist(mouseX, mouseY, noCX, noCY);
    
      if (dNo < 180){
      sNo = map(dNo, 180, 0, 160,0 );
        noTSize = map(dNo, 180, 0, 36,0 );
        noRandomV=map(dNo,180,0,5,0);
        noA=map(dNo,180,0,255,0);
      //console.log('sNO '+ sNo);
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