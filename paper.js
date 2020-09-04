class Paper{
    constructor(){
        var options ={
            isStatic : false, 
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.body = Bodies.circle(200, 400, 30);

        World.add(world, this.body);
    }

        display(){
            var pos =this.body.position;
            rectMode(CENTER);
            fill("purple");
            circle(pos.x, pos.y);
          }

    
}