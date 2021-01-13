import { createElement } from 'react';
import { render } from 'react-dom';
import { App } from './app';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiped-events';

render(
	createElement(App),
	document.getElementById('app'),
);

