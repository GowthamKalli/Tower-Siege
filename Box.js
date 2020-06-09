class Box {
    constructor(x, y,colour1,colour2,colour3){
      
      this.body = Bodies.rectangle(x,y,30,40);

      this.width = 30;
      this.height = 40;
      
      this.colour1 = colour1;
      this.colour2 = colour2;
      this.colour3 = colour3;

      World.add(world,this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      
      push() 
      translate(pos.x, pos.y);
      rotate(angle);
      fill(this.colour1,this.colour2,this.colour3);
      rectMode(CENTER);
      rect(0,0,this.width,this.height);
      pop();
    }
  }