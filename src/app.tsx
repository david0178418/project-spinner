
import React from 'react';
import { Wheel } from '@components/wheel';
import { ContextProvider } from './context-provider';

import './app.scss';

export
function App() {
	return (
		<ContextProvider>
			<Wheel />
		</ContextProvider>
	);
}
