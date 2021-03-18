
export const clickListener = () => {
   document.addEventListener("click", event => {
        switch(event.target.id){
            case "park__details":
                console.log("You clicked park details")
                break;
            case "eatery__details":
                console.log("You clicked eatery details")
                break;
            case "biz__details":
                console.log("You clicked bizarreries details")
                break;
            case "itinerary__save":
                console.log("You clicked save")
        }
    })
};







// export const changeListener = () => {
//     document.addEventListener("change", event => {
//         switch(event.target.id){
//             case "national-park__dropdown":
//                 switch(event.target.value){
//                     case "1":
//                         console.log("You selected Yosemite")
//                         break;
//                     case "2": 
//                         console.log("You selected Niagara")
//                     default: 
//                         console.log("There is nothing selected, only Zuul")
//                 }
//             case "eateries__dropdown":
//                 switch(event.target.value){
//                     case "bob":
//                         console.log("You selected Bob's Burgers")
//                 }
//             case "bizarre__dropdown":
//                 switch(event.target.value){
//                 case "beard":
//                 console.log("You selected the Bearded Lady")
//                 }

//         }
//     })
// }