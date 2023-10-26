const body=document.querySelector('body');
const h2=document.querySelector('h2');

function setColor(){
    const digitos='0123456789ABCDEF';
    let rgbColor='#';
    for(let i=0; i<6; i++){
        const num=Math.floor(Math.random()*16);
        rgbColor+=digitos.charAt(num);
    }
    body.style.background=rgbColor;
    h2.innerHTML=rgbColor;
}


setColor();


