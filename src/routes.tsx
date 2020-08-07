import React from 'react';
import {
	Switch,
	Route,
	BrowserRouter as Router,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HomePage } from '@pages/home.page';
import { CategoryPage } from '@pages/category.page';


export
function Routes() {
	return (
		<Router>
			<Route
				render={({ location }) => (
					<AnimatePresence exitBeforeEnter initial={false}>
						<Switch location={location} key={location.pathname}>
							<Route
								exact
								path="/category/:categoryId"
								component={CategoryPage}
							/>
							<Route
								exact
								path="/"
								component={HomePage}
							/>
						</Switch>
					</AnimatePresence>
				)}
			/>
		</Router>
	);
}
