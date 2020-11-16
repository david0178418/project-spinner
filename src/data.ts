import { PortfolioItem } from '@common/interfaces';

export
const items: PortfolioItem[] = [
	{
		id: 'projects',
		label: 'Projects',
		mainImage: 'https://via.placeholder.com/600x600?text=Projects',
		wheelIcon: 'folder-open',
		wheelIconColor: '#f1d592',
		parentCategories: [
			'root',
		],
	}, {
		id: 'work-history',
		label: 'Work History',
		mainImage: 'https://via.placeholder.com/600x600?text=Projects',
		wheelIcon: 'business',
		wheelIconColor: '#aaaaaa',
		parentCategories: [
			'root',
		],
	}, {
		id: 'contact',
		label: 'Contact',
		mainImage: 'https://via.placeholder.com/600x600?text=Projects',
		wheelIcon: 'person',
		parentCategories: [
			'root',
		],
	}, {
		id: 'about',
		label: 'About Me',
		mainImage: 'https://via.placeholder.com/600x600?text=Projects',
		wheelIcon: 'help-circle',
		wheelIconColor: '#24a0ed',
		parentCategories: [
			'root',
		],
	}, {
		id: 'node',
		label: 'node',
		mainImage: 'https://via.placeholder.com/500x500?text=Node',
		wheelImage: '/images/node-logo.png',
		parentCategories: [
			'typescript',
		],
		page: {
			title: 'Foo',
			description: 'My random description',
			imagePreviews: [{
				url: 'https://via.placeholder.com/720x1280?text=Preview 1',
				description: 'Preview 1 Preview 1 Preview 1 Preview 1',
			}, {
				url: 'https://via.placeholder.com/720x1280?text=Preview 2',
				description: 'Preview 2 Preview 2 Preview 2 Preview 2',
			}, {
				url: 'https://via.placeholder.com/720x1280?text=Preview 3',
				description: 'Preview 3 Preview 3 Preview 3 Preview 3',
			}],
			links: [],
		},
	}, {
		id: 'javascript',
		label: 'javascript',
		mainImage: 'https://via.placeholder.com/500x550?text=Javascript',
		wheelImage: '/images/javascript-logo.png',
		parentCategories: [
			'typescript',
		],
	}, {
		id: 'pwa',
		label: 'pwa',
		mainImage: 'https://via.placeholder.com/700x550?text=PWA',
		wheelImage: '/images/pwa-logo.png',
		parentCategories: [
			'typescript',
		],
	}, {
		id: 'react',
		label: 'React',
		mainImage: 'https://via.placeholder.com/600x600?text=React',
		wheelImage: '/images/react-logo.webp',
		parentCategories: [
		],
	}, {
		id: 'angular',
		label: 'angular',
		mainImage: 'https://via.placeholder.com/550x550?text=Angular',
		wheelImage: '/images/angular-logo.png',
		parentCategories: [
		],
	},
];
