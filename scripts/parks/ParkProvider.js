import { settings } from "../Settings.js"
import { parkComponent, parkDetailsComponent, parkClear } from "./ParksComponent.js"
import { useWeatherCollection, weatherList} from "../weather/WeatherProvider.js"
import { saveEnabler } from "../SaveButtonComponent.js"

let allParks = []

const useParks = () => [...allParks]

const getParks = () => {
    return fetch(`https://developer.nps.gov/api/v1/parks?api_key=${settings.npsKey}`)
    .then(response => response.json())
    .then(
        parsedResponse => {
        allParks = parsedResponse.data
        
        return allParks;
    })

}

const render = (parkList) => {
    
    const parkTarget = document.querySelector("#national-park-select")
    
    let options = parkList.map(singlePark => {
        return `<option value="${singlePark.id}">${singlePark.fullName}</option>`
    }).join("")
    
    parkTarget.innerHTML = `
    <select id="national-park__dropdown">
                <option value="0">Select an Park</option>
                ${options}
            </select>`
}

export const populateParks = () => {
    getParks()
    .then( () => {
        const parks = useParks()
        render(parks)
    } )
}

export const parkListener = () => {

    document.addEventListener("change", event => {
        if(event.target.id === "national-park__dropdown"){
            const parkValue = event.target.value
            console.log(parkValue)
            showPark(parkValue)
            parkClear()
            saveEnabler()
        }
    })
}
export let lat = ""
export let long = ""

export let currentPark = [];

const showPark = (park) => {
    getParks()
    .then(response => {
        return response;
    })
    .then( () => {
        // is this the array to target for weather?
        const parkArray = useParks().filter(onePark => {
            if(onePark.id === park){
                currentPark = onePark
                // console.log(currentPark.description)
                lat = onePark.latitude
                long= onePark.longitude
                
                
                return onePark
            }
        })
        const parkElement = document.querySelector(".itinerary-preview__park");
        parkElement.innerHTML = parkComponent(parkArray[0])
    }
    ).then (() => { weatherList()
    })
    .then( () => {
        saveEnabler()
})
}

export const parkDetails = () => {
    document.addEventListener("click", event => {
        switch(event.target.id){
            case "park-details":
                const parkElement = document.querySelector("#details-container__park")
                parkElement.innerHTML = parkDetailsComponent(currentPark)
        }
    })
}
