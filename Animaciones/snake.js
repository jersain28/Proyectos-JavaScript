const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');
const resultado = document.querySelector('span');

let direction = 1;

let contador = 0;
resultado.innerHTML = contador;


const snake=[];
snake.push({
    x: 2,
    y: 1,
    xNext: 0,
    yNext: 0,
    pinta: function(){
        ctx.font = '25px Serif';
        ctx.fillText('🐸', this.x * 20, this.y * 20);
    }
});
snake.push({
    x: 1,
    y: 0,
    xNext: snake[0].x,
    yNext: snake[0].y,
    pinta: function(){
        ctx.font = '25px Serif';
        ctx.fillText('🐸', this.x * 20, this.y * 20);
    }
});
snake.push({
    x: 0,
    y: 0,
    xNext: snake[0].x,
    yNext: snake[0].y,
    pinta: function(){
        ctx.font = '25px Serif';
        ctx.fillText('🐸', this.x * 20, this.y * 20);
    }
});

const comida = {
    x: 0,
    y: 0,
    aparece: function(){
        this.x = Math.floor(Math.random() * 29);
        this.y = Math.ceil(Math.random() * 20);
    },
    pinta: function(){
        ctx.font = '25px Serif';
        ctx.fillText('🍓', this.x * 20, this.y * 20);
    }
}


let posIniX = 2;
let posIniY = 1;


function nextMove(){
    snake.forEach((cuadrito, index) => {
        if(index == 0){
        cuadrito.x = posIniX;
        cuadrito.y = posIniY;
        } else{
            cuadrito.x = cuadrito.xNext;
            cuadrito.y = cuadrito.yNext;
            cuadrito.xNext = snake[index - 1].x;
            cuadrito.yNext = snake[index - 1].y;
        }
    })
}


comida.aparece();
setInterval(() => {
    ctx.clearRect(0, 0, 600, 400);
    snake.forEach(cuadrito => cuadrito.pinta());
    if(snake[0].x === comida.x && snake[0].y === comida.y){
        comida.aparece();
        const newCuadro = {...snake[0]}
        newCuadro.x = comida.x;
        newCuadro.y = comida.y;
        snake.push(newCuadro);
        contador++;
        resultado.innerHTML = contador;
    }
    comida.pinta();
    switch(direction){
        case 1:
            posIniX++;
            break;
        case 2:
            posIniY++;
            break;
        case 3:
            posIniX--;
            break;
        case 4:
            posIniY--;
            break;
    }
    if(posIniX > 29) posIniX = 0;
    if(posIniX < 0) posIniX = 29;
    if(posIniY > 20) posIniY = 1;
    if(posIniY < 1) posIniY = 20;
    nextMove();
}, 300);

document.querySelector('body')
    .addEventListener('keydown', function(e){
        switch(e.key){
            case 'ArrowUp':
                direction = 4;
                break;
            case 'ArrowRight':
                direction = 1;
                break;
            case 'ArrowLeft':
                direction = 3;
                break;
            case 'ArrowDown':
                direction = 2;
                break;
        }
    });