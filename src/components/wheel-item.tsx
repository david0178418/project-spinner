
import React, {
	FC,
} from 'react';
import clsx from 'clsx';
import { css } from 'linaria';

const WINDOW_SIZE = 7;
const MID_POINT = Math.ceil(WINDOW_SIZE / 2);

interface WheelItemProps {
	index: number;
	vertical?: boolean;
	active?: boolean;
}

export
const WheelItem: FC<WheelItemProps> = (props) => {
	const {
		children,
		index,
		active,
		vertical,
	} = props;
	const baseRotation = (
		140 / (WINDOW_SIZE - 1)
	) * index - 90 + 20;;

	const midIndex = MID_POINT - 1;

	let spacingRotationAdjust = 0;

	if(index < midIndex) {
		spacingRotationAdjust = index;
	} else if(index > midIndex) {
		spacingRotationAdjust = 2 * (midIndex - (midIndex - (index - midIndex))) - index; 
	}

	const rotation = baseRotation - (spacingRotationAdjust * 7);
	const transform = vertical ?
			`rotate(${rotation}deg) translate3d(-100%, ${spacingRotationAdjust * 15}px, 0) scale(${active ? 2 : 1})` :
			`rotate(${rotation}deg) translate3d(${spacingRotationAdjust * -15}px, ${active ? 'calc(var(--wheel-size) / (var(--wheel-item-count)) * 2)' : 0}, 0) scale(${active ? 1.5 : 1})`;

	return (
		<>
			<div
				className={clsx('wheel-item', wheelItemCls, {
					active,
					[horizontalCls]: !vertical,
					[verticalCls]: vertical,
				})}
				style={{
					zIndex: index === midIndex ?
						20 :
						Math.abs(spacingRotationAdjust),
					transform,
				}}
			>
				{children}
			</div>
		</>
	);
}

const wheelItemCls = css`
	position: absolute;
	transition:
		transform .3s,
		opacity .3s;

	&.active {
		font-weight: bold;
		z-index: 10;
	}

	&:first-child,
	&:last-child {
		opacity: 0;
	}
`;

const verticalCls = css`
	right: 0;
	top: calc(50% - (var(--wheel-size) / (var(--wheel-item-count))) / 2 );
	transform-origin: center left;
	width: 50%;

	.wheel-logo {
		height: 100%;
	}
`;
const horizontalCls = css`
	bottom: -100%;
	left: calc(50% - (var(--wheel-size) / (var(--wheel-item-count))) / 2 );
	transform-origin: center;
	height: calc(var(--wheel-size));
	width: calc(var(--wheel-size) / (var(--wheel-item-count)));

	.wheel-logo {
		width: 100%;
	}

	.wheel-label {
		text-align: center;
	}
`;
