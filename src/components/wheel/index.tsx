
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
					zIndex: index === midIndex ?
						20 :
						Math.abs(spacingRotationAdjust),
					transform: `rotate(${rotation}deg) translate3d(-100%, ${spacingRotationAdjust * 15}px, 0) scale(${active ? 2 : 1})`,
				}}
			>
				{children}
			</div>
		</>
	);
}

function wrapAroundList<T>(index: number, size: number, list: T[]) {
	const offset = (size / 2) | 0;
	const start = (index >= offset) ?
		index - offset :
		list.length - offset + index;
	const a = list.slice(start, start + size);
	const b = list.slice(0, size - a.length);

	return a.concat(b);
}

interface WheelItem {
	key: number | string;
	item: PortfolioItem;
}

interface Props {
	size: {
		value: number;
		units: string;
	};
	selectedItemIndex: number;
	items: PortfolioItem[];
	itemContent(item: PortfolioItem): ReactNode;
	onChange(newIndex: number): any;
}

export
const Wheel: FC<Props> = (props) => {
	const {
		onChange,
		itemContent,
		size,
		selectedItemIndex,
		items: externalItems
	} = props;

	const [items, setItems] = useState<WheelItem[]>([]);
	const [bufferIndex, setBufferIndex] = useState(selectedItemIndex);
	const activeIndex = useDebounce(bufferIndex, 200);
	const controls: any = {
		[Key.ArrowUp]: useCallback(() => {
			let newIndex = activeIndex - 1;
			newIndex = newIndex < 0 ?
				items.length - 1:
				newIndex;
			setBufferIndex(newIndex);
		}, [activeIndex, items]),
		[Key.ArrowDown]: useCallback(() => {
			let newIndex = activeIndex + 1;
			newIndex = newIndex > items.length - 1 ?
				0:
				newIndex;
			setBufferIndex(newIndex);
		}, [activeIndex, items]),
	};

	useEvent('keydown', (e) => runKey(e.key));
	
	useEffect(() => {
		(activeIndex !== selectedItemIndex) && onChange(activeIndex);
	}, [activeIndex]);

	useEffect(() => {
		setItems(
			externalItems
				.concat(externalItems)
				.map((item, key) => ({
					key,
					item,
				}))
		);
	}, [externalItems]);

	if(!items.length) {
		return null;
	}

	const visibleItems = wrapAroundList(selectedItemIndex, WINDOW_SIZE, items);

	function runKey(key: string) {
		controls[key]?.();
	}

	return (
		<div
			className="wheel"
			style={{
				'--wheel-size': `${size.value}${size.units}`,
				'--wheel-item-count': WINDOW_SIZE,
			} as any}
		>
			<div className="wheel-container">
				{visibleItems
					.map((item, i) => (
					<WheelItem
						key={item.key}
						active={i === (MID_POINT - 1)}
						index={i}
					>
						{item?.item && itemContent(item.item)}
					</WheelItem>
				))}
			</div>
		</div>
	);
}
