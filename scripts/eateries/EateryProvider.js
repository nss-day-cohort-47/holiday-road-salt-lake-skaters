import { saveEnabler } from "../SaveButtonComponent.js"
import { eatComponent, eatDetailsComponent, eatClear } from "./EateryComponent.js"
let allEateries = []

const useEateries = () => [...allEateries]

const getEateries = () => {
    return fetch("http://holidayroad.nss.team/eateries")
    .then(response => response.json())
    .then(
        parsedResponse => {
        allEateries = parsedResponse
    })

}

const renderEats = (allTheEateries) => {
    
    const eateryTarget = document.querySelector("#eatery-select")
    
    let options = allTheEateries.map(singleEatery => {
        return `<option value="${singleEatery.id}">${singleEatery.businessName}</option>`
    }).join("")
    
    eateryTarget.innerHTML = `
            <select name="eateries" id="eateries__dropdown">
                <option value="0">Select an Eatery</option>
                ${options}
            </select>`
}

export const populateEateries = () => {
    getEateries()
    .then( () => {
        const goodEats = useEateries()
        renderEats(goodEats)
    }

    )
}

export const eateryListener = () => {

        document.addEventListener("change", event => {
        if(event.target.id === "eateries__dropdown"){
            const eateryValue = parseInt(event.target.value)
            console.log(eateryValue)
            showEatery(eateryValue)
            eatClear()       
            
            
        }
        })
}

export let currentEatery = [];

const showEatery = (eat) => { 
    getEateries()
    .then( () => {
        const eateryArray = useEateries().filter(oneEatery => {
            if(oneEatery.id === eat){
                currentEatery = oneEatery
                return oneEatery
                    }
                })
        const eatElement = document.querySelector(".itinerary-preview__eat");
        eatElement.innerHTML = eatComponent(eateryArray[0])
            })
            .then( () => {
                saveEnabler()
           })
        }

export const eatDetails = () => {
    document.addEventListener("click", event => {
        switch(event.target.id){
            case "eat-details":
                const eatElement = document.querySelector("#details-container__eatery")
                eatElement.innerHTML = eatDetailsComponent(currentEatery);

        }
    })
}