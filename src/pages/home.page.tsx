import React from 'react';
import { WheelView } from '@components/wheel-view';
import { items } from '@root/data';
import { PageTransition } from '@components/page-transition';

export
function HomePage() {
	const rootItems = items.filter(i => i.parentCategories.includes('root'));

	return (
		<PageTransition>
			<WheelView items={rootItems} />
		</PageTransition>
	);
}
