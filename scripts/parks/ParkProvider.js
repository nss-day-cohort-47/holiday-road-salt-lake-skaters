import { settings } from "../Settings.js"
import { parkComponent } from "./ParksComponent.js"


let allParks = []

const useParks = () => [...allParks]

const getParks = () => {
    return fetch(`https://developer.nps.gov/api/v1/parks?api_key=${settings.npsKey}`)
    .then(response => response.json())
    .then(
        parsedResponse => {
        allParks = parsedResponse.data
        
        return allParks.data;
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
    }

    )
}

export const parkListener = () => {

    document.addEventListener("change", event => {
        if(event.target.id === "national-park__dropdown"){
            const parkValue = event.target.value
            console.log(parkValue)
            showPark(parkValue)
        }
    })
}

const showPark = (park) => {
    getParks()
    .then(response => {
        return response;
    })
    .then( () => {
        const parkArray = useParks().filter(onePark => {
            if(onePark.id === park){
                return onePark
            }
        })
        const parkElement = document.querySelector(".itinerary-preview__park");
        parkElement.innerHTML = parkComponent(parkArray[0])
    })
}