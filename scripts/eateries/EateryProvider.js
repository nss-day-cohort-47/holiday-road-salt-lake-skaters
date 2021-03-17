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

// UNDER CONSTRUCTION=================================================
const eatComponent = (object) => {
    return `
    <h3>Preview Box</h3>
    <ul>
        <li>Name:${object.businessName}</li>
        <li>City:${object.city}</li>
    </ul>
    <input id="itinerary-name" type="text" placeholder="Name your adventure">
    <button id="itinerary__save">Save</button>`
}
export const eateryListener = () => {

        document.addEventListener("change", event => {
        if(event.target.id === "eateries"){
            const eateryValue = event.target.value
            showEatery(eateryValue)
        }
        })

        const showEatery = (eat) => { 
            getEateries()
            .then( response => {
                return response;
                
            })
            .then( () => {
                const eateryArray = useEateries().filter(oneEatery => {
                    if(oneEatery.id === eat){
                        return oneEatery
                    }
                })
                    const eatElement = document.querySelector(".itinerary-preview__box");
                    eatElement.innerHTML = eatComponent(eateryArray)
            })

            
        }

}




        // const eateryArray = useEateries().filter(singleObject => {
        //     if(singleObject.id === eateryValue){
        //         return singleObject
        //     }
        // })
        // console.log(eateryArray)
        // if (eateryArray.id === eateryValue){
        //     console.log("it fucking worked!")
        // }