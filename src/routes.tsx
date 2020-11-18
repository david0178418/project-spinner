import React from 'react';
import {
	Switch,
	Route,
	BrowserRouter as Router,
} from 'react-router-dom';
import urlJoin from 'url-join';
import { AnimatePresence } from 'framer-motion';
import { HomePage } from '@pages/home.page';
import { CategoryPage } from '@pages/category.page';
import { RoutePaths } from '@common/types';

const CategoryPath = urlJoin(RoutePaths.Category, ':categoryId');

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
								path={CategoryPath}
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
