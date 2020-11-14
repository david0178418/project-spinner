
import React from 'react';
import { css } from 'linaria';
import clsx from 'clsx';
import { PortfolioItem } from '@common/interfaces';

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
				<div className="wheel-logo">
					{item.wheelIcon && (
						<ion-icon
							name={item.wheelIcon}
							style={{
								color: item.wheelIconColor || 'white',
							}}
						/>
					)}
					{item.wheelImage && (
						<img src={item.wheelImage}/>
					)}
				</div>
				<div className="wheel-label">
					{item.label}
				</div>
			</div>
		)
	);
}

const porfolioItemCls = css`
	color: white;
	display: flex;
	padding: .5rem;
	box-sizing: border-box;

	.wheel-logo {
		& > img {
			max-height: 100%;
			max-width: 100%;
		}
	}
`;

const horizontalCls = css`
	height: 100%;

	ion-icon {
		font-size: 88px;
	}

	.wheel-logo {
		align-items: center;
		display: flex;
		flex: 1;
		text-align: center;
	}

	.wheel-label {
		flex: 3;
		align-items: center;
		display: flex;
		font-weight: bold;
		font-size: 30px;
		font-style: italic;
		padding-left: 25px;
	}
`;

const verticalCls = css`
	flex-direction: column;
	width: calc(var(--wheel-size) / 6);
	position: absolute;
	left: 50%;
	margin: auto;
	transform: translateX(-50%);

	ion-icon {
		width: 100%;
		height: 50px;
	}
`;
