let canX = 600;
let canY = 600;

let p_scale = 60;

let particles;

function setup() {
  createCanvas(canX, canY);
  particles = [];
  for(let i=0; i < canX/p_scale; i++)
    {
      for(let j=0; j < canY/p_scale; j++)
      {
        particles.push(new fluid_particle(i*p_scale+5,j*p_scale+5));
      }
    }
}

function draw() {
  background(220);
  for(let i=0; i < particles.length; i++)
    {
      particles[i].update(particles[i].dirto(mouseX, mouseY));
      particles[i].display();
    }
}

function fluid_particle(xp, yp)
{
  this.x = xp;
  this.y = yp;
  this.vx = 0;
  this.vy = 0;
  this.damp = 10;
  
  this.step = function(new_v)
  {
    this.vx = -new_v.x;
    this.vy = -new_v.y;
    
    this.x += this.vx / this.damp;
    this.y += this.vy / this.damp;
  }
  
  this.update = function(new_v)
  {
    this.vx = -new_v.x;
    this.vy = -new_v.y;
    
    //this.x += this.vx / this.damp;
    //this.y += this.vy / this.damp;
  }
  
  this.display = function() {
    noStroke();
    ellipse(this.x, this.y, 5, 5);
    stroke(255);
    stroke('black');
    strokeWeight(2);
    line(this.x, this.y, this.x + this.vx, this.y+this.vy);
  }
  
  this.dirto = function(dx, dy)
  {
    return createVector(this.x-dx, this.y-dy);
  }
  
}

function mouseClicked()
{
  for(let i=0; i < particles.length; i++)
    {
      particles[i].step(particles[i].dirto(mouseX, mouseY));
      particles[i].display();
    }
}
