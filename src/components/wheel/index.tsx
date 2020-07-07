
import React, { useState, useCallback, useEffect } from 'react';
import { Key } from 'ts-key-enum';
import clsx from 'clsx';
import { useEventListener } from '@common/hooks';
import { range } from '@common/utils';

import './wheel.scss';

const items = [
	{
		label: '0 Foo',
	}, {
		label: '1 Bar',
	}, {
		label: '2 Baz',
	}, {
		label: '3 Biz',
	}, {
		label: '4 Foo',
	}, {
		label: '5 Bar',
	}, {
		label: '6 Baz',
	}, {
		label: '7 Biz',
	}, {
		label: '8 Foo',
	}, {
		label: '9 Bar',
	}, {
		label: '10 Baz',
	}, {
		label: '11 Biz',
	},
];

const WINDOW_SIZE = 7;
const MID_POINT = Math.ceil(WINDOW_SIZE / 2);

function Foo(props: any) {
	const {
		className,
		children,
		index,
	} = props;
	const foo = 140 / (WINDOW_SIZE - 1);

	return (
		<>
			<div
				className={className}
				style={{
					transform: `rotate(${foo * index - 90 + 20}deg) translateX(-100px)`,
				}}
			>
				{children}
			</div>
		</>
	);
}

export
function Wheel() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [visibleItems, setVisibleItems] = useState<any[]>([]);
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

	useEventListener('keydown', (e) => {
		runKey(e.key);
	});

	useEffect(() => {
		setVisibleItems(
			range(WINDOW_SIZE)
				.map(i => {
					return items[(activeIndex + i) % items.length]
				})
		);
	}, [activeIndex]);

	return (
		<div className="wheel">
			<div>
				{visibleItems.map((item, i) => (
					<Foo
						key={item.label}
						className={clsx('item', {
							active: i === (MID_POINT - 1),
						})}
						index={i}
					>
						{item.label}
					</Foo>
				))}
			</div>
		</div>
	);
}
