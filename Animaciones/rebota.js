const lienzo=document.querySelector('#lienzo');
const ctx=lienzo.getContext('2d');

let idx=15;
let idy=15;

let dirX=1;
let dirY=1;

let valHsl = 0;
function bolita(x, y){
    ctx.fillStyle=`hsl(${ valHsl++ }, 50%, 50% )`;
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
}

function cuadro(x, y){
    ctx.fillStyle=`hsl(${ valHsl++ }, 50%, 50% )`;
    ctx.fillRect(x, y, 45, 45);
    ctx.strokeRect(x, y, 50, 50);
}

setInterval(() => {
    //ctx.clearRect(0, 0, 650, 400);
    cuadro(idx, idy);
    if(dirX === 1) idx += 5; else idx -=5;
    if(dirY === 1) idy += 5; else idy -=5;
    if(idx > 600) dirX = 2;
    if(idx < 0) dirX = 1;
    if(idy > 350) dirY = 2;
    if(idy < 0) dirY = 1;
}, 1);