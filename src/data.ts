import { PortfolioItem } from '@common/types';

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
		page: {
			description: '',
			imagePreviews: [],
			subContents: [{
				label: '8/2015 - 4/2018',
				content: /*html*/`
					<h3>Staff UI Engineer - HomeAway</h3>
					<p>
						Austin, TX
					</p>

					<h4>Responsibilities/Accomplishments</h4>
					<ul>
						<li>
							Responsible for moving the state of the art forward through collaboration with other lead engineers.
						</li>
						<li>
							Responsible for developing junior engineers.
						</li>
						<li>
							Advancing organizational conversation around burgeoning Progressive Web App standards.
						</li>
						<li>
							Organized cross-team efforts to increase page performance.
						</li>
						<li>
							Early adopter of GraphQL and part of larger strategic effort to spread the technology across the company.
						</li>
						<li>
							Created first sharable, full vertical slice of user functionality, aided by GraphQL adoption.
						</li>
						<li>
							Paved the way for teams to migrate from Java to Node by resolving critical first-adopter issues.
						</li>
						<li>
							Deployed first production React application in company migration from BackboneJS to Node.
						</li>
						<li>
							Worked closely with recruiting during engineering organization expansion to oversee interview panels.
						</li>
					</ul>

					<h4>Technologies</h4>
					<ul>
						<li>
							React
						</li>
						<li>
							Redux
						</li>
						<li>
							BackboneJS
						</li>
						<li>
							Typescript
						</li>
						<li>
							GraphQL
						</li>
						<li>
							Apollo
						</li>
						<li>
							Babel
						</li>
						<li>
							Webpack
						</li>
						<li>
							NodeJS
						</li>
						<li>
							HapiJS
						</li>
						<li>
							Less
						</li>
						<li>
							Gulp
						</li>
						<li>
							RequireJS
						</li>
					</ul>
				`,
			}, {
				label: '4/2012 - 8/2015',
				content: /*html*/`
					
				`,
			}],
			links: [],
		},
	}, {
		id: 'contact',
		label: 'Contact',
		mainImage: 'https://via.placeholder.com/600x600?text=Contact',
		wheelIcon: 'person',
		parentCategories: [
			'root',
		],
		page: {
			description: `
			`,
			imagePreviews: [],
			subContents: [],
			links: [],
		},
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
		mainImage: 'https://via.placeholder.com/768x576?text=Node',
		wheelIcon: 'apps',
		parentCategories: [
			'projects',
		],
	}, {
		id: 'projects-apps',
		label: 'Apps',
		mainImage: 'https://via.placeholder.com/768x576?text=Node',
		wheelIcon: 'phone-portrait-sharp',
		wheelIconColor: '#949494',
		parentCategories: [
			'projects',
		],
	},
	{
		id: 'projects-demos',
		label: 'Fun & Games',
		mainImage: 'https://via.placeholder.com/768x576?text=Node',
		wheelIcon: 'logo-xbox',
		parentCategories: [
			'projects',
		],
	},
	{
		id: 'projects-sites',
		label: 'Sites',
		mainImage: 'https://via.placeholder.com/768x576?text=Node',
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
		mainImage: 'https://via.placeholder.com/768x576?text=Node',
		wheelImage: '/images/wheel-logos/blog-avatar.png',
		parentCategories: [
			'projects-sites',
			'projects-all',
		],
	},
	{
		id: 'projects-sites-indiecomicrack',
		label: 'IndieComic Rack',
		mainImage: 'https://via.placeholder.com/768x576?text=Node',
		wheelImage: '/images/wheel-logos/icr-logo.jpg',
		page: {
			description: '',
			imagePreviews: [],
			subContents: [],
			links: [],
		},
		parentCategories: [
			'projects-sites',
			'projects-all',
		],
	},
	{
		id: 'projects-sites-fullviewnews',
		label: 'FullView News',
		mainImage: 'https://via.placeholder.com/768x576?text=Node',
		wheelImage: '/images/wheel-logos/fvn-logo.jpg',
		page: {
			description: '',
			imagePreviews: [],
			subContents: [],
			links: [],
		},
		parentCategories: [
			'projects-sites',
			'projects-all',
		],
	},
	{
		id: 'projects-sites-old-portfolio',
		label: 'Old Portfolio',
		mainImage: 'https://via.placeholder.com/768x576?text=Node',
		mainVideo: '/preview-videos/old-portfolio.mp4',
		wheelIcon: 'folder',
		wheelIconColor: '#999999',
		parentCategories: [
			'projects-sites',
			'projects-all',
		],
		page: {
			description: `
				This is pretty self explanitory.  This is a portfolio of work I'd put together in pretty
				short order.  It wasn't meant to be more utilitarian.  That's to say, it's absolutely <em>hideous</em>
				but got the job done of collecting much of my work into one spot.
			`,
			subContents: [],
			links: [
				{
					label: 'Open',
					url: 'https://davidgranado.com/portfolio/',
				},
			],
			imagePreviews: [
				// {
				// 	description: 'Home',
				// 	url: '/images/preview-images/old-portfolio/old-portfolio-1.png',
				// },
				// {
				// 	description: 'Home - Heading',
				// 	url: '/images/preview-images/old-portfolio/old-portfolio-2.png',
				// },
				// {
				// 	description: 'Work History',
				// 	url: '/images/preview-images/old-portfolio/old-portfolio-3.png',
				// },
			],
		},
	},
	{
		id: 'projects-sites-portfolio',
		label: 'Portfolio',
		mainImage: 'https://via.placeholder.com/768x576?text=Node',
		wheelIcon: 'folder',
		wheelIconColor: '#f1d592',
		page: {
			description: 'foooo',
			imagePreviews: [
				{
					description: 'asdfasdfsa',
					url: 'https://via.placeholder.com/768x576?text=Node',
				},
			],
			links: [],
			subContents: [
				{
					label: 'Fooooo 1',
					content: 'Baaaar 1',
				},
				{
					label: 'Fooooo 2',
					content: 'Baaaar 2',
				},
				{
					label: 'Fooooo 3',
					content: 'Baaaar 3',
				},
			],
		},
		parentCategories: [
			'projects-sites',
			'projects-all',
		],
	},
	{
		id: 'projects-sites-argdigger',
		label: 'ArgDigger',
		mainImage: 'https://via.placeholder.com/768x576?text=Node',
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
		label: 'ShopLystr',
		mainImage: '/images/wheel-main-images/shoplystr.png',
		mainVideo: '/preview-videos/shoplystr.mp4',
		wheelImage: '/images/wheel-logos/sl-logo.png',
		parentCategories: [
			'projects-apps',
			'projects-all',
		],
	}, {
		id: 'projects-apps-phungible',
		label: 'Phungible',
		mainVideo: '/preview-videos/phungible.mp4',
		mainImage: '/images/wheel-main-images/phungible.png',
		wheelImage: '/images/wheel-logos/p-logo.png',
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
		mainImage: 'https://via.placeholder.com/768x576?text=Node',
		wheelImage: '/images/wheel-logos/set-card.png',
		parentCategories: [
			'projects-demos',
			'projects-all',
		],
		page: {
			description: '',
			subContents: [],
			imagePreviews: [],
			links: [{
				label: 'Play it now',
				url: '/projects/make-a-set/',
			}, {
				label: 'Blog entry',
				url: 'https://blog.davidgranado.com/2016/10/06/set/',
			}],
		},
	},
	{
		id: 'project-demos-meteor',
		label: 'Meteor',
		mainImage: 'https://via.placeholder.com/768x576?text=Node',
		wheelIcon: 'game-controller',
		parentCategories: [
			'projects-demos',
			'projects-all',
		],
	},
	{
		id: 'project-demos-snake',
		label: 'Snake',
		mainImage: 'https://via.placeholder.com/768x576?text=Node',
		wheelIcon: 'game-controller',
		parentCategories: [
			'projects-demos',
			'projects-all',
		],
	},
	{
		id: 'project-demos-Worm',
		label: 'Worm',
		mainImage: 'https://via.placeholder.com/768x576?text=Node',
		wheelIcon: 'game-controller',
		parentCategories: [
			'projects-demos',
			'projects-all',
		],
	},
	{
		id: 'project-demos-rts',
		label: 'Space RTS',
		mainImage: 'https://via.placeholder.com/768x576?text=Node',
		wheelIcon: 'game-controller',
		parentCategories: [
			'projects-demos',
			'projects-all',
		],
	},
	{
		id: 'project-demos-rts',
		label: 'Place Value Illustrator',
		mainImage: 'https://via.placeholder.com/768x576?text=Node',
		wheelIcon: 'game-controller',
		parentCategories: [
			'projects-demos',
			'projects-all',
		],
		page: {
			description: '',
			subContents: [],
			links: [
				{
					label: 'Open',
					url: 'https://davidgranado.com/projects/counter/',
				},
			],
			imagePreviews: [
				{
					description: 'asdfasdfsa',
					url: 'https://via.placeholder.com/768x576?text=Node',
				},
			],
		},
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
// 		wheelImage: '/images/wheel-logos/javascript-logo.png',
// 		parentCategories: [
// 			'typescript',
// 		],
// 	}, {
// 		id: 'pwa',
// 		label: 'pwa',
// 		mainImage: 'https://via.placeholder.com/700x550?text=PWA',
// 		wheelImage: '/images/wheel-logos/pwa-logo.png',
// 		parentCategories: [
// 			'typescript',
// 		],
// 	}, {
// 		id: 'react',
// 		label: 'React',
// 		mainImage: 'https://via.placeholder.com/600x600?text=React',
// 		wheelImage: '/images/wheel-logos/react-logo.webp',
// 		parentCategories: [
// 		],
// 	}, {
// 		id: 'angular',
// 		label: 'angular',
// 		mainImage: 'https://via.placeholder.com/550x550?text=Angular',
// 		wheelImage: '/images/wheel-logos/angular-logo.png',
// 		parentCategories: [
// 		],
// 	},
// ];
