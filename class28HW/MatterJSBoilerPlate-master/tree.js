class Tree{
    constructor(){
        var options={isStatic:true}


        this.image=loadImage('tree.png');
           
        this.bodyleft= Bodies.rectangle(900,415,20,100,options);
        this.width2=20;
        this.height2=100;

        this.bodyright=Bodies.rectangle(1100,415,20,100,options);
        this.width3=20;
        this.height3=100;
        

        this.bodybottom =Bodies.rectangle(1000,250,200,20,options);
        this.width1=200;
        this.height1=20;

        World.add(world,this.bodyleft);
        World.add(world,this.bodyright);
        World.add(world,this.bodybottom);

        


    }
    display(){
    var bottom= this.bodybottom.position;
    var left= this.bodyleft.position;
    var right=this.bodyright.position;
    fill('green');
    imageMode(CENTER);
    rect(left.x,left.y,20,100);
    rect(right.x,right.y,20,100);
    image(this.image,bottom.x,bottom.y,250,500);
    }

}