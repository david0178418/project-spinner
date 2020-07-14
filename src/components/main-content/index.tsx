import React from 'react';
import { PortfolioItem } from '@common/interfaces';

import './main-content.scss';
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
		<div className={clsx('main-content', {
			vertical,
			horizontal: !vertical,
		})}>
			{items.map((item, i) => (
				<div
					key={i}
					className={clsx('main-image-container', {
						active: i === activeIndex,
					})}
				>
					{item.label}<br/>
					<img loading="lazy" src={item.mainImage} />
				</div>
			))}
		</div>
	);
}
