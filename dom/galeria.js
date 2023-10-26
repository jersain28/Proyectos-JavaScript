const contenedor=document.querySelector('.container');
const main=document.getElementById('main');

function getImage (e){
    const image=e.target.getAttribute('src');
    main.src=image;
}

contenedor.addEventListener('click', getImage);