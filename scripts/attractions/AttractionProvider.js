let allAttractions = [];

const useAttractions = () => [...allAttractions];

const getAttractions = () => {
    return fetch("http://holidayroad.nss.team/bizarreries")
    .then(response => response.json())
    .then(parsedResponse => {
        allAttractions = parsedResponse
    })
}

const renderAttractions = (allAttractions) => {
    const attractionTarget = document.querySelector("#bizarre-select")

    let attractionOptions = allAttractions.map(singleAttractions => {
        return `<option value="${singleAttractions.id}">${singleAttractions.name}</option>`
    }).join("")

    attractionTarget.innerHTML = `
        <select name="bizarre" id="bizarre__dropdown">
            <option value="0">Select an Attraction</option>
            ${attractionOptions}
        </select>`
}

export const populateAttractions = () => {
    getAttractions()
    .then( () => {
        const goodAttractions = useAttractions()
        renderAttractions(goodAttractions)
    })
}