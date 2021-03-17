// imported API key 
import { settings } from "../Settings.js"


// array that holds copy of useWeatherCollection
let weatherCollection = [];


// function that returns copy of useWeatherCollection array
  const useWeatherCollection =() => {
    return [...weatherCollection];
}

// created a function that fetchs forecast from API then return parsed array
 const getWeather = () => {
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=current,minutely,hourly,alerts&units=imperial&appid=${settings.weatherKey}`)
    .then(response => response.json())
    .then(parsedResponse => {
        weatherCollection = parsedResponse.daily.slice(0, 5)
        console.log(weatherCollection);
        
        
        
    })
    .then(  response =>  {
        for (let i = 0; i < response.length; i++){
    if( response[i].dt_txt.includes( "09:00:00")
        ){ console.log(response); }
        // return weatherCollection;
}
    
})
 }

// 
// Need to convert dt
// const convertTime = (t) => {
    
// }

// need to convert temp 
//   public static double kelvinsToFahrenheit(double k) {
    // return ((k - 273.15) * 1.8) + 32;}

    // const convertTemp = (k) => {
    //     let temperature = (((k - 273.15) * 1.8) + 32)
    //     return temperature

    // }

const ForecastCard = (weatherObj) => {
    console.log(weatherObj);
    return `
    <h2>Weather Forecast:</h2>
                <ul>
                        <li class ="day">${weatherObj.dt} </li>
                    <li class ="temp">${weatherObj.main.temp}</li>
                    <li class = "description">${weatherObj.weather[0].description}</li>
                </ul>
    `
}

 export const weatherList = () => {
    // debugger
    let weatherHTML = "";
    getWeather().then ( () => {
        const weatherArray = useWeatherCollection();
        console.log(weatherArray);
        for (const day of weatherArray ){
            weatherHTML += ForecastCard(day)
            
        }
        const weatherElement = document.querySelector(".section-weather");
    
    getWeather().then(() => {
        weatherElement.innerHTML = weatherHTML;
    })
        })
    }
    
    

    // return weatherHTML;
  


//  export const showWeatherList = () => {
    // const weatherElement = document.querySelector(".section-weather");
    
    // getWeather().then(() => {
    //     weatherElement.innerHTML = weatherList();
    // })
// }