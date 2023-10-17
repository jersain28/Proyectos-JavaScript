const UrlBase="https://api.openweathermap.org/data/2.5/weather";
const ApiKey="619a4d7eb9f8905cd6d4a4115ae8d996";
const btnCiudad=document.querySelector('#btnCiudad');
const inputCity=document.querySelector('#city');

const fetchApi=url=> fetch(url).then(response=>response.json());

async function getClima(lat, lon, apiKey){
    const url=`${ UrlBase }?lat=${ lat }&lon=${ lon }&appid=${ apiKey }`;
    const clima= await fetchApi(url);
    console.log(clima);
    const temperature=(clima.main.temp-273.15).toFixed(2);
    document.querySelector('#left h2').innerHTML=clima.name;
    document.querySelector('#left h3').innerHTML=`${ temperature }ºC`;
    pintaTemp(temperature);
    pintaFondo(temperature);
}

async function getClimaByCity(city, apiKey){
    const url=`${ UrlBase }?q=${ city }&appid=${ apiKey }`;
    const clima= await fetchApi(url);
    console.log(clima);
    const temperature=(clima.main.temp-273.15).toFixed(2);
    document.querySelector('#left h2').innerHTML=clima.name;
    document.querySelector('#left h3').innerHTML=`${ temperature }ºC`;
    pintaTemp(temperature);
    
}

function pintaTemp(temp){
    const h3=document.querySelector('h3');
    if(temp < 15){
        h3.innerHTML=`${ temp }ºC❄️❄️❄️❄️`;
    }else if(temp < 23){
        h3.innerHTML=`${ temp }ºC⛅⛅`;
    }else{
        h3.innerHTML=`${ temp }ºC☀️🔥☀️🔥☀️`;
    }
}

function pintaFondo(temp){
    const fondo=document.querySelector('body');
    if(temp < 15){
        fondo.style.background='#a8f3da';
    }else if(temp < 22){
        fondo.style.background='#FFFF88';
    }else{
        fondo.style.background='#FFAB98';
    }
}

navigator.geolocation.getCurrentPosition(
    position=>{
        const lat=position.coords.latitude;
        const lon=position.coords.longitude;
        getClima(lat, lon, ApiKey);
    }
    )

    btnCiudad.addEventListener('click', () =>{
        const city=inputCity.value;
        if(city){
            getClimaByCity(city, ApiKey);
        }
    })