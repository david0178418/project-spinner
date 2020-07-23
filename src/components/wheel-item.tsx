
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
	scale: number;
}

export
const WheelItem: FC<WheelItemProps> = (props) => {
	const {
		children,
		index,
		active,
		vertical,
		scale,
	} = props;
	const visibleArc = (vertical ? 60 : 70) * scale;

	const rotation = (
		visibleArc / (WINDOW_SIZE - 1)
	) * index - 90 + (180 - visibleArc) / 2;

	const midIndex = MID_POINT - 1;
	let zIndex = 0;

	if(vertical) {
		let foo = 0;
		if(index < midIndex) {
			foo = index;
		} else if(index > midIndex) {
			foo = 2 * (midIndex - (midIndex - (index - midIndex))) - index; 
		}

		zIndex = index === midIndex ?
			20 :
			Math.abs(foo);
	}

	const transform = vertical ?
			`rotate(${rotation}deg) translate3d(-300%, 0, 0) scale(${(1/scale) * (active ? 1.2 : 1)})` :
			`rotate(${rotation}deg) translate3d(0, calc((var(--wheel-size) / -2) - ${active ? 40 : -30}px), 0) scale(${active ? 1.4 : 1})`;

	return (
		<>
			<div
				className={clsx('wheel-item', wheelItemCls, {
					active,
					[horizontalCls]: !vertical,
					[verticalCls]: vertical,
				})}
				style={{
					zIndex,
					transform,
				}}
			>
				{children}
			</div>
		</>
	);
}

const wheelItemCls = css`
	height: calc(100% / var(--wheel-item-count));
	position: absolute;
	transition-duration: .3s;
	transition-property:
		transform,
		opacity,
		z-index;

	&:first-child,
	&:last-child {
		opacity: 0;
	}
`;

const verticalCls = css`
	right: -280%;
	top: calc(50% - (
		var(--wheel-size) / (
			var(--wheel-item-count)
		)
	) / 2);
	transform-origin: center left;
	width: 100%;

	.wheel-logo {
		height: 100%;
	}

	&.active {
		z-index: 10;
	}
`;
const horizontalCls = css`
	bottom: calc(var(--wheel-size) * -1);
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
