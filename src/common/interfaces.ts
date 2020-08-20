export
interface PortfolioItem {
	label: string;
	wheelImage: string;
	mainImage: string;
	id: string;
	link?: string;
	parentCategories: string[];
	page?: PageContent;
}

interface ImagePreview {
	url: string;
	description: string;
}

interface ResourceLink {
	url: string;
	label: string;
}

export
interface PageContent {
	title: string;
	description: string;
	imagePreviews: ImagePreview[];
	links: ResourceLink[];
}

export
enum Orientation {
	Landscape = 'landscape',
	Portrait = 'portrait',
}
