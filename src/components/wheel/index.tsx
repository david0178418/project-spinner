
import React, { useState, useCallback } from 'react';
import { Key } from 'ts-key-enum';
import clsx from 'clsx';
import { useEventListener } from '@common/hooks';

import './wheel.scss';

const items = [
	{
		label: 'Foo',
	}, {
		label: 'Bar',
	}, {
		label: 'Baz',
	}, {
		label: 'Biz',
	}, {
		label: 'Foo',
	}, {
		label: 'Bar',
	}, {
		label: 'Baz',
	}, {
		label: 'Biz',
	}, {
		label: 'Foo',
	}, {
		label: 'Bar',
	}, {
		label: 'Baz',
	}, {
		label: 'Biz',
	},
];

export
function Wheel() {
	const [activeIndex, setActiveIndex] = useState(0);
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

	return (
		<div className="wheel">
			{activeIndex}
			<ul>
				{items.map((item, i) => (
					<li key={i} className={clsx('item',{
						active: activeIndex === i,
					})}>
						{item.label}
					</li>
				))}
			</ul>
		</div>
	);
}
