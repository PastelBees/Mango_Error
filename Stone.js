class Stone {
    constructor(x, y, height,width) {
      var options = {
        isStatic: false,
        restitution:0,
        friction:1,
        density: 1.2

      }
      this.width =width;
      this.height = height;
      this.x =x;
      this.y = y;
      this.body = Bodies.rectangle(x, y, width, height, options);

      this.image=loadImage("sprites/stone.png")
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      fill(230);
      stroke(230)
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };
  