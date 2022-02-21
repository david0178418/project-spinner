import { useState, useContext } from 'react';
import { css } from 'linaria';
import { Wheel } from '@components/wheel';
import { Orientation, PortfolioItem } from '@common/types';
import { MainContent } from '@components/main-content';
import { OrientationContext } from '@common/contexts';
import { PortfolioWheelItem } from '@components/portfolio-wheel-item';

interface Props {
	items: PortfolioItem[];
}

export
function WheelView({items}: Props) {
	const [selectedItemIndex, setSelectedItemIndex] = useState(0);
	const orientation = useContext(OrientationContext);
	const verticalWheel = orientation === Orientation.Landscape;
	const verticalMainContent = !verticalWheel;

	return (
		<div className={`layout ${layout}`}>
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
						<PortfolioWheelItem
							item={item}
							vertical={!verticalWheel}
						/>
					)}
				/>
			</div>
			<div className="instructions">
				<ion-icon name="information-circle-outline"></ion-icon> Navigate with arrow keys.<br/>
				<ion-icon name="alert-circle-outline"></ion-icon> Incomplete and under construction.
			</div>
		</div>
	);
}

const layout = css`{
	display: flex;
	overflow: hidden;

	.instructions {
		position: fixed;
		left: 20px;
		bottom: 20px;
		font-size: 20px;
		color: #c1c1c1;

		.portrait & {
			display: none;
		}
	}

	.left-pane {
		flex: 1;
		position: relative;
	}

	.landscape & {
		flex-flow: row;
		.right-pane {
			min-width: 300px;
			max-width: 400px;
			width: 30%;
		}
	}

	.portrait & {
		flex-flow: column;
		height: 100vh;

		.left-pane,
		.right-pane {
			width: 100%;
			position: relative;
			height: 30%;
		}

		.left-pane {
			height: 30%;
			width: 100%;
		}
	}
}`;
