//Funcionalidad Navbar
let navLinks= document.querySelectorAll('.navbar-link');

for(let i=0;i<navLinks.length;i++){
    navLinks[i].addEventListener('click', function(event){
        alert("Cargando informe meteorológico...");
    })
}

/*select-change temperatures*/
let temperatures = document.querySelectorAll('.temperature');
let temperatureSelector=document.querySelector('#temperature-select');
temperatureSelector.addEventListener('change',cambiarTemperaturas);

function cambiarTemperaturas(event){
    let temperatureOption =event.target.value;

    if(temperatureOption==="F"){
        for(let i=0;i<temperatures.length;i++){
            let convertedTemperature = (parseFloat(temperatures[i].innerText) * 9/5) + 32;
            temperatures[i].innerText = convertedTemperature+"°";
        }
    }
    else{
        for(let i=0;i<temperatures.length;i++){
            let convertedTemperature = (parseFloat(temperatures[i].innerText) - 32) * 5/9;
            temperatures[i].innerText = convertedTemperature.toFixed(0)+"°";
        }
    }

}

function closeCookies(element){
    let cookiePolicies = element.closest('.cookie-policies');
    cookiePolicies.classList.add('hidden');
}