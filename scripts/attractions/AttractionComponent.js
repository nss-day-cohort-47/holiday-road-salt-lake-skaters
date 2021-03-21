export const attractionComponent = (object) => {
    return `
    <h3>Attraction</h3>
    <ul>
        <li><b>Name:</b> ${object.name}</li>
        <li><b>Location:</b> ${object.city}, ${object.state}</li>
    </ul>
    <button type="button" id="attraction-details">Details</button>`
};

export const attractionDetailsComponent = (object) => {
    return `
    <h3>Attraction Details</h3>
    <ul>
        <li><b>Description:</b> ${object.description}</li>
        <li><b>Restrooms:</b> ${object.ameneties.restrooms}</li>
    </ul>`
}

// Sets details field to an empty space "resetting" that area
const clearComponent = () => {
    return ``
}

// Sets HTML on the DOM to the empty string in clearComponent
export const attractionClear = () => {
    const clearElement = document.querySelector("#details-container__attraction")
    clearElement.innerHTML = clearComponent()
}