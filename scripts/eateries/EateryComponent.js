export const eatComponent = (object) => {
    return `
    <h3>Eatery</h3>
    <ul>
        <li>Name: ${object.businessName}</li>
        <li>Location: ${object.city}, ${object.state}</li>
    </ul>
    <button id="eat-details">Details</button>`
}