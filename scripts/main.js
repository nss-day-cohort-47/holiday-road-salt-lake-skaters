import { weatherList } from "./weather/WeatherProvider.js"


// showWeatherList();
weatherList();

import { populateEateries, eateryListener } from "./eateries/EateryProvider.js";
import { clickListener, changeListener } from "./EventListeners.js";
import { populateAttractions, attractionListener } from "./attractions/AttractionProvider.js";
import { populateParks, parkListener} from "./parks/ParkProvider.js"

populateAttractions();
populateEateries();
clickListener();
changeListener();
eateryListener();
populateParks();
attractionListener();
parkListener();
