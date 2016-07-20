//     push();
//     translate(width*0.8, height*0.6);
//     m=30;
//     rotate(-frameCount / 100.0);
//     fill(22,201,253);
//     triangle(0, -1.15*m, -m, 0.58*m, m, 0.58*m);
//     pop();


/////////////////30,0.8.0.5,100
var Mover = function(mass,x,y,rate,n) {
    this.power = 30;
    
    this.mass = mass;
    this.rate=rate;
    this.n=n;
    this.lifespan = round(random(200,255));
    this.increment=0;
   
   this.display = function() {
      push();
      translate(width*x, height*y);

      rotate(-frameCount / this.rate);
      fill(r[n],g[n],b[n],this.lifespan);
      triangle(0, -1.15*this.mass, -this.mass, 0.58*this.mass, this.mass, 0.58*this.mass);
      pop();

   };

   this.update=function(){

   	//this.lifespan-=3;
   	
   	if (this.lifespan <= 0) {
   	 this.increment=1;
    } 

    if(this.lifespan >=255){
     this.increment=0; 
    }
    
    if(this.increment==0){
       this.lifespan-=10;
    }

    if(this.increment==1){
      this.lifespan+=10;
    }
      
    
   }

    this.isDead = function(){
    if (this.lifespan < 0.0) {
      return true;
      lifespan
    } else {
      return false;
    }
  };

   // this.repel=function(r){
   // 	var dir=p5.Vector.sub(this.position,r.position);
   // 	var d=dir.mag();
   // 	dir.nomalize();
   // 	d=comstrain(d, 1, 100);
   // 	var force = -1 * this.power/ (d * d);             // Repelling force is inversely proportional to distance
   //  dir.mult(force);                                  // Get force vector --> magnitude * direction
   //  return dir;
   // };


};