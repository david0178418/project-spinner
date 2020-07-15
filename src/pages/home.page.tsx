
import React, { useState, useContext } from 'react';
import { Wheel } from '@components/wheel';
import { items } from '@root/data';
import { PortfolioItem, Orientation } from '@common/interfaces';
import clsx from 'clsx';
import { MainContent } from '@components/main-content';
import { OrientationContext } from '@common/contexts';
import { css } from 'linaria';

const layout = css`
	display: grid;
	overflow: hidden;

	.left-pane {
		position: relative;
	}

	&.landscape {
		grid-template-columns: auto 50vh;
		
		.left-pane {
			height: 100%;
		}
	}

	&.portrait {
		grid-template-rows: 50vw auto;
		height: 100vh;

		.left-pane,
		.right-pane {
			width: 100%;
			position: relative;
		}

		.left-pane {
			width: 100%;
		}

		.wheel {
			bottom: 0;
			margin: 0 auto;
			position: absolute;
		}
	}
`;

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
		<div className={clsx('layout', layout, {
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
