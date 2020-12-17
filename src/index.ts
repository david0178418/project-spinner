import { createElement } from 'react';
import { render } from 'react-dom';
import { App } from './app';
import 'swiped-events';

render(
	createElement(App),
	document.getElementById('app'),
);

