import { weatherList } from "./weather/WeatherProvider.js"
import { populateEateries, eateryListener, eatDetails } from "./eateries/EateryProvider.js";
import { populateAttractions, attractionListener, attractionDetails } from "./attractions/AttractionProvider.js";
import { populateParks, parkListener, parkDetails} from "./parks/ParkProvider.js"
import { saveListener } from "./saveButton.js";

weatherList();
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


