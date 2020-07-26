import React, { StrictMode } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import { ContextProvider } from './context-provider';
import { HomePage } from '@pages/home.page';

import './app.scss';

export
function App() {
	return (
		<StrictMode>
			<ContextProvider>
				<Router>
					<Switch>
						<Route
							path="/:id?"
							component={HomePage}
						/>
					</Switch>
				</Router>
			</ContextProvider>
		</StrictMode>
	);
}
