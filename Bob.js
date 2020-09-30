class Bob{
    constructor(x,y){
       var  options = {
           isStatic : false,
           friction : 1.0,
           density : 1.0
        }

        this.body = Bodies.circle(x,y,20,options);
        //this.radius=20;
        this.height=50;
        this.width=50;

        Matter.Body.setMass(this.body,this.body.mass/3);

      
        World.add(world,this.body);
    }
    display(){
        

    var angle = this.body.angle;
    var pos = this.body.position;
    push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
     pop();
        
        

        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,50);
       
        
    }
}