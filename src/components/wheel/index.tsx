
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
import { PortfolioItem, Orientation } from '@common/interfaces';

import './wheel.scss';

const WINDOW_SIZE = 7;
const MID_POINT = Math.ceil(WINDOW_SIZE / 2);

interface WheelItemProps {
	index: number;
	orientation: Orientation;
	active?: boolean;
}

const WheelItem: FC<WheelItemProps> = (props) => {
	const {
		children,
		index,
		active,
		orientation,
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
	const transform = orientation === Orientation.Landscape ?
			`rotate(${rotation}deg) translate3d(-100%, ${spacingRotationAdjust * 15}px, 0) scale(${active ? 2 : 1})` :
			`rotate(${rotation}deg) translate3d(${spacingRotationAdjust * -15}px, ${active ? 'calc(var(--wheel-size) / (var(--wheel-item-count)) * 2)' : 0}, 0) scale(${active ? 1.5 : 1})`;

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
					transform,
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
	orientation: Orientation;
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
		items: externalItems,
		orientation,
	} = props;

	const [items, setItems] = useState<WheelItem[]>([]);
	const [bufferIndex, setBufferIndex] = useState(selectedItemIndex);
	const activeIndex = useDebounce(bufferIndex, 150);
	const wheelUp = useCallback(() => {
		let newIndex = activeIndex - 1;
		newIndex = newIndex < 0 ?
			items.length - 1:
			newIndex;
		setBufferIndex(newIndex);
	}, [activeIndex, items]);
	const wheelDown = useCallback(() => {
		let newIndex = activeIndex + 1;
		newIndex = newIndex > items.length - 1 ?
			0:
			newIndex;
			setBufferIndex(newIndex);
		}, [activeIndex, items]);

	const controls: any = {
		[Key.ArrowUp]: wheelUp,
		[Key.ArrowRight]: wheelUp,
		[Key.ArrowDown]: wheelDown,
		[Key.ArrowLeft]: wheelDown,
	};

	useEvent('keydown', (e) => runKey(e.key));

	useEffect(() => {
		(activeIndex !== selectedItemIndex) && onChange(activeIndex);
	}, [activeIndex]);

	useEffect(() => {
		if(!items.length) {
			return;
		}

		const newIndex = selectedItemIndex < 0 ?
			items.length + selectedItemIndex:
			selectedItemIndex % items.length;

		(activeIndex !== newIndex) && onChange(newIndex);
	}, [selectedItemIndex]);

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
			className={clsx('wheel', {
				horizontal: orientation === Orientation.Landscape,
				vertical: orientation === Orientation.Portrait,
			})}
			style={{
				'--wheel-size': `${size.value}${size.units}`,
				'--wheel-item-count': WINDOW_SIZE,
			} as any}
		>
			<div className="wheel-container">
				{visibleItems
					.map((item, i) => (
						<WheelItem
							orientation={orientation}
							key={item.key}
							active={i === (MID_POINT - 1)}
							index={i}
						>
							{item?.item && itemContent(item.item)}
						</WheelItem>
					))
				}
			</div>
			<button className="wheel-up" onClick={() => controls[Key.ArrowUp]()}/>
			<button className="wheel-down" onClick={() => controls[Key.ArrowDown]()} />
		</div>
	);
}
