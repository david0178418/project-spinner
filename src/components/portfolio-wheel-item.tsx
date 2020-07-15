
import React from 'react';
import { PortfolioItem } from '@common/interfaces';

interface Props {
	item: PortfolioItem;
}

export
function PortfolioWheelItem(props: Props) {
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
