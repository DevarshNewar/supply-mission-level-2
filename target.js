class box {
    constructor (x,y,width,height) {
        var box_options ={
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,box_options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display () {
        var qwe = this.body.position;
        rectMode(CENTER);
        rect(qwe.x,qwe.y,this.width,this.height);
    }
}