import { PortfolioItem } from '@common/interfaces';

export
const items: PortfolioItem[] = [
	{
		id: 'typescript',
		label: 'typescript',
		mainImage: 'https://via.placeholder.com/600/600?text=Typescript',
		wheelImage: '/images/ts-logo-128.png',
		parentCategories: [
			'root',
		],
	}, {
		id: 'node',
		label: 'node',
		mainImage: 'https://via.placeholder.com/500/500?text=Node',
		wheelImage: '/images/node-logo.png',
		parentCategories: [
			'root',
		],
	}, {
		id: 'javascript',
		label: 'javascript',
		mainImage: 'https://via.placeholder.com/500/550?text=Javascript',
		wheelImage: '/images/javascript-logo.png',
		parentCategories: [
			'root',
		],
	}, {
		id: 'pwa',
		label: 'pwa',
		mainImage: 'https://via.placeholder.com/700/550?text=PWA',
		wheelImage: '/images/pwa-logo.png',
		parentCategories: [
			'root',
		],
	}, {
		id: 'react',
		label: 'React',
		mainImage: 'https://via.placeholder.com/600/600?text=React',
		wheelImage: '/images/react-logo.webp',
		parentCategories: [
			'root',
		],
	}, {
		id: 'angular',
		label: 'angular',
		mainImage: 'https://via.placeholder.com/550/550?text=Angular',
		wheelImage: '/images/angular-logo.png',
		parentCategories: [
			'root',
		],
	},
];
