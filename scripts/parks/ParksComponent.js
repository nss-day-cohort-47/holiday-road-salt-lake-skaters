export const parkComponent = (object) => {
    return `
    <h3>Park</h3>
    <ul>
        <li>Name: ${object.fullName}</li>
        <li>Location: ${object.addresses[0].city}, ${object.addresses[0].stateCode}</li>
    </ul>
    <button id="park-details">Details</button>`
}