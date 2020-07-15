import React from 'react';
import { PortfolioItem } from '@common/interfaces';
import { css } from 'linaria';
import clsx from 'clsx';
import { useDebounce } from '@common/hooks';

interface Props {
	items: PortfolioItem[];
	selectedIndex: number;
	vertical?: boolean;
}

export
function MainContent(props: Props) {
	const {
		items,
		selectedIndex,
		vertical,
	} = props;

	const bufferedIndex = selectedIndex % items.length;
	const activeIndex = useDebounce(bufferedIndex, 500);

	return (
		<div className={clsx('main-content', mainContentCls, {
			vertical,
			horizontal: !vertical,
		})}>
			{items.map((item, i) => (
				<div
					key={i}
					className={clsx(mainImageClass, {
						active: i === activeIndex,
						[horizontalCss]: !vertical,
						[verticalCss]: vertical,
					})}
				>
					<img loading="lazy" src={item.mainImage} />
				</div>
			))}
		</div>
	);
}

const mainContentCls = css`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
`;

const mainImageClass = css`
	position: absolute;
	margin: auto;
	opacity: 0;
	max-height: 80%;
	max-width: 80%;
	transition:
	opacity .3s,
	transform .3s;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		max-height: 100%;
		max-width: 100%;
	}

	&.active {
		opacity: 1;
		z-index: 10;
	}
`;

const verticalCss = css`
	transform: translate3D(0, -20%, 0);

	&.active {
		transform: translate3D(0, 0%, 0);
	}
`;

const horizontalCss = css`
	transform: translate3D(-20%, 0, 0);

	&.active {
		transform: translate3D(0, 0, 0);
	}
`;
