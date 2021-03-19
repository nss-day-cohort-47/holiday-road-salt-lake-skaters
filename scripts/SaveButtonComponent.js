import { currentAttraction } from "./attractions/AttractionProvider.js"
import { currentEatery } from "./eateries/EateryProvider.js"
import { currentPark } from "./parks/ParkProvider.js"

const saveButtonComponent = () => {
    return `<button type="button" id="itinerary__save" disabled>Save</button>`
}

export const saveButton = () => {
    const saveComponent = document.querySelector("#save_button")
    saveComponent.innerHTML = saveButtonComponent()
}

const saveEnabled = () => {
    return `<button type="button" id="itinerary__save">Save</button>`
}

const saveButtonEnabled = () => {
    const saveComponent = document.querySelector("#save_button")
    saveComponent.innerHTML = saveEnabled()}

export const saveEnabler = () => {
    if(currentAttraction.length !== 0 && currentEatery.length !== 0 && currentPark.length !== 0) {
        saveButtonEnabled()
    }
}