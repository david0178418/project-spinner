// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DetailedHTMLProps, HTMLAttributes } from 'react';

declare global {
	namespace JSX {
		interface IntrinsicElements {
			'ion-icon': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
				name?: string;
				ios?: string;
				md?: string;
				size?: 'large' | 'small'
			};
		}
	}
}

export
interface PortfolioItem {
	id: string;
	label: string;
	link?: string;
	// 768x576
	mainImage?: string;
	mainVideo?: string;
	page?: PageContent;
	parentCategories: string[];
	wheelIcon?: string;
	wheelIconColor?: string;
	wheelImage?: string;
}

interface ImagePreview {
	description: string;
	url: string;
}

interface ResourceLink {
	label: string;
	url: string;
}

export
interface PageSubContent {
	label: string;
	content: string;
}

export
interface PageContent {
	description: string;
	subContents: PageSubContent[];
	imagePreviews: ImagePreview[];
	links: ResourceLink[];
}

export
enum Orientation {
	Landscape = 'landscape',
	Portrait = 'portrait',
}

export
enum RoutePaths {
	Category = '/c',
}
