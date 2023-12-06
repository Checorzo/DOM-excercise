const d = document;
const canva = d.createElement("canvas");
const ctx = canva.getContext("2d");
let direction = null;
const width = canva.width = 600;
const height = canva.height = 300;
  canva.id = "lienzo"
  ctx.fillStyle = `#fff`;
  ctx.fillRect(0, 0, 600,300);
  ctx.fill();

class Shape{
  constructor(x, y, velX, velY){
    this.x = x;
    this.y =y;
    this.velX = velX;
    this.velY = velY;
  }
}

class Ball extends Shape{
  constructor(x = 300, y = 150, velX = 0, velY = 0, color, size){
    super(x,y, velX, velY);
    this.color = color;
    this.size = size
  }
  draw(){
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }
  clear(x,y){
    ctx.beginPath();
    ctx.fillStyle = `#fff`;
    ctx.fillRect(this.x -
      x, this.y - y, this.size*2, this.size*2)
    ctx.fill();
  }
  set setX(x){
    this.x += x; 
  }
  set setY(y){
    this.y += y;
  }
  update(){
    if((this.x + this.size) <= width){
      this.x = -(this.velX);
    }
    if((this.x - this.size) >= 0){
      this.velX = -(this.velX);
    }
    if((this.y + this.size) <= 0){
      this.velY = -(this.velY);
    }
    if((this.y - this.size) >= height){
      this.velY = -(this.velY);
    }
  }
}
const ball = new Ball(300,150, 0, 0, `#5a2`, 20);
  ball.draw();
let x = 300,y = 150;
export function shortcut(tecla){
  // console.log(tecla.code);
  // console.log(tecla.keyCode);
  // console.log(tecla.type);
  // console.log(tecla.key);
  // console.log(ctx.getContextAttributes());
  if(tecla.code === "ArrowRight"){
     console.log("Mover a la derecha");
    if((x + 30)<= width){
     x += 10;
     ball.setX = 10;
     ball.clear(40, 20);
     ball.draw();
    // console.log(x);
    }
  }
  if(tecla.code === "ArrowLeft"){
     console.log("Mover a la izquierda");
    if((x - 30 ) >= 0){
     x -= 10;
     ball.setX = -10;
     ball.clear(0,20);
     ball.draw();
     // console.log(x);
    }
  }
  if(tecla.code === "ArrowUp"){
     console.log("Mover hacia arriba");
    if((y - 30) >= 0){
     y -= 10;
     ball.setY = -10;
     ball.clear(20,10); 
     ball.draw();
     tecla.preventDefault();
      // console.log(y);
    }
  }
  if(tecla.code === "ArrowDown"){
     console.log("Mover hacia abajo");
    if((y + 30) <= height){
     y += 10;
     ball.setY = 10;
     ball.clear(20,40);
     ball.draw();
    tecla.preventDefault();
      // console.log(y);
    }
  }
}

export function lienzo(seccion){
  console.log(canva);
  d.getElementById(seccion).appendChild(canva);
}
