
import React from 'react';
import { css } from 'linaria';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import urlJoin from 'url-join';
import { PortfolioItem, RoutePaths } from '@common/types';

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
			<>
				{!!item.link && (
					<a className={clsx('portfolio-item', porfolioItemCls, {
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
					</a>
				)}
				{!item.link && (
					<Link
						to={urlJoin(RoutePaths.Category, item.id)}
						className={clsx('portfolio-item', porfolioItemCls, {
							[verticalCls]: vertical,
							[horizontalCls]: !vertical,
						})}
					>
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
					</Link>
				)}
			</>
		)
	);
}

const porfolioItemCls = css`
	box-sizing: border-box;
	color: white;
	display: flex;
	padding: .5rem;
	text-decoration: none;

	.wheel-logo {
		& > img {
			max-height: 100%;
			max-width: 100%;
		}
	}

	@media (max-width: 768px) {
		.landscape & {
			ion-icon {
				font-size: 48px;
			}

			.wheel-label {
				flex: 5;
				font-size: 16px;
				padding-left: 0;
			}
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
	background: linear-gradient(357deg, rgba(19,16,16,1) 0%, rgba(68,59,59,1) 160%);
	border: 5px solid transparent;
	border-radius: 5px;
	border-image-source: linear-gradient(to right, grey 0%, darkgrey 100%); 
	border-image-slice: 5;
	flex-direction: column;
	left: 50%;
	margin: auto;
	position: absolute;
	transform: translateX(-50%);
	width: calc(var(--wheel-size) / 5);

	ion-icon {
		width: 100%;
		height: 50px;
	}

	.wheel-label {
		display: flex;
		font-size: 14px;
		font-style: italic;
		justify-content: center;
		line-height: 1.2em;
		min-height: 2.4em;
	}
`;
