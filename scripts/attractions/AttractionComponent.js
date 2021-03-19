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

const clearComponent = () => {
    return ``
}

export const attractionClear = () => {
    const clearElement = document.querySelector("#details-container__attraction")
    clearElement.innerHTML = clearComponent()
}