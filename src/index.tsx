import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// route
import { BrowserRouter as Router, Route } from "react-router-dom";

// components
import CakeBoth from "./components/CakeBoth";
import IceCream from "./components/IceCream";

// redux
import { Provider } from "react-redux";
import store from "./store/store";
import Users from "./components/Users";
import FestivalsDisplay from "./components/FestivalsDisplay";
import Bugs from "./components/Bugs";
import Pokemon from "./components/Pokemon";
import Weather from "./components/Weather/Weather";
import Goals from "./components/Goals/Goals";

// style
import { ThemeProvider } from "styled-components";
import * as theme from "./styles/styledTheme";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<Router>
					<Route exact path='/' component={App} />
					<Route path='/icecreams' component={IceCream} />
					<Route path='/cakes' component={CakeBoth} />
					<Route path='/users' component={Users} />
					<Route path='/festivals' component={FestivalsDisplay} />
					<Route path='/bugs' component={Bugs} />
					<Route path='/pokemon' component={Pokemon} />
					<Route path='/weather' component={Weather} />
					<Route path='/goals' component={Goals} />
				</Router>
			</ThemeProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
