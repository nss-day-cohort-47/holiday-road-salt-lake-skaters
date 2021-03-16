// import {showWeatherList, } from "./weather/WeatherProvider.js"

// showWeatherList();

import { populateEateries } from "./eateries/EateryProvider.js";
import { clickListener, changeListener } from "./EventListeners.js"
import { populateParks } from "./parks/ParkProvider.js"

populateEateries();
clickListener();
changeListener();
populateParks();

