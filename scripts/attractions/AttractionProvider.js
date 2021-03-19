import { attractionComponent, attractionDetailsComponent, attractionClear } from "./AttractionComponent.js"

let allAttractions = [];

const useAttractions = () => [...allAttractions];

const getAttractions = () => {
    return fetch("http://holidayroad.nss.team/bizarreries")
    .then(response => response.json())
    .then(parsedResponse => {
        allAttractions = parsedResponse
    })
}

const renderAttractions = (allAttractions) => {
    const attractionTarget = document.querySelector("#bizarre-select")

    let attractionOptions = allAttractions.map(singleAttractions => {
        return `<option value="${singleAttractions.id}">${singleAttractions.name}</option>`
    }).join("")

    attractionTarget.innerHTML = `
        <select name="bizarre" id="bizarre__dropdown">
            <option value="0">Select an Attraction</option>
            ${attractionOptions}
        </select>`
}

export const populateAttractions = () => {
    getAttractions()
    .then( () => {
        const goodAttractions = useAttractions()
        renderAttractions(goodAttractions)
    })
}

export const attractionListener = () => {

    document.addEventListener("change", event => {
    if(event.target.id === "bizarre__dropdown"){
        const attractionValue = parseInt(event.target.value)
        console.log(attractionValue)
        showAttraction(attractionValue)
    }
    })
}

export let currentAttraction = [];

const showAttraction = (eat) => { 
        getAttractions()
        .then( response => {
            return response;
        })
        .then( () => {
            const attractionArray = useAttractions().filter(oneAttraction => {
                if(oneAttraction.id === eat){
                    currentAttraction = oneAttraction
                    attractionClear()
                    return oneAttraction
                }
            })
            const attractionElement = document.querySelector(".itinerary-preview__attractions");
            attractionElement.innerHTML = attractionComponent(attractionArray[0])
        })
    }

export const attractionDetails = () => {
    document.addEventListener("click", event => {
        switch(event.target.id){
            case "attraction-details":
                const attractionElement = document.querySelector("#details-container__attraction");
                attractionElement.innerHTML = attractionDetailsComponent(currentAttraction);
        }
    })
    
}
