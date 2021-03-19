export const parkComponent = (object) => {
    return `
    <h3>Park</h3>
    <ul>
        <li>Name: ${object.fullName}</li>
        <li>Location: ${object.addresses[0].city}, ${object.addresses[0].stateCode}</li>
    </ul>
    <button id="park-details">Details</button>`
}

export const parkDetailsComponent = (object) => {
    return `
    <h3>Park Details</h3>
    <ul>
        <li>Description: ${object.description}</li>
    </ul>
    `
}

// Sets details field to an empty space "resetting" that area
const clearComponent = () => {
    return ``
}

// Sets HTML on the DOM to the empty string in clearComponent
export const parkClear = () => {
    const clearElement = document.querySelector("#details-container__park")
    clearElement.innerHTML = clearComponent()
}