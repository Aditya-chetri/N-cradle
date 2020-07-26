class bob
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:1.1,
			friction:0,
			density:0.5
        }
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);
        this.image = loadImage("SteelBall.png")
	}
	display()
	{
			
			var paperpos=this.body.position;
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			fill("black")
			ellipse(0,0,this.r, this.r);
			image(this.image, -40, -48, this.r*1.1, this.r*1.1);
			pop()
			
	}

}

