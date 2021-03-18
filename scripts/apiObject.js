import { currentEatery } from "./eateries/EateryProvider.js";



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