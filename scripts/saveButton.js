import { apiObj } from "./apiObject.js"
import { postItinerary } from "./itineraryProvider.js"

const selectedPark = document.getElementById("national-park__dropdown")
const selectedEatery = document.getElementById("eateries__dropdown")
const selectedAttraction = document.getElementById("bizarre__dropdown")
const saveButton = document.getElementById("itinerary__save")

// export const saveButtonEnabler = () => {
//     if (selectedPark.value !== "0" && selectedEatery.value !== "0" && selectedAttraction.value !== "0") {
//        saveButton.disabled = false;
//     }

// }

export const saveListener = () => {
    document.addEventListener("click", event => {
        if (event.target.id === "itinerary__save") {
            postItinerary(apiObj())
        }
     })
 };


 