export const attractionComponent = (object) => {
    return `
    <h3>Attraction</h3>
    <ul>
        <li>Name: ${object.name}</li>
        <li>Location: ${object.city}, ${object.state}</li>
    </ul>
    <button type="button" id="attraction-details">Details</button>`
};

export const attractionDetailsComponent = (object) => {
    return `
    <h3>Attraction Details</h3>
    <ul>
        <li>Description: ${object.description}</li>
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