import { useState } from 'react';
import { css } from 'linaria';
import clsx from 'clsx';
import { PageSubContent } from '@common/types';
import { Col, Row } from 'react-bootstrap';

interface Props {
	content: PageSubContent[];
}

export
function TabbedContent(props: Props) {
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
			<Row className="tab-container">
				{content.map(({label}, i) => (
					<Col
						key={i}
						onClick={() => setSelectedIndex(i)}
						className={clsx('tab', {
							selected: i === selectedIndex,
						})}
					>
						{label}
					</Col>
				))}
			</Row>
			<div className="tab-content"
				dangerouslySetInnerHTML={{
					__html: selectedContent.content,
				}}
			/>
		</div>
	);
}

const tabbedContentCls = css`{
	display: flex;
	flex-direction: column;
	height: 100%;

	.tab-container {
		background-color: #ffffff1a;
		font-size: 22px;
	}

	.tab-content {
		padding: 20px;
		flex: auto;
		overflow: hidden auto;
	}

	.tab {
		cursor: pointer;
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

	@media (max-width: 576px) {
		.tab {
			margin-bottom: 10px;
		}
		
		.tab-container {
			background-color: #ffffff1a;
			font-size: 22px;
		}
	}
}`;
