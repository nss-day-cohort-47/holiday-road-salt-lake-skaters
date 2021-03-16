let allEateries = []

const useEateries = () => [...allEateries]

const getEateries = () => {
    return fetch("http://holidayroad.nss.team/eateries")
    .then(response => response.json())
    .then(
        parsedResponse => {
        allEateries = parsedResponse

    })

}

const renderEats = (allTheEateries) => {
    
    const eateryTarget = document.querySelector("#eatery-select")
    
    let options = allTheEateries.map(singleEatery => {
        return `<option value="${singleEatery.id}">${singleEatery.businessName}</option>`
    }).join("")
    
    eateryTarget.innerHTML = `
            <select name="eateries" id="eateries__dropdown">
                <option value="0">Select an Eatery</option>
                ${options}
            </select>`
}

export const populateEateries = () => {
    getEateries()
    .then( () => {
        const goodEats = useEateries()
        renderEats(goodEats)
    })
}