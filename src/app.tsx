
import React, { StrictMode } from 'react';
import { ContextProvider } from './context-provider';
import { HomePage } from '@pages/home';

import './app.scss';


export
function App() {
	return (
		<StrictMode>
			<ContextProvider>
				<HomePage />
			</ContextProvider>
		</StrictMode>
	);
}
