import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { WheelView } from '@components/wheel-view';
import { items } from '@root/data';
import { PageTransition } from '@components/page-transition';
import { ContentView } from '@components/content-view';
import { css } from 'linaria';

interface Params {
	categoryId?: string;
}

export
function CategoryPage() {
	const history = useHistory();
	const {
		categoryId = '',
	} = useParams<Params>();

	const pageNode = items.find(i => i.id === categoryId)?.page || null;

	return (
		<PageTransition>
			<button
				title="Back"
				className={backButtonCls} onClick={() => history.goBack()}
			>
				<ion-icon name="arrow-back-circle-outline"></ion-icon>
			</button>
			{pageNode && (
				<ContentView content={pageNode} />
			)}
			{!pageNode && (
				<WheelView
					items={
						items
							.filter(
								i => i.parentCategories.includes(categoryId),
							)
					}
				/>
			)}
		</PageTransition>
	);
}

const backButtonCls = css`{
	background: none;
	border: none;
	color: #c1c1c1;
	font-size: 64px;
	left: 40px;
	position: absolute;
	top: 40px;
	z-index: 10;
	transition: transform .2s;

	&:active {
		transform: scale(.9);
	}

	.portrait & {
		left: 30px;
		position: absolute;
		top: 30px;
	}
}`;