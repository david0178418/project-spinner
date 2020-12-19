import { useState } from 'react';
import { css } from 'linaria';
import { useInterval } from 'react-use';
import { motion, AnimatePresence } from 'framer-motion';
import { PageContent, PageSubContent } from '@common/types';
import clsx from 'clsx';

interface TabbedContentProps {
	content: PageSubContent[];
}

function TabbedContent(props: TabbedContentProps) {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const {
		content,
	} = props;

	if(!content.length) {
		return null;
	}

	const selectedContent = content[selectedIndex];

	return (
		<div className={tabbedContentCls}>
			<div className="tab-container">
				{content.map(({label}, i) => (
					<div
						key={i}
						onClick={() => setSelectedIndex(i)}
						className={clsx('tab', {
							selected: i === selectedIndex,
						})}
					>
						{label}
					</div>
				))}
			</div>
			<div className="tab-content">
				{selectedContent.content}
			</div>
		</div>
	);
}

const tabbedContentCls = css`{
	.tab-container {
		background-color: #ffffff1a;
		display: flex;
		font-size: 22px;
	}

	.tab {
		cursor: pointer;
		flex: 1;
		padding: 10px;
		position: relative;
		text-align: center;

		&:after {
			border-bottom: 5px solid #24aec6;
			bottom: 0;
			content: '';
			left: 50%;
			position: absolute;
			transform: translateX(-50%);
			transition: width .2s linear;
			width: 0;
		}

		&.selected {
			font-weight: bold;

			&:after {
				width: 80%;
			}
		}
	}

	.tab-content {
		padding: 20px;
	}
}`;

interface Props {
	title: string;
	content: PageContent;
}

export
function ContentView(props: Props) {
	const [activeImageIndex, setActiveImageIndex] = useState(0);
	const {
		title,
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
					{title}
				</h2>
				{!!content.links.length && (
					<ul className="links">
						{content.links.map((l, i) => (
							<li key={i}>
								<a href={l.url}>{l.label}</a>
							</li>
						))}
					</ul>
				)}
				<p dangerouslySetInnerHTML={{__html: content.description}}/>
				{content.subContents && (
					<TabbedContent
						content={content.subContents}
					/>
				)}
			</div>
			{imagePreview && (

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
						</motion.div>
					</AnimatePresence>
				</div>
			)}
		</div>
	);
}

const contentViewCls = css`{
	display: grid;
	grid-template-rows: 1fr 300px 20fr 5fr;
	grid-gap: 25px;
	height: 100vh;
	grid-template-columns: 0 1fr 0;

	.links {
		padding: 0 10px;

		li {
			list-style: none;
		}

		a {
			font-style: italic;
			font-weight: bold;

			&:visited {
				color: hotpink;
			}
		}

		.portrait & {
			li {
				margin: 15px 0;
			}
		}
	}

	.content {
		color: #dddddd;
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
}`;

const previewCls = css`{
	position: relative;
	width: 100%;
}`;

const imageContainer = css`{
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
}`;
