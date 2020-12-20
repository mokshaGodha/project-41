class Drop {
    constructor(x,y) {
      var options = {
          'friction':0.5,
          'restitution':1.0,
          'density':1.0
      }
      this.body = Bodies.circle(x,y,width,height,options);
      this.width = 20;
      this.height = 20;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("blue");
      ellipse(pos.x, pos.y, 20, 20);
    }
  };
