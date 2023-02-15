import { StrictMode } from 'react';
import { ContextProvider } from './context-provider';
import { Routes } from './routes';
import { OrientationWrapper } from '@components/orientation-wrapper';

import './app.css';

export
function App() {
	return (
		<StrictMode>
			<ContextProvider>
				<OrientationWrapper>
					<Routes />
				</OrientationWrapper>
			</ContextProvider>
		</StrictMode>
	);
}
