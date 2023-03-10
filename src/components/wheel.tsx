import {
	useState,
	useCallback,
	useEffect,
	FC,
	ReactNode,
} from 'react';
import urlJoin from 'url-join';
import { Key } from 'ts-key-enum';
import clsx from 'clsx';
import { useEvent, useKey } from 'react-use';
import { useDebounce } from '@common/hooks';
import { PortfolioItem, RoutePaths } from '@common/types';
import { css } from 'linaria';
import { WheelItem } from './wheel-item';
import { range } from '@common/utils';
import { useHistory } from 'react-router-dom';

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
	children?: ReactNode;
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

	const history = useHistory();
	const [items, setItems] = useState<ListItem[]>([]);
	const [bufferIndex, setBufferIndex] = useState(selectedItemIndex);
	const [scale, setScale] = useState(1);
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
	const selectItem = useCallback(() => {
		history.push(urlJoin(RoutePaths.Category, items[bufferIndex].item.id));
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [bufferIndex, items]);

	const controls: any = {
		[Key.ArrowUp]: wheelUp,
		[Key.ArrowRight]: wheelUp,
		[Key.ArrowDown]: wheelDown,
		[Key.ArrowLeft]: wheelDown,
	};

	useEvent('swiped-up', wheelUp);
	useEvent('swiped-right', wheelUp);
	useEvent('swiped-down', wheelDown);
	useEvent('swiped-left', wheelDown);

	useEvent('keydown', (e) => runKey(e.key));
	useEvent('resize', () => {
		measure();
	});

	useEffect(() => {
		measure();
	}, []);

	useEffect(() => {
		(activeIndex !== selectedItemIndex) && onChange(activeIndex);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeIndex]);

	useEffect(() => {
		if(!items.length) {
			return;
		}

		const newIndex = selectedItemIndex < 0 ?
			items.length + selectedItemIndex:
			selectedItemIndex % items.length;

		(activeIndex !== newIndex) && onChange(newIndex);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedItemIndex]);

	useEffect(() => {
		const listMultiplier = externalItems.length ?
			Math.ceil(WINDOW_SIZE / externalItems.length):
			0;
		const internalList = range(listMultiplier)
			.flatMap(() => externalItems)
			.map((item, key) => ({
				key,
				item,
			}));
		setItems(internalList);
		
	}, [externalItems]);

	useKey(Key.Enter, selectItem, {}, [selectItem]);

	if(!items.length) {
		return null;
	}

	const visibleItems = wrapAroundList(selectedItemIndex, WINDOW_SIZE, items);

	function runKey(key: string) {
		controls[key]?.();
	}

	function measure() {
		setScale(
			Math.min(window.innerHeight, 800)/800,
		);
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
					.map((data, i) => (
						<WheelItem
							vertical={vertical}
							key={data.key}
							active={i === (MID_POINT - 1)}
							index={i}
							scale={scale}
						>
							{data?.item && itemContent(data.item)}
						</WheelItem>
					))
				}
			</div>
			<button className="wheel-up" onClick={() => controls[Key.ArrowUp]()}>
				<ion-icon name={`arrow-${vertical ? 'up' : 'forward'}-outline`} />
			</button>
			<button className="wheel-down" onClick={() => controls[Key.ArrowDown]()}>
				<ion-icon name={`arrow-${vertical ? 'down' : 'back'}-outline`} />
			</button>
		</div>
	);
};

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
		opacity: 0;
		transition: opacity 0.1s;

		ion-icon {
			color: white;
			height: 80%;
			width: 80%;
		}

		&:active {
			opacity: .5;
		}
	}
`;

const verticalCls = css`
	height: var(--wheel-size);
	width: 100%;

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
	height: 80%;
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
