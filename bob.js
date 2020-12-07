class Bob {
    constructor(x,y,r) {
        var options={
            
            restitution:1,
            friction:0.2,
            density:0.4,
        }
        this.x=x;
        this.y=y;
        this.r=r;
         
        this.bob=Matter.Bodies.circle(this.x,this.y,this.r,options);
       
        World.add(world,this.bob);
    }
    display() {
        fill("yellow");

        //translate();
        ellipse(this.bob.position.x,this.bob.position.y,this.r*2,this.r*2)       
    }
}