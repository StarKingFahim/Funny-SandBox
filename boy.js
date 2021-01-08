class Boy 
{
    constructor(x,y,width,height,angle,image)
    {
        var options = {

            'restitution':0.3,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image= image;
        World.add(world, this.body);
    }
    display()
    {

    var angle=this.body.angle;
    push();

    translate(this.body.position.x, this.body.position.y);
    rotate(angle);

    imageMode(CENTER);
    image(this.image,0,0,this.width+10,this.height+10);

    

    camera.position.x = this.body.position.x+180;
    camera.position.y = displayHeight/4;

    if(this.body.position.x>1700)
  {
    Matter.Body.setPosition(this.body, {x:-1300,y:this.body.position.y})
  }
  if(this.body.position.x<-1300)
  {
    Matter.Body.setPosition(this.body, {x:1700,y:this.body.position.y})
  }

    pop();
    }
}
