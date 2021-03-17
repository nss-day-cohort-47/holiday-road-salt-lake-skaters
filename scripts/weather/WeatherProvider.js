import { settings } from "../Settings.js"



let weatherCollection = [];

 export const useWeatherCollection =() => {
    return [...weatherCollection];
}

export const getWeather = () => {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=40.41029575&lon=-76.4337548&appid=${settings.weatherKey}`)
    .then(response => response.json())
    .then(parsedResponse => {
        weatherCollection = parsedResponse.daily
        return weatherCollection;
    })
}

// 
// Need to convert dt

const ForecastCard = (weatherObj) => {
    return `
    <h2>Weather Forecast:</h2>
                <ul>
                        <li class ="day">${weatherObj.dt} </li>
                    <li class ="temp">${weatherObj.temp}</li>
                    <li class = "description">${weatherObj.weather.description}</li>
                </ul>
    `
}

const weatherList = (dailyForecast) => {
    let weatherHTML = "";
    for (const weatherObj of dailyForecast){
        weatherHTML += ForecastCard(dailyForecast)

    }
    console.log(weatherHTML)
    return weatherHTML;
}

 export const showWeatherList = () => {
    const weatherElement = document.querySelector(".section-weather");
    
    getWeather().then((allWeather) => {
        weatherElement.innerHTML = weatherList(allWeather);
    })
}