import { PortfolioItem } from '@common/interfaces';

const Root: PortfolioItem[] = [
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
	}, 
];

const Projects: PortfolioItem[] = [
	{
		id: 'projects-all',
		label: 'All Projects',
		mainImage: 'https://via.placeholder.com/500x500?text=Node',
		wheelIcon: 'apps',
		parentCategories: [
			'projects',
		],
	}, {
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
		label: 'Fun & Games',
		mainImage: 'https://via.placeholder.com/500x500?text=Node',
		wheelIcon: 'logo-xbox',
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
];

const ProjectSites: PortfolioItem[] = [
	{
		id: 'projects-sites-blog',
		label: 'Personal Blog',
		mainImage: 'https://via.placeholder.com/500x500?text=Node',
		wheelImage: '/images/blog-avatar.png',
		parentCategories: [
			'projects-sites',
			'projects-all',
		],
	},
	{
		id: 'projects-sites-indiecomicrack',
		label: 'IndieComic Rack',
		mainImage: 'https://via.placeholder.com/500x500?text=Node',
		wheelImage: '/images/icr-logo.jpg',
		parentCategories: [
			'projects-sites',
			'projects-all',
		],
	},
	{
		id: 'projects-sites-fullviewnews',
		label: 'FullView News',
		mainImage: 'https://via.placeholder.com/500x500?text=Node',
		wheelImage: '/images/fvn-logo.jpg',
		parentCategories: [
			'projects-sites',
			'projects-all',
		],
	},
	{
		id: 'projects-sites-old-portfolio',
		label: 'Old Portfolio',
		mainImage: 'https://via.placeholder.com/500x500?text=Node',
		wheelIcon: 'folder',
		wheelIconColor: '#999999',
		parentCategories: [
			'projects-sites',
			'projects-all',
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
			'projects-all',
		],
	},
	{
		id: 'projects-sites-argdigger',
		label: 'ArgDigger',
		mainImage: 'https://via.placeholder.com/500x500?text=Node',
		wheelIcon: 'bookmarks',
		wheelIconColor: '#4ba7cb',
		parentCategories: [
			'projects-sites',
			'projects-all',
		],
	},
];

const ProjectApps: PortfolioItem[] = [
	{
		id: 'projects-apps-shoplystr',
		label: 'ArgDigger',
		mainImage: 'https://via.placeholder.com/500x500?text=Node',
		wheelImage: '/images/sl-logo.png',
		parentCategories: [
			'projects-apps',
			'projects-all',
		],
	}, {
		id: 'projects-apps-phungible',
		label: 'Phungible',
		mainImage: 'https://via.placeholder.com/500x500?text=Node',
		wheelImage: '/images/p-logo.png',
		parentCategories: [
			'projects-apps',
			'projects-all',
		],
	},
];

const ProjectFunGames: PortfolioItem[] = [
	{
		id: 'project-demos-set',
		label: 'Set',
		mainImage: 'https://via.placeholder.com/500x500?text=Node',
		wheelImage: '/images/set-card.png',
		parentCategories: [
			'projects-demos',
			'projects-all',
		],
	},
	{
		id: 'project-demos-meteor',
		label: 'Meteor',
		mainImage: 'https://via.placeholder.com/500x500?text=Node',
		wheelIcon: 'game-controller',
		parentCategories: [
			'projects-demos',
			'projects-all',
		],
	},
	{
		id: 'project-demos-snake',
		label: 'Snake',
		mainImage: 'https://via.placeholder.com/500x500?text=Node',
		wheelIcon: 'game-controller',
		parentCategories: [
			'projects-demos',
			'projects-all',
		],
	},
	{
		id: 'project-demos-Worm',
		label: 'Worm',
		mainImage: 'https://via.placeholder.com/500x500?text=Node',
		wheelIcon: 'game-controller',
		parentCategories: [
			'projects-demos',
			'projects-all',
		],
	},
	{
		id: 'project-demos-rts',
		label: 'Space RTS',
		mainImage: 'https://via.placeholder.com/500x500?text=Node',
		wheelIcon: 'game-controller',
		parentCategories: [
			'projects-demos',
			'projects-all',
		],
	},
];

export
const items = [
	...Root,
	...Projects,
	...ProjectSites,
	...ProjectApps,
	...ProjectFunGames,
];

// const placeholders = [
// 	{
// 		id: 'javascript',
// 		label: 'javascript',
// 		mainImage: 'https://via.placeholder.com/500x550?text=Javascript',
// 		wheelImage: '/images/javascript-logo.png',
// 		parentCategories: [
// 			'typescript',
// 		],
// 	}, {
// 		id: 'pwa',
// 		label: 'pwa',
// 		mainImage: 'https://via.placeholder.com/700x550?text=PWA',
// 		wheelImage: '/images/pwa-logo.png',
// 		parentCategories: [
// 			'typescript',
// 		],
// 	}, {
// 		id: 'react',
// 		label: 'React',
// 		mainImage: 'https://via.placeholder.com/600x600?text=React',
// 		wheelImage: '/images/react-logo.webp',
// 		parentCategories: [
// 		],
// 	}, {
// 		id: 'angular',
// 		label: 'angular',
// 		mainImage: 'https://via.placeholder.com/550x550?text=Angular',
// 		wheelImage: '/images/angular-logo.png',
// 		parentCategories: [
// 		],
// 	},
// ];