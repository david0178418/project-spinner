import React from 'react';
import { WheelView } from '@components/wheel-view';
import { items } from '@root/data';
import { motion } from 'framer-motion';

export
function HomePage() {
	const rootItems = items.filter(i => i.parentCategories.includes('root'));

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
			<WheelView items={rootItems} />
		</motion.div>
	);
}
