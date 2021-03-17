export const attractionComponent = (object) => {
    return `
    <h3>Attraction</h3>
    <ul>
        <li>Name: ${object.name}</li>
        <li>Location: ${object.city}, ${object.state}</li>
    </ul>
    <button type="button" id="attraction-details">Details</button>`
}