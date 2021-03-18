export const eatComponent = (object) => {
    return `
    <h3>Eatery</h3>
    <ul>
        <li>Name: ${object.businessName}</li>
        <li>Location: ${object.city}, ${object.state}</li>
    </ul>
    <button id="eat-details">Details</button>`
}

export const eatDetailsComponent = (object) => {
    return `
    <h3>Eatery Details</h3>
    <ul>
        <li>Description: ${object.description}</li>
    </ul>`
}