import { populateEateries } from "./eateries/EateryProvider.js";
import { clickListener, changeListener } from "./EventListeners.js";
import { populateAttractions } from "./attractions/AttractionProvider.js";

populateAttractions();
populateEateries();
clickListener();
changeListener();
