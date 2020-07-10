
import React, { useState } from 'react';
import { Wheel } from '@components/wheel';
import { ContextProvider } from './context-provider';
import { items } from '@root/data';

import './app.scss';
import { PortfolioItem } from '@common/interfaces';

interface FooProps {
	item: PortfolioItem;
}

function Foo(props: FooProps) {
	const {
		item,
	} = props;

	return (
		(
			<div className="portfolio-item">
				{item.wheelImage && (
					<img className="wheel-logo" src={item.wheelImage}/>
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
	const [selectedItemIndex, setSelectedItemIndex] = useState(0);

	return (
		<ContextProvider>
			<div className="layout">
				<div>
					foo
				</div>
				<div>
					<Wheel
						size={{
							value: 90,
							units: "vh"
						}}
						items={items}
						selectedItemIndex={selectedItemIndex}
						onChange={i => {
							console.log(i);
							setSelectedItemIndex(i);
						}}
						itemContent={(item) => (
							<Foo item={item} />
						)}
					/>
				</div>
			</div>
		</ContextProvider>
	);
}
