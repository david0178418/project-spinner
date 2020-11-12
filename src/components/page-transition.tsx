import React, { FC } from 'react';
import { motion } from 'framer-motion';

export
const PageTransition: FC = ({children}) => (
	<motion.div
		animate="enter"
		initial="exit"
		exit="exit"
		variants={{
			enter: {
				translateY: '0%',
				opacity: 1,
				transition: {
					ease: 'easeInOut',
					duration: .75,
				},
			},
			exit: {
				translateY: '100%',
				opacity: 0,
				transition: {
					ease: 'easeInOut',
					duration: .75,
				},
			},
		}}
	>
		{children}
	</motion.div>
);
