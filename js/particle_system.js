// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var ParticleSystem = function(position) {
	this.origin = position.copy();
  	this.particles = [];

  this.addParticle = function() {
  	this.particles.push(new Particle(this.original));
  };

  this.run = function() {
  	for (var i = this.particles.length-1; i >= 0; i--) {
      var p = this.particles[i];
      p.run();
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  };

  // A function to apply a force to all Particles
  this.applyForce = function(f) {
    for(var i = 0; i < this.particles.length; i++){
      this.particles[i].applyForce(f);
    }
  };

this.checkEdges = function() {
    // var newAmp = constrain( this.amptemp*this.lifespan/255, 0, 1) ;
   
    for(var i = 0; i < this.particles.length; i++){
      var p = this.particles[i];
      if (p.position.x > width) {
        p.position.x = width;
        p.velocity.x *= -1;   
      } 
      else if (p.position.x < 0) {
        p.velocity.x *= -1;
        p.position.x = 0;
      }
      else if (p.position.y > height) {
        p.velocity.y *= -1;
        p.position.y = height;   
      }

    }
    
  };
 

  this.applyRepeller = function(r) {
    for(var i = 0; i < this.particles.length; i++){
      var p = this.particles[i];
      var force = r.repel(p);
      p.applyForce(force);
    }
  };
};
