mx = 0;
my = 0;
mcx = 0;
mcy = 0;
isHeld = false;

canX = 800;
canY = 800;

bounce = 5;

function setup() {
  createCanvas(canX, canY);
  x = 150;
  y = 0;
  vel = createVector(0,0);
  radius = 150;
}

function draw() {
  background(225);
    circle(x, y, radius);
  if(!isHeld)
    {
  vel.add(0, 9.807);
      x += vel.x;
  y += vel.y;
      if(vel.x > 0)
      vel.x -= 0.1;
      else if(vel.x < 0)
        vel.x += 0.1;
      if(abs(vel.x) < 0.1)
        vel.x = 0;
  if(y >= canY-radius/2)
    {
      y = canY-radius/2;
      vel.y = -vel.y;
    }
      if(x >= canX-radius/2 || x <= radius/2)
        {
          if(x >= canX-radius/2)
          x = canX-radius/2;
          else
            x = radius/2;
          vel.x = -vel.x;
          if(vel.x > 0)
      vel.x -= bounce;
      else if(vel.x < 0)
        vel.x += bounce;
        }
    }
  
  mcx = mouseX - mx;
  mcy = mouseY - my;
  
  mx = mouseX;
  my = mouseY;
}

function mouseClicked()
{
  if(isMouseOver())
    {
      //y = 0;
    }
}

function mouseDragged()
{
  
  if(isMouseOver())
    {
      isHeld = true;
      x += mcx;
      y += mcy;
    }
}


function isMouseOver()
{
  if(mouseX <= x+radius/2 &&
    mouseY <= y+radius/2 &&
    mouseX >= x-radius/2 &&
    mouseY >= y-radius/2)
    {
      return true;
    }
  return false;
}

function mouseReleased()
{
  vel.x = mcx;
  vel.y = mcy;
  isHeld = false;
}
