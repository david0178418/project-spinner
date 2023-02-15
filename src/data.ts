import { PortfolioItem } from '@common/types';

const Root: PortfolioItem[] = [
	{
		id: 'projects',
		label: 'Projects',
		mainImage: '/project-spinner/images/wheel-main-images/projects.jpg',
		wheelIcon: 'folder-open',
		wheelIconColor: '#f1d592',
		parentCategories: [
			'root',
		],
	},
	{
		id: 'work-history',
		label: 'Work History',
		mainImage: '/project-spinner/images/wheel-main-images/work-history.jpg',
		wheelIcon: 'business',
		wheelIconColor: '#aaaaaa',
		parentCategories: [
			'root',
		],
		page: {
			description: '',
			imagePreviews: [],
			subContents: [{
				label: '8/15-Present',
				content: /*html*/`
					<h3>Principal Software Engineer - Gerson Lehrman Group (GLG)</h3>
					<p>Austin, TX</p>
					
					<h3>Responsibilities/Accomplishments</h3>
					<ul>
						<li>Developed tools for client-facing team at crucial stage of the business cycle that saved over $1 million dollar per year of potentially lost business.</li>
						<li>Developed Zendesk-embeded application to sufficiently surface appropriate client data for the given context.</li>
						<li>Developed embeddable widget to collect internal customer feedback/pain points and identify opportunities for improved user satisfaction.</li>
						<li>Created strategy to refactor and update key legacy software UI. Embedded a completely new React UI within an existing AngularJS application and allowed users to freely toggle between them until new development reached feature parity.</li>
						<li>Partnered to create internal feature flag system.</li>
					</ul>
					
					<h3>Technologies</h3>
					<ul>
						<li>React</li>
						<li>SQL Server</li>
						<li>Azure Cosmos DB</li>
						<li>Webpack</li>
						<li>NodeJS</li>
						<li>Typescript</li>
						<li>AngularJS</li>
					</ul>
				`,
			}, {
				label: '8/15-4/18',
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
							Created first shareable, full vertical slice of user functionality, aided by GraphQL adoption.
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
						<li>React</li>
						<li>Redux</li>
						<li>BackboneJS</li>
						<li>Typescript</li>
						<li>GraphQL</li>
						<li>Apollo</li>
						<li>Babel</li>
						<li>Webpack</li>
						<li>NodeJS</li>
						<li>HapiJS</li>
						<li>Less</li>
						<li>Gulp</li>
						<li>RequireJS</li>
					</ul>
				`,
			}, {
				label: '4/12-8/15',
				content: /*html*/`
					<h3>Senior UI Developer - Spredfast</h3>
					<p>Austin, TX</p>
					
					<h4>Responsibilities/Accomplishments</h4>
					<ul>
						<li>Created rich, interactive user interfaces and dashboards for enterprise customers.</li>
						<li>Member of core UI architecture team which determined patterns and best practices for the wider team.</li>
						<li>Spearheaded investigation of Flux frameworks for potential integration with existing system.</li>
						<li>Identified and proposed solutions for Flux integration challenges.</li>
						<li>Investigated conversion of legacy Gradle/r.js/Requirejs build to Webpack.</li>
					</ul>
					
					<h4>Technologies</h4>
					<ul>
						<li>React</li>
						<li>Flux</li>
						<li>CanJS</li>
						<li>Node</li>
						<li>Sass</li>
						<li>less</li>
						<li>Bower</li>
						<li>Grunt</li>
						<li>RequireJS</li>
					</ul>
				`,
			}, {
				label: '2/11-4/12',
				content: /*html*/`
					<h3>Senior Web Developer - Easton-Bell Sports, Inc</h3>
					<p>Irving, TX</p>

					<h4>Responsibilities/Accomplishments</h4>
					<ul>
						<li>
							Chief front-end technologist for high traffic marketing and e-commerce sites across all company brands (Riddell, Giro, Easton, Bell Sports, Blackburn).
						</li>
						<li>
							Owned management of code repositories and code integrity.
						</li>
						<li>
							Worked closely with design and marketing teams to create interactive branding mini-sites.
						</li>
						<li>
							Augmented a number of front-end interfaces on marketing sites by replacing Adobe Flash implementations with more efficient javascript and HTML.
						</li>
					</ul>

					<h4>Technologies</h4>
					<ul>
						<li>PHP</li>
						<li>Javascript</li>
						<li>BackboneJS</li>
						<li>jQuery</li>
						<li>Magento</li>
						<li>Grunt</li>
					</ul>
				`,
			}, {
				label: '12/09-2/11',
				content: /*html*/`
					<h3>Developer Team Lead - Distribion, Inc (new entity split from New Media Gateway)</h3>
					<p>Dallas, TX</p>
					
					<h4>Responsibilities/Accomplishments</h4>
					<ul>
						<li>Continually identified and implemented system changes to maintain/increase performance.</li>
						<li>Performed database migrations and code releases.</li>
						<li>Responsible for interfacing with customers and managing top-tier customer issues.</li>
						<li>Draft, prioritize, and assign development tickets to developers.</li>
						<li>Effectively provided guidance to developers for miscellaneous system questions and troubleshooting of coding issues.</li>
						<li>Performed developer code reviews and coaching sessions to maintain quality.</li>
						<li>Charged with up-training team on development techniques and principles (with major emphasis on javascript).</li>
					</ul>
					
					<h4>Technologies</h4>
					<ul>
						<li>PHP</li>
						<li>PostgresSql</li>
						<li>Javascript</li>
						<li>jQUery</li>
					</ul>
				`,
			}, {
				label: '3/08-12/09',
				content: /*html*/`
					<h3>Web Application Developer - New Media Gateway (parent company of Distribion)</h3>
					<p>Dallas, TX</p>
					
					<h3>Responsibilities/Accomplishments</h3>
					<ul>
						<li>Responsible for development and maintenance of PHP, PostgresSQL, and Javascript on the flagship product in both team and individual projects.</li>
						<li>Designed efficient database schemas for new applications.</li>
						<li>Utilized client-side processing in Javascript to lighten server load (DOM building, AJAX response parsing, UI manipulation) in new reporting applications.</li>
						<li>Effectively implemented new client solutions by integrating with a variety of partner company services via REST and SOAP interfaces.</li>
						<li>Success of product team aided in creation of new child company, "Distribion, Inc".</li>
					</ul>
					
					<h3>Technologies</h3>
					<ul>
						<li>PHP</li>
						<li>PostgresSql</li>
						<li>Javascript</li>
						<li>jQUery</li>
					</ul>
				`,
			}, {
				label: '8/07-3/08',
				content: /*html*/`
					<h3>Application Developer - Simmons Corp</h3>
					<p>Richardson, TX</p>
					
					<h4>Responsibilities/Accomplishments</h4>
					<ul>
						<li>Rapidly created custom reports using Crystal Reports in VB6 and VB.Net.</li>
						<li>Proposed, designed, and implemented a C#.Net solution for automation of critical tasks involving file/data collection and monitoring across dozens of local systems.</li>
						<li>Worked closely with electrical engineers to develop head-end software for newly developed node polling system.</li>
						<li>Rapidly developed numerous tools in C#.Net to aid in diagnosis of issues with primary company products.</li>
						<li>Developed microprocessor code in proprietary C library for Rabbit microcontrollers.</li>
					</ul>
					
					<h4>Technologies</h4>
					<ul>
						<li>C</li>
						<li>C#</li>
						<li>VB.net</li>
						<li>VB6</li>
						<li>SourceSafe</li>
					</ul>
				`,
			}],
			links: [],
		},
	}, {
		id: 'contact',
		label: 'Contact',
		mainImage: '/project-spinner/images/wheel-main-images/soon.svg',
		wheelIcon: 'person',
		parentCategories: [
			'root',
		],
		page: {
			description: /*html*/`
				<style>
					.email a {
						color: #ffffff;
					}
					.email button {
						border: 0;
						border-radius: 5px;
					}
					.active button {
						display: none;
					}
				</style>
				<div class="email" onClick="this.classList.add('active')">
					<a onclick="setTimeout(() => {const name='david',domain='davidgranado.com',email=name+'@'+domain;this.innerText=email;this.href='mailto:'+email;}, 0)">
						<button>Reveal Email</button>
					</a>
				</div>
			`,
			imagePreviews: [],
			subContents: [],
			links: [],
		},
	}, {
		id: 'about',
		label: 'About Me',
		mainImage: '/project-spinner/images/wheel-main-images/soon.svg',
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
		mainImage: '/project-spinner/images/wheel-main-images/gotta-make.svg',
		wheelIcon: 'apps',
		parentCategories: [
			'projects',
		],
	}, {
		id: 'projects-apps',
		label: 'Apps',
		mainImage: '/project-spinner/images/wheel-main-images/gotta-make.svg',
		wheelIcon: 'phone-portrait-sharp',
		wheelIconColor: '#949494',
		parentCategories: [
			'projects',
		],
	},
	{
		id: 'projects-demos',
		label: 'Fun & Games',
		mainImage: '/project-spinner/images/wheel-main-images/gotta-make.svg',
		wheelIcon: 'logo-xbox',
		parentCategories: [
			'projects',
		],
	},
	{
		id: 'projects-sites',
		label: 'Sites',
		mainImage: '/project-spinner/images/wheel-main-images/gotta-make.svg',
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
		mainImage: '/project-spinner/images/wheel-main-images/blog.png',
		wheelImage: '/project-spinner/images/wheel-logos/blog-avatar.png',
		parentCategories: [
			'projects-sites',
			'projects-all',
		],
		page: {
			description: '',
			imagePreviews: [],
			links: [{
				label: 'Open',
				url: 'https://davidgranado.com',
			}],
			subContents: [ {
				label: 'Technologies Used',
				content: /*html*/`
					<ul>
						<li>Hexo</li>
						<li>Firebase Hosting</li>
					</ul>
				`,
			}],
		},
	},
	{
		id: 'projects-sites-notso-social',
		label: 'NotSo.Social',
		mainImage: '/project-spinner/images/wheel-main-images/notso.social.png',
		wheelImage: '/project-spinner/images/wheel-logos/notso.social.logo.png',
		page: {
			description: '',
			imagePreviews: [
				{
					description: 'asdfasdfsa',
					url: '/project-spinner/images/preview-images/not-so-social/not-so-social-0.png',
				},
				{
					description: 'asdfasdfsa',
					url: '/project-spinner/images/preview-images/not-so-social/not-so-social-1.png',
				},
				{
					description: 'asdfasdfsa',
					url: '/project-spinner/images/wheel-main-images/notso.social.png',
				},
			],
			links: [{
				label: 'Open',
				url: 'https://notso.social',
			}],
			subContents: [{
				label: 'About',
				content: /*html*/`
					<p>
						This is a project that has yet to formally "launch" as of writing.
					</p>
					<p>
						<a href="http://notso.social" target="__blank">NotSo.Social</a> is testing a different way of ranking content from user feedback.
						Rather than users using unlimited "votes" or "likes", ranking of content is a finite
						resource, forcing users to pick and choose that content that they actually value.
					</p>
					<p>
						For more about the thoughts and motivations beheind the site, see the <a href="http://notso.social/faq" target="__blank"">FAQ</a>.
					</p>
				`,
			}, {
				label: 'Technologies',
				content: /*html*/`
					<ul>
						<li>React</li>
						<li>Nextjs</li>
						<li>Typescript</li>
						<li>Mui</li>
						<li>MongoDB</li>
						<li>Vercel</li>
					</ul>
				`,
			}],
		},
		parentCategories: [
			'projects-sites',
			'projects-all',
		],
	},
	{
		id: 'projects-sites-indiecomicrack',
		label: 'IndieComic Rack',
		mainImage: '/project-spinner/images/wheel-main-images/indiecomicrack.png',
		wheelImage: '/project-spinner/images/wheel-logos/icr-logo.jpg',
		page: {
			description: '',
			imagePreviews: [],
			links: [{
				label: 'Open',
				url: 'https://indiecomicrack.com',
			}],
			subContents: [{
				label: 'Technologies',
				content: /*html*/`
					<ul>
						<li>React</li>
						<li>SemanticUI</li>
						<li>Typescript</li>
						<li>Webpack</li>
						<li>
							Firebase
							<ul>
								<li>Cloud Functions</li>
								<li>Hosting</li>
							</ul>
						</li>
					</ul>
				`,
			}],
		},
		parentCategories: [
			'projects-sites',
			'projects-all',
		],
	},
	{
		id: 'projects-sites-fullviewnews',
		label: 'FullView News',
		mainImage: '/project-spinner/images/wheel-main-images/fullviewnews.png',
		wheelImage: '/project-spinner/images/wheel-logos/fvn-logo.jpg',
		parentCategories: [
			'projects-sites',
			'projects-all',
		],
		page: {
			description: '',
			imagePreviews: [],
			links: [{
				label: 'Open',
				url: 'https://fullview.news',
			}],
			subContents: [ {
				label: 'Technologies Used',
				content: /*html*/`
					<ul>
						<li>React</li>
						<li>NextJS</li>
						<li>ReactBootstrap</li>
						<li>Typescript</li>
						<li>SASS</li>
						<li>Webpack</li>
						<li>
							Firebase
							<ul>
								<li>Cloud Functions</li>
								<li>Firestore</li>
								<li>Cloud Storage</li>
								<li>Hosting</li>
							</ul>
						</li>
					</ul>
				`,
			}],
		},
	},
	{
		id: 'projects-sites-old-portfolio',
		label: 'Old Portfolio',
		mainImage: '/project-spinner/images/wheel-main-images/old-portfolio.png',
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
			links: [
				{
					label: 'Open',
					url: 'https://davidgranado.com/portfolio/',
				},
			],
			imagePreviews: [
				// {
				// 	description: 'Home',
				// 	url: '/project-spinner/images/preview-images/old-portfolio/old-portfolio-1.png',
				// },
				// {
				// 	description: 'Home - Heading',
				// 	url: '/project-spinner/images/preview-images/old-portfolio/old-portfolio-2.png',
				// },
				// {
				// 	description: 'Work History',
				// 	url: '/project-spinner/images/preview-images/old-portfolio/old-portfolio-3.png',
				// },
			],
			subContents: [],
		},
	},
	{
		id: 'projects-sites-portfolio',
		label: 'Portfolio',
		mainImage: '/project-spinner/images/wheel-main-images/soon.svg',
		wheelIcon: 'folder',
		wheelIconColor: '#f1d592',
		parentCategories: [
			'projects-sites',
			'projects-all',
		],
		page: {
			description: 'This...this right here.  You\'re looking at it😄.',
			imagePreviews: [],
			links: [],
			subContents: [ {
				label: 'Technologies Used',
				content: /*html*/`
					<ul>
						<li>React</li>
						<li>FramerMotion</li>
						<li>React-Bootstrap</li>
						<li>Typescript</li>
						<li>SASS</li>
						<li>Webpack</li>
						<li>Firebase Hosting</li>
					</ul>
				`,
			}],
		},
	},
];

const ProjectApps: PortfolioItem[] = [
	{
		id: 'projects-apps-shoplystr',
		label: 'ShopLystr',
		mainImage: '/project-spinner/images/wheel-main-images/shoplystr.png',
		mainVideo: '/preview-videos/shoplystr.mp4',
		wheelImage: '/project-spinner/images/wheel-logos/sl-logo.png',
		parentCategories: [
			'projects-apps',
			'projects-all',
		],
		page: {
			description: 'A simple shopping list app with realtime shared lists.',
			imagePreviews: [],
			links: [
				{
					label: 'Landing Page',
					url: 'https://shoplystr.com',
				}, {
					label: 'Web App',
					url: 'https://shoplystr.app',
				}, {
					label: 'Google Play Store',
					url: 'https://play.google.com/store/apps/details?id=com.shoplystr.app&utm_source=portfolio&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1',
				},
			],
			subContents: [{
				label: 'Motivation',
				content: /*html*/`
					<p>
						This project was made simply because I have a horrible memory.
						And it was starting to get me into trouble when I would go to the
						store and forget one of the three items my wife sent me to get.
					</p>
					<p>
						We had tried using some list solutions like Wonderlist,
						but it didn't seem to quite fit our workflow.  AND it always
						seemed to be having issues as well.
					</p>
					<p>
						Additionally, there was one feature she was looking for, but
						couldn't seem to find. She wished for the ability to save
						lists of things she commonly bought together and make a
						new list from those.
					</p>
					<p>
						This seemed simple enough, so I decided to use this as an
						excuse to give a combination of Ionic and the Firebase
						platform a try.
					</p>
					<p>
						As a result, I've become huge fans of both.
					</p>
				`,
			}, {
				label: 'Technologies Used',
				content: /*html*/`
					<ul>
						<li>Angular</li>
						<li>Ionic</li>
						<li>RXJS</li>
						<li>Typescript</li>
						<li>SASS</li>
						<li>Webpack</li>
						<li>
							Firebase
							<ul>
								<li>Cloud Functions</li>
								<li>Firestore</li>
								<li>Cloud Messaging</li>
								<li>Auth</li>
								<li>Hosting</li>
							</ul>
						</li>
					</ul>
				`,
			}],
		},
	}, {
		id: 'projects-apps-phungible',
		label: 'Phungible',
		mainVideo: '/preview-videos/phungible.mp4',
		mainImage: '/project-spinner/images/wheel-main-images/phungible.png',
		wheelImage: '/project-spinner/images/wheel-logos/p-logo.png',
		parentCategories: [
			'projects-apps',
			'projects-all',
		],
		page: {
			description: `
				<p>
					A simple budgeting app for those with simple "paycheck in, bills/expenses out".
					It provides the ability to project how much amoney you'll have on any given day,
					assuming you stick to your proposed budget.
				</p>
			`,
			links: [
				{
					label: 'Open',
					url: 'https://phungible.app',
				},
			],
			imagePreviews: [],
			subContents: [{
				label: 'Motivation',
				content: /*html*/`
					<p>
						When I was younger, I wanted to find some software solution
						for tracking my money.  When I shopped around, it seemed like
						everything was geared squarely at CPAs.  Given that I had
						no assets, a paycheck, and bills, I wanted something simple
						that would help me determine how much money I would have
						on a given day and flag when I might go red.
					</p>
					<p>
						This app has taken on a couple of incarnations. The earliest
						of which was written in C#.  This latest iteration is a rewrite
						of an Angular/couchdb version I'd developed.
					</p>
					<p>
						Unfortunately, my financial situation is a bit more complex
						than when I first came up with this idea, meaning I have yet
						to give this an extended to run.  I used this as more of an
						excuse to try out Ionic's new React version.
					</p>
					<p>
						In the end, I'm quite happy with the results
					</p>
				`,
			}, {
				label: 'Technologies Used',
				content: /*html*/`
					<ul>
						<li>React</li>
						<li>Ionic</li>
						<li>RXJS</li>
						<li>Typescript</li>
						<li>SASS</li>
						<li>Webpack</li>
						<li>
							Firebase
							<ul>
								<li>Cloud Functions</li>
								<li>Cloud Storage</li>
								<li>Firestore</li>
								<li>Auth</li>
								<li>Hosting</li>
							</ul>
						</li>
					</ul>
				`,
			}],
		},
	},
];

const ProjectFunGames: PortfolioItem[] = [
	{
		id: 'project-demos-set',
		label: 'Set',
		mainImage: '/project-spinner/images/wheel-main-images/set.png',
		wheelImage: '/project-spinner/images/wheel-logos/set-card.png',
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
		mainImage: '/project-spinner/images/wheel-main-images/meteor.png',
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
					url: 'https://davidgranado.com/projects/meteor-game/',
				},
			],
			imagePreviews: [],
		},
	},
	{
		id: 'project-demos-snake',
		label: 'Snake',
		mainImage: '/project-spinner/images/wheel-main-images/snake.png',
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
					url: 'https://davidgranado.com/projects/snake/',
				},
			],
			imagePreviews: [],
		},
	},
	{
		id: 'project-demos-Worm',
		label: 'Worm',
		mainImage: '/project-spinner/images/wheel-main-images/worm.png',
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
					label: 'Play It Now',
					url: 'https://davidgranado.com/projects/worm/',
				}, {
					label: 'Blog Entry',
					url: 'https://blog.davidgranado.com/2016/10/04/worm/',
				},
			],
			imagePreviews: [],
		},
	},
	{
		id: 'project-demos-rts',
		label: 'Space RTS',
		mainImage: '/project-spinner/images/wheel-main-images/space-rts.png',
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
					label: 'Play It Now',
					url: 'https://davidgranado.com/projects/space-rts/',
				}, {
					label: 'Blog Entry',
					url: 'https://blog.davidgranado.com/2016/10/03/snake/',
				},
			],
			imagePreviews: [
				{
					description: 'asdfasdfsa',
					url: '/project-spinner/images/wheel-main-images/soon.svg',
				},
			],
		},
	},
	{
		id: 'place-value-illustrator',
		label: 'Place Value Illustrator',
		mainImage: '/project-spinner/images/wheel-main-images/number-illustrator.png',
		wheelIcon: 'game-controller',
		parentCategories: [
			'projects-demos',
			'projects-all',
		],
		page: {
			description: 'A simple project to visualize counting and place values.',
			subContents: [],
			imagePreviews: [],
			links: [
				{
					label: 'Open',
					url: 'https://davidgranado.com/projects/counter/',
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
// 		mainImage: '/project-spinner/images/wheel-main-images/soon.svg',
// 		wheelImage: '/project-spinner/images/wheel-logos/javascript-logo.png',
// 		parentCategories: [
// 			'typescript',
// 		],
// 	}, {
// 		id: 'pwa',
// 		label: 'pwa',
// 		mainImage: '/project-spinner/images/wheel-main-images/soon.svg',
// 		wheelImage: '/project-spinner/images/wheel-logos/pwa-logo.png',
// 		parentCategories: [
// 			'typescript',
// 		],
// 	}, {
// 		id: 'react',
// 		label: 'React',
// 		mainImage: '/project-spinner/images/wheel-main-images/soon.svg',
// 		wheelImage: '/project-spinner/images/wheel-logos/react-logo.webp',
// 		parentCategories: [
// 		],
// 	}, {
// 		id: 'angular',
// 		label: 'angular',
// 		mainImage: '/project-spinner/images/wheel-main-images/soon.svg',
// 		wheelImage: '/project-spinner/images/wheel-logos/angular-logo.png',
// 		parentCategories: [
// 		],
// 	},
// ];
