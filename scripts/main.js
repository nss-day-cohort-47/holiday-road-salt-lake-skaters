import {showWeatherList, } from "./weather/WeatherProvider.js"

showWeatherList();

import { populateEateries, eateryListener } from "./eateries/EateryProvider.js";
import { clickListener, changeListener } from "./EventListeners.js";
import { populateAttractions } from "./attractions/AttractionProvider.js";
import { populateParks, parkListener } from "./parks/ParkProvider.js"

populateAttractions();
populateEateries();
clickListener();
changeListener();
eateryListener();
populateParks();
parkListener();
