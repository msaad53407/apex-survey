export type SubField = {
	label: string;
	id:
		| "property"
		| "propertyAge"
		| "propertyPrice"
		| "noOfBedrooms"
		| "noOfElectricalAppliances"
		| "noOfGasAppliances"
		| "noOfFloors"
		| "noOfCircuits"
		| "typeOfSupply"
		| "consumerUnits"
		| "propertyArea";
	options: {
		id: string;
		label: string;
		propertyType?: string;
	}[];
	fieldType: "checkbox" | "counter" | "dropdown";
};
export type Project = {
	slug: string;
	title: string;
	link?: string;
	thumbnail: string;
	description: string;
	features: string[];
	// technologies: TechnologyCard[];
	type: "residential" | "commercial" | "";
	images: {
		src: string;
		alt: string;
	}[];
};
