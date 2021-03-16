import { populateEateries, eateryListener } from "./eateries/EateryProvider.js";
import { clickListener, changeListener } from "./EventListeners.js"

populateEateries();

clickListener();
changeListener();
eateryListener();
