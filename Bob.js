class Bob {
    constructor(x, y, radius, mass){
        var bobOptions = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2,
            mass: mass
        }
        this.body = Bodies.circle(x, y, radius);
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        fill(255);
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.radius);
        //ellipse(mouseX, mouseY, this.radius);
        

    }
}