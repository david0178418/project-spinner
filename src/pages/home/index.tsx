
import React, { useState, useContext } from 'react';
import { Wheel } from '@components/wheel';
import { items } from '@root/data';
import { PortfolioItem, Orientation } from '@common/interfaces';
import clsx from 'clsx';
import { MainContent } from '@components/main-content';
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
	const verticalWheel = orientation === Orientation.Landscape
	const verticalMainContent = !verticalWheel;

	return (
		<div className={clsx('layout', {
			portrait: orientation === Orientation.Portrait,
			landscape: orientation === Orientation.Landscape,
		})}>
			<div className="left-pane">
				<MainContent
					items={items}
					selectedIndex={selectedItemIndex}
					vertical={verticalMainContent}
				/>
			</div>
			<div className="right-pane">
				<Wheel
					vertical={verticalWheel}
					items={items}
					selectedItemIndex={selectedItemIndex}
					size={{
						value: 100,
						units: verticalWheel ?
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
