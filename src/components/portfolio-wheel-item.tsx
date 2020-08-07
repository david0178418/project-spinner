
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
	background: linear-gradient(357deg, rgba(19,16,16,1) 0%, rgba(68,59,59,1) 160%);
	border: 5px solid transparent;
	padding: .5rem;
	border-radius: 5px;
	border-image-source: linear-gradient(to right, grey 0%, darkgrey 100%); 
	border-image-slice: 5;
	box-sizing: border-box;

`;

const horizontalCls = css`
	height: 100%;
`;

const verticalCls = css`
	flex-direction: column;
	width: calc(var(--wheel-size) / 6);
	position: absolute;
	left: 50%;
	margin: auto;
	transform: translateX(-50%);
`;
