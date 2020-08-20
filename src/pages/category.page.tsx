import React from 'react';
import { useParams } from 'react-router-dom';
import { WheelView } from '@components/wheel-view';
import { items } from '@root/data';
import { PageTransition } from '@components/page-transition';
import { ContentView } from '@components/content-view';

interface Params {
	categoryId?: string;
}

export
function CategoryPage() {
	const {
		categoryId = '',
	} = useParams<Params>();

	const pageNode = items.find(i => i.id === categoryId)?.page || null;

	return (
		<PageTransition>
			{pageNode && (
				<ContentView content={pageNode} />
			)}
			{!pageNode && (
				<WheelView
					items={
						items
							.filter(
								i => i.parentCategories.includes(categoryId),
							)
					}
				/>
			)}
		</PageTransition>
	);
}
