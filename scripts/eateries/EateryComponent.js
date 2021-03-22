export const eatComponent = (object) => {
    return `
    <h3>Eatery</h3>
    <ul>
        <li><b>Name:</b> ${object.businessName}</li>
        <li><b>Location:</b> ${object.city}, ${object.state}</li>
    </ul>
    <button id="eat-details">Details</button>`
}

export const eatDetailsComponent = (object) => {
    return `
    <h3>Eatery Details</h3>
    <ul>
        <li><b>Description:</b> ${object.description}</li>
        <li><b>Restrooms:</b> ${object.ameneties.restrooms}</li>
        <li><b>Wifi:</b> ${object.ameneties.wifi}</li>
    </ul>`
}

// Sets details field to an empty space "resetting" that area
const clearComponent = () => {
    return ``
}

// Sets HTML on the DOM to the empty string in clearComponent
export const eatClear = () => {
    const clearElement = document.querySelector("#details-container__eatery")
    clearElement.innerHTML = clearComponent()
}