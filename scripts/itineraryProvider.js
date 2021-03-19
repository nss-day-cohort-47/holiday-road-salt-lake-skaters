import { itineraryHTML } from "./apiObject.js";

let allItineraries = [];

export const useItineraries = () => {
    return [...allItineraries]
}

export const getItineraries = () => {
    return fetch("http://localhost:8090/itineraries")
    .then(response => response.json())
    .then(response => {
        allItineraries = response;
        return response
    })
}

export const postItinerary = (postEntry) => {
    return fetch("http://localhost:8090/itineraries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postEntry)
    })
    .then(response => response.json())
}

export const itineraryList = (itinList) => {
    let itinHTML = "";
    for (const singleObj of itinList) {
        itinHTML += itineraryHTML(singleObj); 
    }
    return itinHTML;
}