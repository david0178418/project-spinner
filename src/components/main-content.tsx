import { useContext } from 'react';
import { css } from 'linaria';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import urlJoin from 'url-join';
import { Orientation, PortfolioItem, RoutePaths } from '@common/types';
import { useDebounce } from '@common/hooks';
import { AnimatePresence, motion } from 'framer-motion';
import { OrientationContext } from '@common/contexts';
import { VideoWithPreview } from './video-with-preview';

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

	if(!selectedItem) {
		return <>Coming Soon...</>;
	}
	const {
		mainImage,
		mainVideo,
	} = selectedItem;

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
						{!!(mainImage && mainVideo) && (
							<VideoWithPreview
								previewImageUrl={mainImage}
								videoUrl={mainVideo}
							/>
						)}
						{!!(mainImage && !mainVideo) && (
							<img loading="lazy" src={mainImage} />
						)}
						{!!(!mainImage && mainVideo) && (
							<video muted loop playsInline onCanPlay={() => console.log(111)} onLoadedData={() => console.log(222)}>
								<source
									type="video/mp4"
									src={mainVideo}
								/>
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
