
import React, {
	useState,
	useCallback,
	useEffect,
	FC,
	useContext,
} from 'react';
import { Key } from 'ts-key-enum';
import clsx from 'clsx';
import { useEvent } from 'react-use';
import { range } from '@common/utils';
import { useDebounce } from '@common/hooks'

import './wheel.scss';
import { ItemsContext } from '@common/contexts';

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
	const foo = 140 / (WINDOW_SIZE - 1);

	return (
		<>
			<div
				className={clsx('item', {
					active,
				})}
				style={{
					transform: `rotate(${foo * index - 90 + 20}deg) translate3d(-100%, 0, 0) scale(${active ? 2 : 1})`,
				}}
			>
				{children}
			</div>
		</>
	);
}

export
function Wheel() {
	const items = useContext(ItemsContext);
	const [rawActiveIndex, setActiveIndex] = useState(0);
	const [visibleItems, setVisibleItems] = useState<any[]>([]);
	const activeIndex = useDebounce(rawActiveIndex, 200);
	const controls: any = {
		[Key.ArrowUp]: useCallback(() => {
			let newIndex = activeIndex - 1;
			newIndex = newIndex < 0 ?
				items.length - 1:
				newIndex;
			setActiveIndex(newIndex);
		}, [activeIndex]),
		[Key.ArrowDown]: useCallback(() => {
			let newIndex = activeIndex + 1;
			newIndex = newIndex > items.length - 1 ?
				0:
				newIndex;
			setActiveIndex(newIndex);
		}, [activeIndex]),
	};

	function runKey(key: string) {
		controls[key]?.();
	}

	useEvent('keydown', (e) => runKey(e.key));

	useEffect(() => {
		setVisibleItems(
			range(WINDOW_SIZE)
				.map(i => {
					return items[(activeIndex + i) % items.length]
				})
		);
	}, [activeIndex]);

	return (
		<div
			className="wheel" 
			style={{
				['--wheel-size']: `${300}px`
			} as any}
		>
			{visibleItems.map((item, i) => (
				<WheelItem
					key={item.label}
					active={i === (MID_POINT - 1)}
					index={i}
				>
					{item.label}
				</WheelItem>
			))}
		</div>
	);
}
