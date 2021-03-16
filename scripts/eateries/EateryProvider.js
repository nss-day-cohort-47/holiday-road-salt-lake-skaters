let allEateries = []

const useEateries = () => [...allEateries]

const getEateries = () => {
    return fetch("http://holidayroad.nss.team/eateries")
    .then(response => response.json())
    .then(
        parsedResponse => {
        allEateries = parsedResponse
        return parsedResponse

    })

}

const render = (allTheEateries) => {
    
    const eateryTarget = document.querySelector("#eatery-select")
    
    let options = allTheEateries.map(singleEatery => {
        return `<option value="${singleEatery.id}">${singleEatery.businessName}</option>`
    }).join("")
    
    eateryTarget.innerHTML = `
            <select name="eateries" id="eateries">
                <option value="0">Select an Eatery</option>
                ${options}
            </select>`
}

export const populateEateries = () => {
    getEateries()
    .then( () => {
        const goodEats = useEateries()
        render(goodEats)
    }

    )
}

export const eateryListener = () => { getEateries()
    .then( () => {
        const listenerArray = useEateries()
        console.log(listenerArray)

        const eatery = (eatObj) => {
            return eatObj.id
        }

        let eateryValue = "";

        for (const oneObject of listenerArray) {
            eateryValue += eatery(oneObject)
            console.log(eateryValue)
        }


    }
)
    
}


const dropdown = document.querySelector(".dropdown-container")


// document.addEventListener("click", event => {
//     switch(event.target.id){
//         case `${listenerArray.id}`:
//             console.log(`You clicked ${listenerArray.id}`)
//             break;
//         default:
//             console.log("There is nothing selected, only Zuul")
//     }
// })