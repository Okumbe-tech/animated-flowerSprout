let canva=document.getElementById("lop"),
   ctx=canva.getContext('2d');
   canva.height=window.innerHeight
   canva.width=window.innerWidth
   canva.style.backgroundColor='black'
   let particles=[]

   

   class Particle{
    constructor(x,y){
this.x=x
this.y=y
this.size=Math.random()*1+2
this.dy=Math.random()*4-2
this.dx=Math.random()*4-2
this.maxSize=4
this.col=this.kalad()
    }
    kalad(){
        let r,g,b,c;
    r=Math.random()*255
    g=Math.random()*255
    b=Math.random()*255
    c=`rgb(${r},${g},${b})`

    return c

    }

    update(){

        this.y+=this.dy
        this.x+=this.dx
        if (this.size>this.maxSize){
        delete this
        }
        else{
            this.size+=0.01
        }
        
        

    }

    draw(){
        ctx.fillStyle=this.col
        ctx.beginPath()
        ctx.arc(this.x,this.y,this.size,0,Math.PI*2)
        ctx.closePath()
        ctx.fill()
    }
   }

   function make(){
    

    window.addEventListener('mousemove',(e)=>{
        for(let i=0;i<2;i++){
            particles.push(new Particle(e.x,e.y))
        }


    })

    
   }
   make()

   function animate(){

    
ctx.clearRect(0,0,canva.width,canva.height)
for(let j=0;j<particles.length;j++){

    particles[j].update()
    particles[j].draw()

    if (particles[j].size>particles[j].maxSize)particles.splice(j,1)


}
drawlines(particles)

requestAnimationFrame(animate)

   }
   animate()


 function drawlines(arr){
    let r,g,b,c;
    r=Math.random()*255
    g=Math.random()*255
    b=Math.random()*255
    c=`rgb(${r},${g},${b})`
    for(let k=0;k<arr.length;k++){
        for(let n=0;n<arr.length;n++){
            let X=arr[k].x-arr[n].x
            let Y=arr[k].y-arr[n].y
            let dist=Math.sqrt(X*X+Y*Y)
            if(dist>0 && dist<50){
                ctx.strokeStyle=c
                ctx.moveTo(arr[k].x,arr[k].y)
                ctx.lineTo(arr[n].x,arr[n].y)
                ctx.stroke()
            }
        }
    }

 }


   
    