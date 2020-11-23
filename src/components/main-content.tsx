import React, { useContext } from 'react';
import { css } from 'linaria';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import urlJoin from 'url-join';
import { Orientation, PortfolioItem, RoutePaths } from '@common/types';
import { useDebounce } from '@common/hooks';
import { AnimatePresence, motion } from 'framer-motion';
import { OrientationContext } from '@common/contexts';

interface Props {
	items: PortfolioItem[];
	selectedIndex: number;
	vertical?: boolean;
}

export
function MainContent(props: Props) {
	const {
		items,
		selectedIndex,
		vertical,
	} = props;
	const orientation = useContext(OrientationContext);
	const bufferedIndex = selectedIndex % items.length;
	const activeIndex = useDebounce(bufferedIndex, 500);
	const selectedItem = items[activeIndex];
	const isPortrait = orientation === Orientation.Portrait;

	return (
		<div
			className={clsx('main-content', mainContentCls, {
				vertical,
				horizontal: !vertical,
			})}
		>
			<AnimatePresence>
				<motion.div
					key={selectedItem.id}
					className={mainImageClass}
					animate="enter"
					initial="exit"
					exit="exit"
					variants={{
						enter: {
							opacity: 1,
							x: 0,
							y: 0,
							transition: {
								ease: 'easeInOut',
								duration: .3,
							},
						},
						exit: {
							opacity: 0,
							x: isPortrait ? 0 : '-20%',
							y: isPortrait ? '-20%' : 0,
							transition: {
								ease: 'easeInOut',
								duration: .3,
							},
						},
					}}
				>
					<Link to={urlJoin(RoutePaths.Category,selectedItem.id)}>
						{selectedItem.mainImage && (
							<img loading="lazy" src={selectedItem.mainImage} />
						)}
						
						{selectedItem.mainVideo && (
							<video autoPlay muted loop playsInline>
								<source
									type="video/mp4"
									src={selectedItem.mainVideo}
								/>
								Sorry, your browser doesn't support embedded videos.
							</video>
						)}
					</Link>
				</motion.div>
			</AnimatePresence>
		</div>
	);
}

const mainContentCls = css`{
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
}`;

const mainImageClass = css`{
	align-items: center;
	bottom: 0;
	display: flex;
	justify-content: center;
	left: 0;
	margin: auto;
	max-height: 80%;
	max-width: 80%;
	position: absolute;
	right: 0;
	top: 0;

	img,
	video {
		border-radius: 10px;
		max-height: 100%;
		max-width: 100%;
	}
}`;
