class Particle{
    constructor(x,y,r){
        var options = {
            'density':.2,
            'restitution':.5,
            'friction':.2
        }
        this.r = r
        this.x = x
        this.color = color(random(0,255),random(0,255),random(0,255));
        this.body = Bodies.circle(x,y,this.r,options);
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}