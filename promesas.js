const names=["Clark Kent","Barry Allen","Hal Jordan","Bruce Wayne"]

const getNamesPromise=(valor)=>new Promise(
    (resolve, reject)=>{
        setTimeout( ()=>{
            console.log('Ejecuta promesa');
            if(valor){
                resolve(names);
            }else{
                reject(new Error('Fallo'));
            }
            resolve(names);
        }, 1000)
    }
)

// console.log(getNamesPromise);

console.log('Inicia peticion')
getNamesPromise(1).then(
    (datos)=>{
        console.log(datos);
        console.log('Finaliza peticion')
    }
)
.catch(error=>console.log(error))
console.log('Continua ejecucion')