class Dustbin{
    constructor(x,y,height,width){
        var options ={
            isStatic : true, 
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.body = Bodies.rectangle(x, y, height, width, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }
        display(){
            var pos =this.body.position;
            rectMode(CENTER);
            fill("white");
            rect(pos.x, pos.y, this.width, this.height);
          }

    
}