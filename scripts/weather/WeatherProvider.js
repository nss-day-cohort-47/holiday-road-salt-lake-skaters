// imported API key 
import { settings } from "../Settings.js"


// array that holds copy of useWeatherCollection
let weatherCollection = [];


// function that returns copy of useWeatherCollection array
  const useWeatherCollection =() => {
    return [...weatherCollection];
}

// created a function that fetchs forecast from API then return parsed array
export const getWeather = () => {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=40.41029575&lon=-76.4337548&appid=${settings.weatherKey}`)
    .then(response => response.json())
    .then(parsedResponse => {
        weatherCollection = parsedResponse
        return weatherCollection;
    })
}

// 
// Need to convert dt
const convertTime = (t) => {
    
}

// need to convert temp 
//   public static double kelvinsToFahrenheit(double k) {
    // return ((k - 273.15) * 1.8) + 32;}

    const convertTemp = (k) => {
        let temperature = (((k - 273.15) * 1.8) + 32)
        return temperature

    }

const ForecastCard = (weatherObj) => {
    return `
    <h2>Weather Forecast:</h2>
                <ul>
                        <li class ="day">${weatherObj.dt} </li>
                    <li class ="temp">${convertTemp(weatherObj.temp)}</li>
                    <li class = "description">${weatherObj.weather.description}</li>
                </ul>
    `
}

const weatherList = () => {
    let weatherHTML = "";
    getWeather().then ( () => {
        const weatherArray = useWeatherCollection();
        return weatherArray;
    })
    .then(()=> {
        for (const day of weatherArray) {
            weatherHTML += ForecastCard(day)
        }
    }
    )
}
    // return weatherHTML;
  


 export const showWeatherList = () => {
    const weatherElement = document.querySelector(".section-weather");
    
    getWeather().then((allWeather) => {
        weatherElement.innerHTML = weatherList(allWeather);
    })
}