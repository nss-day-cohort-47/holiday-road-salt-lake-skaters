export const eatComponent = (object) => {
    return `
    <h3>Eatery</h3>
    <ul>
        <li>Name:${object.businessName}</li>
        <li>City:${object.city}</li>
    </ul>
    <input id="itinerary-name" type="text" placeholder="Name your adventure">
    <button id="itinerary__save">Save</button>`
}