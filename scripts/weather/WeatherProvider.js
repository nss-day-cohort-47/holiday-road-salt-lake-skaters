// imported API key 
import { settings } from "../Settings.js"
import { lat, long } from "../parks/ParkProvider.js"

// array that holds copy of useWeatherCollection
let weatherCollection = [];


// function that returns copy of useWeatherCollection array
export const useWeatherCollection = () => {
    return [...weatherCollection];
}

// created a function that fetchs forecast from API then return parsed array
// used an if else statement to show nashville forecast if park is not selected
// else show forecast for park area selected
export const getWeather = () => {
    if (lat.length === 0) {
        return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=36.1627&lon=-86.7816&exclude=current,minutely,hourly,alerts&units=imperial&appid=${settings.weatherKey}`)
            .then(response => response.json())
            .then(parsedResponse => {
                weatherCollection = parsedResponse.daily.slice(0, 5)
            })
    }

    else {
        return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=current,minutely,hourly,alerts&units=imperial&appid=${settings.weatherKey}`)
            .then(response => response.json())
            .then(parsedResponse => {
                weatherCollection = parsedResponse.daily.slice(0, 5)
            })


    }
}

// create a function to convert timestamp to date 
const convertTime = (date) => {


    const newDate = new Date(date * 1000)
    let days = newDate.toLocaleDateString("en-US", { weekday: "long" });
    // Returns the date portion of a Date object as a string
    // converts date to show weekday only

    return days;
}


const ForecastCard = (weatherObj) => {
    console.log(weatherObj);
    return `
   
                <ul>
                        <li class ="day"><strong>${convertTime(weatherObj.dt)} </strong></li>
                    <li class ="temp">${weatherObj.temp.day}°</li>
                    <li class = "description">${weatherObj.weather[0].description}</li>
                </ul>
    `
}
// create and export function 
export const weatherList = () => {
    let weatherHTML = "";
    getWeather().then(() => {
        const weatherArray = useWeatherCollection();
        console.log(weatherArray);
        for (const day of weatherArray) {
            weatherHTML += ForecastCard(day)

        }
        const weatherElement = document.querySelector(".forecast");

        getWeather().then(() => {
            weatherElement.innerHTML = weatherHTML;
        })
    })
}

