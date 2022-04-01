const canvas= document.getElementById('canva');
const ctx= canvas.getContext('2d')
let h= window.innerHeight
let w=window.innerWidth
canvas.width=w
canvas.height=h

class Root{
    constructor(x,y){
        this.x=x
        this.y=y
        this.speedx=Math.random()*4-2
        this.speedy=Math.random()*4-2
        this.maxSize=Math.random()*6+5
        this.size=Math.random()*1+2
        this.anglex=Math.random()*6.2
        this.angley=Math.random()*6.2
        this.vs=Math.random()*0.1+ 0.02
        this.vax=Math.random()*0.6-0.3
        this.vay=Math.random()*0.6-0.3
        this.light=10




    }
    update(){
        this.x+=this.speedx+Math.sin(this.anglex)
        this.y+=this.speedy+Math.sin( this.angley)
        this.size+=this.vs
        this.anglex+=this.vax
        this.angley+=this.vay
        if(this.light < 70) this.light+=0.25
        if(this.size<this.maxSize){
            ctx.beginPath()
            ctx.fillStyle= 'hsl(900,100%, '+this.light+'%)'

            ctx.arc(this.x, this.y,this.size,0, Math.PI*2)
            
            ctx.fill()
            ctx.stroke()
            requestAnimationFrame(this.update.bind(this))
        }
        else{
            const flower= new Flower(this.x, this.y, this.size)
            flower.grow()
        }


    }
}

class Flower{
    constructor(x,y,size){
        this.x=x
        this.y=y
        this.size=size
        this.maxfsize=this.size+ Math.random()*50
        this.image= new Image()
        this.image.src='canvara.png'
        this.frameSize=50

    }
    grow(){
        if(this.size< this.maxfsize){
            this.size+=0.3
            ctx.drawImage(this.image,0,0,this.frameSize,this.frameSize, this.x, this.y, this.size,this.size)
            requestAnimationFrame(this.grow.bind(this));
        }
        
    }
}

window.addEventListener('mousemove',function(e){
    for( let i=0; i<3; i++){
        const root= new Root(e.x, e.y);
    root.update()

    }


})