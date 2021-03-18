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
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=current,minutely,hourly,alerts&units=imperial&appid=${settings.weatherKey}`)
    .then(response => response.json())
    .then(parsedResponse => {
        weatherCollection = parsedResponse.daily.slice(0, 5)
        console.log(weatherCollection);
    })
}

// create a function to convert timestamp to date 
const convertTime = () => {
    
const stamp = new Date();
const date = stamp.toLocaleDateString();
// Returns the date portion of a Date object as a string
return date;
}

// try to extract day from date using the following example
// public static String getDayStringNew(LocalDate date, Locale locale) {
//     DayOfWeek day = date.getDayOfWeek();
//     return day.getDisplayName(TextStyle.FULL, locale);
// }



  
const ForecastCard = (weatherObj) => {
    console.log(weatherObj);
    return `
   
                <ul list-style=none>
                        <li class ="day">${convertTime(weatherObj.dt)} </li>
                    <li class ="temp">${weatherObj.temp.day}°</li>
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
        const weatherElement = document.querySelector(".forecast");
    
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