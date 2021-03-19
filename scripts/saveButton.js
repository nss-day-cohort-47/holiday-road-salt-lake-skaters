import { apiObj, itineraryHTML } from "./apiObject.js"
import { getItineraries, postItinerary } from "./itineraryProvider.js"
import { itineraryList } from "./itineraryProvider.js"

const selectedPark = document.getElementById("national-park__dropdown")
const selectedEatery = document.getElementById("eateries__dropdown")
const selectedAttraction = document.getElementById("bizarre__dropdown")
const saveButton = document.getElementById("itinerary__save")
const itinerarySlot = document.querySelector(".saved-itinerary")


export const saveListener = () => {
    document.addEventListener("click", event => {
        if (event.target.id === "itinerary__save") {
            postItinerary(apiObj())
            .then( result => {
                itinerarySlot.innerHTML += itineraryHTML(result)

            }
            )
        }
     })
 };


 