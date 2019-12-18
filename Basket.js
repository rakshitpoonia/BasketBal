class Basket{
    constructor(x,y){
        var options={
            isStatic:true
        }
this.body=Bodies.rectangle(x,y,50,500,options);
this.width=250;
this.height=300;
World.add(world,this.body);
this.image=loadImage("hoop.png");
 
}
display(){
    //console.log("qwe");
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    //image(basketimg,displayWidth-1050,displayHeight-640);
    
}
}