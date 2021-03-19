import { currentEatery } from "./eateries/EateryProvider.js";
import { currentPark } from "./parks/ParkProvider.js";
import { currentAttraction } from "./attractions/AttractionProvider.js";

// const itineraryName = document.getElementById("itinerary-name").placeholder


export const apiObj = () => {
    const parkName = currentPark.fullName
    const eateryName = currentEatery.businessName
    const attractionName = currentAttraction.name

        const itinerary= {
       park: parkName,
       eatery: eateryName,
       attraction: attractionName
    }
    return itinerary
}

// export const clickListener = () => {
//     document.addEventListener("click", event => {
         
//      })
//  };