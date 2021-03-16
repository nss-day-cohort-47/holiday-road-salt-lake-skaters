// import {showWeatherList, } from "./weather/WeatherProvider.js"

// showWeatherList();

import { populateEateries } from "./eateries/EateryProvider.js";
import { clickListener, changeListener } from "./EventListeners.js"

populateEateries();

clickListener();
changeListener();
