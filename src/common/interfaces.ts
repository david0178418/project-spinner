export
interface PortfolioItem {
	parentCategories: string[];
	directLink?: string;
	id: string;
	label: string;
	wheelImage: string;
	mainImage: string;
}

export
enum Orientation {
	Landscape = 'landscape',
	Portrait = 'portrait',
}
