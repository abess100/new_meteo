'use strict'
  // variable  pour recupérer la clé api

 let  APikey = "d1e7cd3e343c4f00b99d3d35efceac5b"


 let research =  document.querySelector('#input');
 let touche = document.querySelector('#button')
// evenement au click

touche.addEventListener('click', appelApi)
research.value ='gabon';


// 
function appelApi(e){
    
    let pays = research.value;
    
    const  url = `https://api.openweathermap.org/data/2.5/weather?q=${pays}&appid=${APikey}&units=metric&lang=fr `
    
    fetch(url).then((reponse) => reponse.json().then((data) => {
        console.log(data)
     let name = document.querySelector('.titre').innerHTML = data.name;
     let temp  = document.querySelector('.temp').innerHTML = data.main.temp + '°';
     let temps  = document.querySelector('.temps').innerHTML = data.main.temp_max + '°';
     let temps1  = document.querySelector('.temps1').innerHTML = data.main.temp_max + '°';
     let humidity  = document.querySelector('.colo1 ').innerHTML = data.main.humidity +'%';
     let wind = document.querySelector('.colo').innerHTML = data.wind.speed + 'km/h';
    let  pressure = document.querySelector('.colo2').innerHTML = data.main.pressure + ' Pa';
    let  description = document.querySelector('.humidity').innerHTML = data.weather[0].description ;
    let  nuage = document.querySelector('.humidity').innerHTML = data.weather[0].main ;
    })) 

    if(data.weather[0].main == 'clouds'){
        let img = document.querySelector('.logo').innerHTML = `<img src="img/pluie.png" alt="">`
    }
    
    
    e.preventDefault;
}
 