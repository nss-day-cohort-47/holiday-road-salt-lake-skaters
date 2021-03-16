// import {settings} from "../Setting.js"

// settings();

// let weatherCollection = [];

//  export const useWeatherCollection =() => {
//     return [...weatherCollection];
// }

// export const getWeather = () => {
//     return fetch("api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=${settings.weatherKey}")
//     .then(response => response.json())
//     .then(parsedResponse => {
//         weatherCollection = parsedResponse.daily
//         return parsedResponse;
//     })
// }
//



// const ForecastCard = (weatherObj) => {
//     return `
//     <h2>Weather Forecast:</h2>
//                 <ul>
                        // <li class ="day">${weatherObj.dt} </li>
//                     <li class ="temp">${weatherObj.temp}</li>
//                     <li class = "main">${weatherObj.main}</li>
//                 </ul>
//     `
// }

// const weatherList = (dailyForecast) => {
//     let weatherHTML = "";
//     for (const weatherObj of dailyForecast){
//         weatherHTML += ForecastCard(dailyForecast)

//     }
//     return weatherHTML;
// }

//  export const showWeatherList = () => {
//     const weatherElement = document.querySelector(".section-weather");
    
//     getWeather().then((allWeather) => {
//         weatherElement.innerHTML = weatherList(allWeather);
//     })
// }