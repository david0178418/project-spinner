import React from 'react';
import { WheelView } from '@components/wheel-view';
import { items } from '@root/data';

export
function HomePage() {
	const rootItems = items.filter(i => i.parentCategories.includes('root'));

	return (
		<WheelView items={rootItems} />
	);
}
