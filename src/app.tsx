
import React, { useState, StrictMode } from 'react';
import { Wheel } from '@components/wheel';
import { ContextProvider } from './context-provider';
import { items } from '@root/data';

import './app.scss';
import { PortfolioItem } from '@common/interfaces';
import clsx from 'clsx';
import { useDebounce } from '@common/hooks'

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
	
	const bufferedIndex = selectedItemIndex % items.length;
	const localIndex = useDebounce(bufferedIndex, 500);

	return (
		<StrictMode>
			<ContextProvider>
				<div className="layout">
					<div className="left-pane">
						Active Index {selectedItemIndex}<br/>
						<div>
							<button onClick={() => setSelectedItemIndex(selectedItemIndex + 1)}>
								Up
							</button>
							<button onClick={() => setSelectedItemIndex(selectedItemIndex - 1)}>
								Down
							</button>
						</div>
						{items.map((item, i) => (
							<div
								key={i}
								className={clsx('main-image-container', {
									active: i === localIndex
								})}
							>
								{item.label}<br/>
								<img loading="lazy" src={item.mainImage} />
							</div>
						))}
					</div>
					<div>
						<Wheel
							size={{
								value: 100,
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
		</StrictMode>
	);
}
