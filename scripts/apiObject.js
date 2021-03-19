import { currentEatery } from "./eateries/EateryProvider.js";
import { currentPark } from "./parks/ParkProvider.js";
import { currentAttraction } from "./attractions/AttractionProvider.js";


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

export const itineraryHTML = (apiObject) => {
    return `
            <ul>
                <li>National Park: ${apiObject.park}</li>
                <li>Restaurant: ${apiObject.eatery}</li>
                <li>Attraction: ${apiObject.attraction}</li>
            </ul> 
            <hr>`
}