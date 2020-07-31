import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import { HomePage } from '@pages/home.page';
import { CategoryPage } from '@pages/category.page';


export
function Routes() {
	return (
		<Router>
			<Switch>
				<Route
					path="/category/:categoryId"
					component={CategoryPage}
				/>
				<Route
					path="/"
					component={HomePage}
				/>
			</Switch>
		</Router>
	);
}
