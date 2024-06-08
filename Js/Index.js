
const keyApi = "988ad4f7e60b983ecd7b600e5cc9b572";

const Url = "https://api.openweathermap.org/data/2.5/weather?q=";

const input = document.querySelector(".input");

const search = document.querySelector(".search-icon");

const tempCity = document.querySelector(".temp")

const cityName = document.querySelector(".city")

const humidity = document.querySelector(".humidity");

const wind = document.querySelector(".wind");

const weatherIcon = document.querySelector(".weather-icon");

const country= document.querySelector(".country");


async function checkWeather(city , key){

    
    
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${key}`);

    let resonse = await data.json();

    console.log(resonse)
    
    tempCity.innerHTML = Math.round(resonse.main.temp)+"°c";

    cityName.innerHTML = resonse.name;

    country.innerHTML= resonse.sys.country;

    humidity.innerHTML = resonse.main.humidity;
    
    wind.innerHTML = Math.round(resonse.wind.speed)+"km/h";

    switch (resonse.weather[0].main) {
        case 'Clouds':
            weatherIcon.src = "images/clouds.png";
            break;
        case 'Clear':
            weatherIcon.src = "images/clear.png";
            break;
        case 'Rain':
            weatherIcon.src = "images/rain.png";
            break;
        case 'Drizzle':
            weatherIcon.src = "images/drizzle.png";
            break;
    
        case 'Snow':
            weatherIcon.src = "images/snow.png";
            break;
    
        default:
            break;
    }


    document.querySelector(".weather").style.display = "block";

}

search.addEventListener("click" , ()=>{
    checkWeather(input.value , keyApi)
})

