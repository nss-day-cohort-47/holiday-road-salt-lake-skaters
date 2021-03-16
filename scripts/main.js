// import {showWeatherList, } from "./weather/WeatherProvider.js"

// showWeatherList();

import { populateEateries } from "./eateries/EateryProvider.js";
import { clickListener, changeListener } from "./EventListeners.js";
import { populateAttractions } from "./attractions/AttractionProvider.js";
import { populateParks } from "./parks/ParkProvider.js"

populateAttractions();
populateEateries();
clickListener();
changeListener();
populateParks();

