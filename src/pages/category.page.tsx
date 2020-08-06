import React from 'react';
import { useParams } from 'react-router-dom';
import { WheelView } from '@components/wheel-view';
import { items } from '@root/data';

interface Params {
	categoryId?: string;
}

export
function CategoryPage() {
	const {
		categoryId = '',
	} = useParams<Params>();

	const categoryItems = items.filter(
		i => i.parentCategories.includes(categoryId),
	);

	const leafNode = !categoryItems.length ?
		items.find(i => i.id === categoryId) :
		null;

	return (
		<>
			{leafNode && (
				<div>
					{JSON.stringify(leafNode)}
				</div>
			)}
			{categoryItems && (
				<WheelView
					items={categoryItems}
				/>
			)}
		</>
	);
}