class Ground
{
    constructor(x,y,w,h){
        var options = {
            isStatic:true
        };
        this.w = width;
        this.h = height;
        this.body = Bodies.rectangle(x,y,this.w,this.h,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        rect(pos.x,pos.y, 0, this.width, this.height);
        pop();
      }
    
    }