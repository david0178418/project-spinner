
import React, { useState, useContext } from 'react';
import { Wheel } from '@components/wheel';
import { items } from '@root/data';
import { PortfolioItem, Orientation } from '@common/interfaces';
import clsx from 'clsx';
import { useDebounce } from '@common/hooks';
import { OrientationContext } from '@common/contexts';

import './home.scss';

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
function HomePage() {
	const [selectedItemIndex, setSelectedItemIndex] = useState(0);
	const orientation = useContext(OrientationContext);

	const bufferedIndex = selectedItemIndex % items.length;
	const localIndex = useDebounce(bufferedIndex, 500);

	return (
		<div className={clsx('layout', {
			portrait: orientation === Orientation.Portrait,
			landscape: orientation === Orientation.Landscape,
		})}>
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
			<div className="right-pane">
				<Wheel
					orientation={orientation}
					items={items}
					selectedItemIndex={selectedItemIndex}
					size={{
						value: 100,
						units: orientation === Orientation.Landscape ?
							'vh' :
							'vw',
					}}
					onChange={setSelectedItemIndex}
					itemContent={(item) => (
						<Foo item={item} />
					)}
				/>
			</div>
		</div>
	);
}
