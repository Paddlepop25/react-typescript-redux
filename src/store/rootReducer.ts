import { combineReducers } from "redux";

// reducers
import cakeReducer from "./Cake/CakeReducer";
import festivalReducer from "./Festivals/FestivalReducer";
import iceCreamReducer from "./IceCream/IceCreamReducer";
import userReducer from "./Users/UserReducer";
import bugReducer from "./Bugs/BugReducer";
import pokemonReducer from "./Pokemon/PokemonReducer";
import weatherReducer from "./Weather/WeatherReducer";
import goalReducer from "./Goals/GoalReducer";

export const rootReducer = combineReducers({
	cake: cakeReducer,
	iceCream: iceCreamReducer,
	usersData: userReducer,
	festives: festivalReducer,
	bugs: bugReducer,
	pokemon: pokemonReducer,
	weather: weatherReducer,
	goals: goalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
