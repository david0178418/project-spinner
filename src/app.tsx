import React, { StrictMode } from 'react';
import { ContextProvider } from './context-provider';
import { Routes } from './routes';

import './app.scss';

export
function App() {
	return (
		<StrictMode>
			<ContextProvider>
				<Routes />
			</ContextProvider>
		</StrictMode>
	);
}
