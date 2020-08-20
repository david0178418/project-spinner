import React, { useState } from 'react';
import { css } from 'linaria';
import { motion, AnimatePresence } from 'framer-motion';
import { useInterval } from 'react-use';
import { PageContent } from '@common/interfaces';

interface Props {
	content: PageContent;
}

export
function ContentView(props: Props) {
	const [activeImageIndex, setActiveImageIndex] = useState(0);
	const {
		content,
	} = props;

	useInterval(() => {
		setActiveImageIndex((activeImageIndex + 1) % content.imagePreviews.length);
	}, 4000);

	const imagePreview = content.imagePreviews[activeImageIndex];

	return (
		<div className={contentViewCls}>
			<div className="content">
				<h2>
					{content.title}
				</h2>
				<p>
					{content.description}
				</p>
			</div>
			<div className={`preview ${previewCls}`}>
				<AnimatePresence>
					<motion.div
						key={activeImageIndex}
						className={imageContainer}
						animate="enter"
						initial="exit"
						exit="exit"
						variants={{
							enter: {
								opacity: 1,
								transition: {
									ease: 'easeOut',
									duration: 1,
								},
							},
							exit: {
								opacity: 0,
								transition: {
									ease: 'easeIn',
									duration: 1,
								},
							},
						}}
					>
						<img src={imagePreview.url} key={activeImageIndex} />
						<div>
							111{imagePreview.description}
						</div>
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
}

const contentViewCls = css`
	display: grid;
	grid-template-rows: 1fr 300px 20fr 5fr;
	grid-gap: 10px;
	height: 100vh;

	grid-template-columns: 0 1fr 0;

	.content {
		grid-column-start: 2;
		grid-row-start: 3;
	}

	.preview {
		grid-column-start: 2;
		grid-row-start: 2;
	}

	@media (min-width: 640px) {
		grid-template-rows: 5fr 20fr 5fr;
		grid-template-columns: 50px 2fr 1fr 50px;

		.preview {
			grid-column-start: 3;
			grid-row-start: 2;
		}
		.content {
			grid-column-start: 2;
			grid-row-start: 2;
		}
	}

	@media (min-width: 768px) {
		grid-template-columns: 150px 2fr 1fr 150px;
	}

	@media (min-width: 1024px) {
		grid-template-columns: 250px 2fr 1fr 250px;
	}

	@media (min-width: 1280px) {
		grid-template-columns: 350px 2fr 1fr 350px;
	}
`;

const previewCls = css`
	position: relative;
	width: 100%;
`;

const imageContainer = css`
	position: absolute;
	top: 0;
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;

	img {
		height: 100%;
		justify-content: center;
		align-content: center;
		object-fit: contain;
	}
`;
