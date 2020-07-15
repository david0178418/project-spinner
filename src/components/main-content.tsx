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
		<div className={clsx({
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
					{item.label}<br/>
					<img loading="lazy" src={item.mainImage} />
				</div>
			))}
		</div>
	);
}

const mainImageClass = css`
	position: absolute;
	left: 50%;
	top: 50%;
	opacity: 0;
	width: 80%;
	max-width: 500px;
	transition:
	opacity .3s,
	transform .3s;

	img {
		width: 100%;
	}

	&.active {
		opacity: 1;
	}
`;

const verticalCss = css`
	transform: translate3D(-50%, -70%, 0);

	&.active {
		transform: translate3D(-50%, 0%, 0);
	}
`;

const horizontalCss = css`
	transform: translate3D(-70%, -50%, 0);

	&.active {
		transform: translate3D(-50%, -50%, 0);
	}
`;
