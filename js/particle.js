// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Simple Particle System

// A simple Particle class

var Particle = function(position) {
  this.acceleration = createVector(0, 0);
  this.velocity = createVector(random(-10, 10), random(-1, 0));
  this.position = createVector(random(width), -10);
  this.lifespan = 255.0;

  this.run = function() {
    this.update();
    this.display();
  };

  this.applyForce = function(f) {
    this.acceleration.add(f);
  };


  // Method to update position
  this.update = function(){
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 1;
  };

  // Method to display
  this.display = function() {
    //stroke(255, this.lifespan);
    strokeWeight(2);
    fill(78,244,15, this.lifespan)
    ellipse(this.position.x, this.position.y, 10, 10);
  };


  // Is the particle still useful?
  this.isDead = function(){
    if (this.lifespan < 0.0) {
      return true;
    } else {
      return false;
    }
  };
};
