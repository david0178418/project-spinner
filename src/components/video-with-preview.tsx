import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { css } from 'linaria';

interface Props {
	videoUrl: string;
	previewImageUrl: string
}

export
function VideoWithPreview(props: Props) {
	const {
		videoUrl,
		previewImageUrl,
	} = props;
	const videoRef = useRef<HTMLVideoElement>(null);
	const [canPlay, setCanPlay] = useState(false);

	useEffect(() => {
		if(!canPlay) {
			return;
		}

		console.log('happened');
		const timeoutId = setTimeout(() => {
			videoRef.current?.play();
		}, 1500);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [canPlay]);

	return (
		<div className={fooCls}>
			<div className="foo-video">
				<video
					muted
					loop
					playsInline
					ref={videoRef}
					onCanPlay={() => setCanPlay(true)}
				>
					<source
						type="video/mp4"
						src={videoUrl}
					/>
				</video>
			</div>
			<AnimatePresence>
				{!canPlay && (
					<motion.div
						className="foo-image"
						transition={{
							delay: 1,
							duration: .5,
						}}
						initial={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<img src={previewImageUrl}/>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

const fooCls = css`{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;

	.foo-image,
	.foo-video {
		position: absolute;
		width: 100%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
}`;
