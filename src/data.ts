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
	},
		{
			id: 'projects-apps',
			label: 'Apps',
			mainImage: 'https://via.placeholder.com/500x500?text=Node',
			wheelIcon: 'phone-portrait-sharp',
			wheelIconColor: '#949494',
			parentCategories: [
				'projects',
			],
		},
		{
			id: 'projects-demos',
			label: 'Small Demos',
			mainImage: 'https://via.placeholder.com/500x500?text=Node',
			wheelIcon: 'bulb-outline',
			wheelIconColor: '#ffffba',
			parentCategories: [
				'projects',
			],
		},
		{
			id: 'projects-sites',
			label: 'Sites',
			mainImage: 'https://via.placeholder.com/500x500?text=Node',
			wheelIcon: 'globe-outline',
			wheelIconColor: '#0077be',
			parentCategories: [
				'projects',
			],
		},
			{
				id: 'projects-sites-blog',
				label: 'Personal Blog',
				mainImage: 'https://via.placeholder.com/500x500?text=Node',
				wheelImage: '/images/blog-avatar.png',
				parentCategories: [
					'projects-sites',
				],
			},
			{
				id: 'projects-sites-indiecomicrack',
				label: 'IndieComic Rack',
				mainImage: 'https://via.placeholder.com/500x500?text=Node',
				wheelImage: '/images/icr-logo.jpg',
				parentCategories: [
					'projects-sites',
				],
			},
			{
				id: 'projects-sites-fullviewnews',
				label: 'FullView News',
				mainImage: 'https://via.placeholder.com/500x500?text=Node',
				wheelImage: '/images/fvn-logo.jpg',
				parentCategories: [
					'projects-sites',
				],
			},
			{
				id: 'projects-sites-portfolio',
				label: 'Portfolio',
				mainImage: 'https://via.placeholder.com/500x500?text=Node',
				wheelIcon: 'folder',
				wheelIconColor: '#f1d592',
				parentCategories: [
					'projects-sites',
				],
			},
			{
				id: 'projects-sites-argdigger',
				label: 'ArgDigger',
				mainImage: 'https://via.placeholder.com/500x500?text=Node',
				wheelIcon: 'bookmarks',
				wheelIconColor: '#999999',
				parentCategories: [
					'projects-sites',
				],
			},
	{
		id: 'work-history',
		label: 'Work History',
		mainImage: 'https://via.placeholder.com/600x600?text=Work+History',
		wheelIcon: 'business',
		wheelIconColor: '#aaaaaa',
		parentCategories: [
			'root',
		],
	}, {
		id: 'contact',
		label: 'Contact',
		mainImage: 'https://via.placeholder.com/600x600?text=Contact',
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
