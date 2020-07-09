
import React from 'react';
import { Wheel } from '@components/wheel';
import { ContextProvider } from './context-provider';
import { items } from '@root/data';

import './app.scss';

function Foo(props: any) {
	const {
		item,
	} = props;

	return (
		(
			<div className="portfolio-item">
				{item.image && (
					<img className="wheel-logo" src={item.image}/>
				)}
				<div className="wheel-label">
					{item.label}
				</div>
			</div>
		)
	);
}

export
function App() {
	return (
		<ContextProvider>
			<Wheel
				size={600}
				items={items}
				onChange={console.log}
				itemContent={(item) => (
					<Foo item={item} />
				)}
			/>
		</ContextProvider>
	);
}
