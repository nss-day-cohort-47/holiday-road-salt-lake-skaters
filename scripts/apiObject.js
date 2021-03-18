const selectedPark = document.getElementById("national-park__dropdown")
const selectedEatery = document.getElementById("eateries__dropdown")
const selectedAttraction = document.getElementById("bizarre__dropdown")

export const apiObj = () => {
    const parkName = selectedPark.options[selectedPark.selectedIndex].text
    const eateryName = selectedEatery.options[selectedEatery.selectedIndex].text
    const attractionName = selectedAttraction.options[selectedAttraction.selectedIndex].text

        const itinerary= {
       park: parkName,
       eatery: eateryName,
       attraction: attractionName
    }
    return itinerary
}

// export const clickListener = () => {
//     document.addEventListener("click", event => {
         
//      })
//  };