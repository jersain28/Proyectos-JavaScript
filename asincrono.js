const names=["Jersa","Peter","John","Bruce"]

console.log(names);

function getNames(){
    return names;
}

console.log(getNames());

function asynGetNames(){
    setTimeout(()=>{
        console.log('Ejecuta funcion');
        return names;
    }, 3000);
}

console.log('Inicia peticion');
console.log(asynGetNames());
console.log('Termina peticion');