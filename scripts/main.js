import { weatherList } from "./weather/WeatherProvider.js"

// showWeatherList();
weatherList();

import { populateEateries, eateryListener, eatDetails } from "./eateries/EateryProvider.js";
import { populateAttractions, attractionListener } from "./attractions/AttractionProvider.js";
import { populateParks, parkListener} from "./parks/ParkProvider.js"
import { saveListener } from "./saveButton.js";


populateAttractions();
populateEateries();
eateryListener();
populateParks();
attractionListener();
parkListener();
<<<<<<< HEAD
saveListener();
// saveButtonEnabler();
=======
eatDetails();
>>>>>>> f94528d5af1235e4b0ceb5ab8923a4830ea5984b
