import { populateEateries, eateryListener, eatDetails } from "./eateries/EateryProvider.js";
import { populateAttractions, attractionListener, attractionDetails } from "./attractions/AttractionProvider.js";
import { populateParks, parkListener, parkDetails} from "./parks/ParkProvider.js"
import { saveListener } from "./saveButton.js";
import { weatherList } from "./weather/WeatherProvider.js"
import { saveButton } from "./SaveButtonComponent.js"

populateAttractions();
populateEateries();
eateryListener();
populateParks();
attractionListener();
parkListener();
saveListener();
// saveButtonEnabler();
eatDetails();
parkDetails();
attractionDetails();
// showWeatherList();
weatherList();
saveButton();