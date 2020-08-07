import React from 'react';
import { useParams } from 'react-router-dom';
import { WheelView } from '@components/wheel-view';
import { items } from '@root/data';
import { motion } from 'framer-motion';

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
		<motion.div
			animate="enter"
			initial="exit"
			exit="exit"
			style={{
				position: 'absolute',
				width: '100%',
			}}
			variants={{
				enter: {
					scale: 1,
					opacity: 1,
					transition: {
						duration: .75,
					},
				},
				exit: {
					scale: .5,
					opacity: 0,
					transition: {
						duration: .75,
					},
				},
			}}
		>
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
		</motion.div>
	);
}
