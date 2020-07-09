
import React, {
	useState,
	useCallback,
	useEffect,
	FC,
	ReactNode,
} from 'react';
import { Key } from 'ts-key-enum';
import clsx from 'clsx';
import { useEvent } from 'react-use';
import { range } from '@common/utils';
import { useDebounce } from '@common/hooks'
import { PortfolioItem } from '@common/interfaces';

import './wheel.scss';

const WINDOW_SIZE = 7;
const MID_POINT = Math.ceil(WINDOW_SIZE / 2);

interface WheelItemProps {
	index: number;
	active?: boolean;
}

const WheelItem: FC<WheelItemProps> = (props) => {
	const {
		children,
		index,
		active,
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

	return (
		<>
			<div
				className={clsx('item', {
					active,
				})}
				style={{
					zIndex: (Math.abs(spacingRotationAdjust) + 1) || 20,
					transform: `rotate(${rotation}deg) translate3d(-100%, ${spacingRotationAdjust * 15}px, 0) scale(${active ? 2 : 1})`,
				}}
			>
				{children}
			</div>
		</>
	);
}

interface Props {
	size: number;
	items: PortfolioItem[];
	itemContent(item: PortfolioItem): ReactNode;
	onChange(item: PortfolioItem): any;
}

interface WheelItem {
	key: number | string;
	item: PortfolioItem;
}

export
const Wheel: FC<Props> = (props) => {
	const {
		onChange,
		itemContent,
		size,
		items: externalItems
	} = props;

	const [items, setItems] = useState<WheelItem[]>([]);
	const [rawActiveIndex, setActiveIndex] = useState(MID_POINT - 1 );
	const activeIndex = useDebounce(rawActiveIndex, 200);
	const controls: any = {
		[Key.ArrowUp]: useCallback(() => {
			let newIndex = activeIndex - 1;
			newIndex = newIndex < 0 ?
				items.length - 1:
				newIndex;
			setActiveIndex(newIndex);
		}, [activeIndex, items]),
		[Key.ArrowDown]: useCallback(() => {
			let newIndex = activeIndex + 1;
			newIndex = newIndex > items.length - 1 ?
				0:
				newIndex;
			setActiveIndex(newIndex);
		}, [activeIndex, items]),
	};

	useEvent('keydown', (e) => runKey(e.key));

	// useEffect(() => {
	// 	const selectedItem = items[MID_POINT]?.item;
	// 	selectedItem && onChange(selectedItem);
	// }, [activeIndex]);

	useEffect(() => {
		const foo = externalItems.length > WINDOW_SIZE ?
			externalItems:
			range(WINDOW_SIZE + 1).map(v => (
				externalItems[v % externalItems.length]
			));

		setItems(
			foo.map((item, key) => ({
				key,
				item,
			}))
		);
	}, [externalItems]);

	if(!items.length) {
		return null;
	}

	const visibleItems = range(WINDOW_SIZE)
			.map((i) => items[(activeIndex + i) % items.length]);

	function runKey(key: string) {
		controls[key]?.();
	}

	return (
		<div className="wheel">
			<div
				className="wheel-container"
				style={{
					['--wheel-size']: `${size}px`,
				} as any}
			>
				{visibleItems
					// Used to get around some weird bug
					// where the elements get recrated when
					// scrolling through list in one direction
					.filter((item, i, list) => {
						if(items.length > WINDOW_SIZE) {
							return true;
						} else {
							return i !== (list.length - 1)
						}
					})
					.map((item, i) => (
					<WheelItem
						key={item.key}
						active={i === (MID_POINT - 1)}
						index={i}
					>
						{item?.item && itemContent(item.item)} <br/>
					</WheelItem>
				))}
			</div>
			<div>
				Active Index {activeIndex}
			</div>
		</div>
	);
}
