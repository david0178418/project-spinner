import { createRoot } from 'react-dom/client';
import { App } from './app';

import 'swiped-events';

const el = document.getElementById('app');

if(el) {
	const root = createRoot(el);
	
	root.render(App());
}
