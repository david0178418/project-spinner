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
import { css } from 'linaria';
import { WheelItem } from './wheel-item';

const WINDOW_SIZE = 7;
const MID_POINT = Math.ceil(WINDOW_SIZE / 2);

function wrapAroundList<T>(index: number, size: number, list: T[]) {
	const offset = (size / 2) | 0;
	const start = (index >= offset) ?
		index - offset :
		list.length - offset + index;
	const a = list.slice(start, start + size);
	const b = list.slice(0, size - a.length);

	return a.concat(b);
}

interface ListItem {
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
	vertical?: boolean;
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
		vertical,
		items: externalItems,
	} = props;

	const [items, setItems] = useState<ListItem[]>([]);
	const [bufferIndex, setBufferIndex] = useState(selectedItemIndex);
	const activeIndex = useDebounce(bufferIndex, 250);
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
			className={clsx('wheel', wheelCls, {
				[horizontalCls]: !vertical,
				[verticalCls]: vertical,
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
							vertical={vertical}
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

const wheelCls = css`
	position: relative;
	z-index: 10;

	.wheel-container {
		position: relative;
		height: 100%;
	}

	.wheel-up,
	.wheel-down {
		background-color: transparent;
		border: none;
		outline-style: none;
		position: absolute;
		z-index: 15;
	}
`;

const verticalCls = css`
	height: var(--wheel-size);
	width: calc(var(--wheel-size) / 2);

	.wheel-container {
		width: 200%;
	}

	.wheel-up,
	.wheel-down {
		height: 50%;
		left: 0;
		width: 100%;
	}

	.wheel-up {
		top: 0;
	}

	.wheel-down {
		bottom: 0;
	}
`;

const horizontalCls = css`
	height: calc(var(--wheel-size) / 2);
	width: var(--wheel-size);

	.wheel-container {
		width: 100%;
	}

	.wheel-up,
	.wheel-down {
		width: 50%;
		top: 0;
		height: 100%;
	}

	.wheel-up {
		right: 0;
	}

	.wheel-down {
		left: 0;
	}
`;
