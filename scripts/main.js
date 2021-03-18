import { weatherList } from "./weather/WeatherProvider.js"


// showWeatherList();
weatherList();

import { populateEateries, eateryListener, eatDetails } from "./eateries/EateryProvider.js";
import { populateAttractions, attractionListener, attractionDetails } from "./attractions/AttractionProvider.js";
import { populateParks, parkListener, parkDetails} from "./parks/ParkProvider.js"

populateAttractions();
populateEateries();
eateryListener();
populateParks();
attractionListener();
parkListener();
eatDetails();
parkDetails();
attractionDetails();