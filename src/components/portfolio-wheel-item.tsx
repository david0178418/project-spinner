
import React from 'react';
import { PortfolioItem } from '@common/interfaces';
import { css } from 'linaria';
import clsx from 'clsx';

interface Props {
	item: PortfolioItem;
	vertical?: boolean;
}

export
function PortfolioWheelItem(props: Props) {
	const {
		item,
		vertical,
	} = props;

	return (
		(
			<div className={clsx('portfolio-item', porfolioItemCls, {
				[verticalCls]: vertical,
				[horizontalCls]: !vertical,
			})}>
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

const porfolioItemCls = css`
	display: flex;
`;

const horizontalCls = css`
	height: calc(var(--wheel-size) / 6);
`;

const verticalCls = css`
	flex-direction: column;
	width: calc(var(--wheel-size) / 6);
	position: absolute;
	left: 50%;
	margin: auto;
	transform: translateX(-50%);
`;
