import { z } from "zod";
import { InstantQuoteSchema } from "./schema";

export const contactInformation = [
    {
        type: "Client Support",
        icon: "/icons/phone.svg",
        details: "123-456-7890",
    },
    {
        type: "Email",
        icon: "/icons/mail.svg",
        details: "XsDfA@example.com",
    },
    {
        type: "Main Office",
        icon: "/icons/mail.svg",
        details: "123 Street, City, State, Zip",
    },
];

export const termsAndConditions = [
    {
        title: "Scope of Work:",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam numquam, quae totam tempore quibusdam minus vitae dolorem. Tempora, illo dolorem.",
    },
    {
        title: "Client Responsibilities:",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam numquam, quae totam tempore quibusdam minus vitae dolorem. Tempora, illo dolorem.",
    },
    {
        title: "Contract Duration:",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam numquam, quae totam tempore quibusdam minus vitae dolorem. Tempora, illo dolorem.",
    },
    {
        title: "Payment:",
        description: "Lorem ipsum dolor sit amet.",
    },
    {
        title: "Warranty:",
        description: "Lorem ipsum dolor sit amet.",
    },
    {
        title: "Liability:",
        description: "Lorem ipsum dolor sit amet.",
    },
    {
        title: "Disclaimer:",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam numquam, quae totam tempore quibusdam minus vitae dolorem. Tempora, illo dolorem.",
    },
];

export const navLinks = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Contact US",
        path: "/contact-us",
    },
    {
        name: "FAQ",
        path: "/faqs",
    },
];

export const servicesDropdownLinks = [
    {
        name: "Electrical Maintenance/PPM",
        path: "/services/electrical-maintenance",
    },
    {
        name: "Energy Performance Certificate",
        path: "/services/energy-performance-certificate",
    },
    {
        name: "Gas Safety Certificate",
        path: "/services/gas-safety-certificate",
    },
    {
        name: "Fire Alarm Test Report",
        path: "/services/fire-alarm-test-report",
    },
    {
        name: "Electrical Installation Report",
        path: "/services/electrical-installation-report",
    },
    {
        name: "Building Survey Report",
        path: "/services/building-survey-report",
    },
    {
        name: "Fire Risk Assesment",
        path: "/services/fire-risk-assesment",
    },
];
export const contactLinks = [
    {
        web_link: "info@apexsurveyors.org.pk",
        web_text: "info@apexsurveyors.org.pk",
        web_iconPath: "/icons/web.svg",
    },
    {
        phone_link: "0800 048 7474",
        phone_text: "Call Us Free: +0800 048 7474",
        phone_iconPath: "/icons/phone.svg",
    },
];

export const serviceSteps = [
    {
        icon: "/icons/cart.svg",
        heading: "Place Order Online",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolore ducimus quidem doloremque vel quisquam possimus aliquid obcaecati enim, assumenda modi quod atque maxime laborum!",
    },
    {
        icon: "/icons/clipboard-check.svg",
        heading: "Survey Booked",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolore ducimus quidem doloremque vel quisquam possimus aliquid obcaecati enim, assumenda modi quod atque maxime laborum!",
    },
    {
        icon: "/icons/search.svg",
        heading: "Start Land Survey",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolore ducimus quidem doloremque vel quisquam possimus aliquid obcaecati enim, assumenda modi quod atque maxime laborum!",
    },
    {
        icon: "/icons/certificate.svg",
        heading: "Certificate Issued",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolore ducimus quidem doloremque vel quisquam possimus aliquid obcaecati enim, assumenda modi quod atque maxime laborum!",
    },
];

export const services: z.infer<typeof InstantQuoteSchema>["services"] = [
    {
        id: "electrical-installation-conditional-report-eicr",
        label: "Electrcal Installation Conditional Report (EICR)",
        servicePropertyType: ["residential"],
        subFields: [
            "property",
            "noOfBedrooms",
            "consumerUnits"
        ]
    },
    {
        id: "energy-performance-certificate",
        label: "Energy Performance Certificate",
        servicePropertyType: ["residential"],
        subFields: [
            "property",
            "noOfBedrooms",
        ]
    },
    {
        id: "elecrical-portable-appliance-test-pat",
        label: "Eelctrical Portable Appliance Test (PAT)",
        servicePropertyType: ["residential"],
        subFields: [
            "property",
            "noOfElectricalAppliances"
        ]
    },
    {
        id: "gas-safety-certificate",
        label: "Gas Safety Certificate",
        servicePropertyType: ["residential", "commercial"],
        subFields: [
            "property",
            "noOfGasAppliances"
        ]
    },
    {
        id: "boiler-service",
        label: "Boiler Service",
        servicePropertyType: ["residential"],
        subFields: [
            "property",
        ]
    },
    {
        id: "fire-alarm-test-report",
        label: "Fire Alarm Test Report",
        servicePropertyType: ["residential", "commercial"],
        subFields: [
            "property",
            "noOfBedrooms",
        ]
    },
    {
        id: "fire-risk-assessment",
        label: "Fire Risk Assessment",
        servicePropertyType: ["residential", "commercial"],
        subFields: [
            "property",
            "noOfBedrooms",
            "noOfFloors"
        ]
    },
    {
        id: "emergency-light-test-report-eltr",
        label: "Emergency Light Test Report (ELTR)",
        servicePropertyType: ["residential"],
        subFields: [
            "property",
            "noOfBedrooms",
        ]
    },
    {
        id: "legionella-risk-assessement",
        label: "Legionella Risk Assessment",
        servicePropertyType: ["residential"],
        subFields: [
            "property",
            "noOfBedrooms",
        ]
    },
    {
        id: "sap-assessement",
        label: "SAP Assessement",
        servicePropertyType: ["residential"],
        subFields: [
            "property",
            "noOfBedrooms",
        ]
    },
    {
        id: "floor-plans",
        label: "Floor Plans",
        servicePropertyType: ["residential"],
        subFields: [
            "property",
            "noOfBedrooms",
        ]
    },
    {
        id: "building-surveys-rics-lvl3",
        label: "Building Surveys (RICS Level 3)",
        servicePropertyType: ["residential"],
        subFields: [
            "property",
            "noOfBedrooms",
            "propertyAge"
        ]
    },
    {
        id: "house-valuation-survey",
        label: "House Valuation Survey",
        servicePropertyType: ["residential"],
        subFields: [
            "property",
            "noOfBedrooms",
        ]
    },
    {
        id: "home-buyer-report-rics-lvl2",
        label: "Home Buyer Report (RICS Level 2)",
        servicePropertyType: ["residential"],
        subFields: [
            "property",
            "noOfBedrooms",
            "propertyAge",
            "propertyValue",
        ]
    },
    {
        id: "management-asbestos-survey",
        label: "Management Asbestos Survey",
        servicePropertyType: ["residential"],
        subFields: [
            "property",
            "noOfBedrooms",
        ]
    },
    {
        id: "electrical-installation-conditional-report-ceicr",
        label: "Electrical Installation Conditional Report (CEICR)",
        servicePropertyType: ["commercial"],
        subFields: [
            "property",
            "consumerUnits",
            "typeOfSupply",
            "noOfCircuits"
        ]
    },
    {
        id: "electrical-portable-appliance-test-cpat",
        label: "Electrical Portable Appliance Test (CPAT)",
        servicePropertyType: ["commercial"],
        subFields: [
            "property",
            "noOfElectricalAppliances",
        ]
    },
    {
        id: "display-energy-certificate",
        label: "Display Energy Certificate",
        servicePropertyType: ["commercial"],
        subFields: [
            "property",
            "propertyArea"
        ]
    },
    {
        id: "commercial-epc",
        label: "Commercial EPC",
        servicePropertyType: ["commercial"],
        subFields: [
            "property",
            "propertyArea"
        ]
    },
    {
        id: "emergency-light-test-report-celtr",
        label: "Emergency Light Test Report (CELTR)",
        servicePropertyType: ["commercial"],
        subFields: [
            "property",
            "propertyArea"
        ]
    }
];

export const properties = [
    {
        id: "mid-terraced-house",
        label: "Mid Terraced House",
        propertyType: "residential",
    },
    {
        id: "end-terraced",
        label: "End Terraced / Semi House",
        propertyType: "residential",
    },
    {
        id: "detached-house",
        label: "Detached House",
        propertyType: "residential",
    },
    {
        id: "detached-bungalow",
        label: "Detached Bungalow",
        propertyType: "residential",
    },
    {
        id: "semi-detached-bungalow",
        label: "Semi Detached Bungalow",
        propertyType: "residential",
    },
    {
        id: "flat-maisonette-other",
        label: "Flat / Maisonette / Other",
        propertyType: "residential",
    },
    {
        id: "pub-restaurant",
        label: "Pub / Restaurant",
        propertyType: "commercial",
    },
    {
        id: "shop",
        label: "Shop",
        propertyType: "commercial",
    },
    {
        id: "warehouse",
        label: "Warehouse",
        propertyType: "commercial",
    },
    {
        id: "office",
        label: "Office",
        propertyType: "commercial",
    },
    {
        id: "other",
        label: "Other",
        propertyType: "commercial",
    }
];

export const bedroomOptions = [
    {
        id: "studio",
        label: "Studio",
    },
    {
        id: "1",
        label: "1 Bedroom",
    },
    {
        id: "2",
        label: "2 Bedrooms",
    },
    {
        id: "3",
        label: "3 Bedrooms",
    },
    {
        id: "4",
        label: "4 Bedrooms",
    },
    {
        id: "5+",
        label: "5+ Bedrooms",
    },
];

export const electricalAppliancesOptions = [
    {
        id: "1-10",
        label: "1-10 Appliances",
    },
    {
        id: "11-20",
        label: "11-20 Appliances",
    },
    {
        id: "21-30",
        label: "21-30 Appliances",
    },
    {
        id: "30+",
        label: "30+ Appliances",
    },
]

export const gasAppliancesOptions = [
    {
        id: "1",
        label: "1 Gas Appliance",
    },
    {
        id: "2",
        label: "2 Gas Appliances",
    },
    {
        id: "3",
        label: "3 Gas Appliances",
    },
    {
        id: "4+",
        label: "4+ Gas Appliances",
    },

]

export const floorOptions = [
    {
        id: "1",
        label: "1 Floor"
    },
]

export const typeOfSupply = [
    {
        id: "single",
        label: "Single Phase",
    },
    {
        id: "3",
        label: "Three Phase"
    },
    {
        id: "not-sure",
        label: "Not Sure"
    }
]

export const noOfCircuits = [
    {
        id: "10",
        label: "upto 10 Circuits"
    },
    {
        id: "20",
        label: "upto 20 Circuits"
    },
    {
        id: "30+",
        label: "upto 30+ Circuits"
    },

]

export const propertyAge = [
    {
        id: "pre-1940",
        label: "Pre 1940",
    },
    {
        id: "post-1940",
        label: "Post 1940",
    },
]

export const propertyPrice = [
    {
        id: "100k",
        label: "Upto 100k"
    }
]

export const socialLinks = [
    {
        name: "Facebook",
        path: "https://www.facebook.com/",
        iconPath: "/icons/facebook.svg",
    },
    {
        name: "Mail",
        path: "https://twitter.com/",
        iconPath: "/icons/mail.svg",
    },
    {
        name: "Instagram",
        path: "https://www.instagram.com/",
        iconPath: "/icons/instagram.svg",
    },
    {
        name: "LinkedIn",
        path: "https://www.linkedin.com/",
        iconPath: "/icons/linkedin.svg",
    },
];

export const footerNavLinks = [
    ...navLinks,
    {
        name: "Our Services",
        path: "/our-services",
    },
];

export const usefulLinks = [
    {
        name: "How it Works",
        path: "/how-it-works",
    },
    {
        name: "Who need Electrical Installation Report",
        path: "/electrical-installation-report",
    },
    {
        name: "Who need Energy Performance Certificate",
        path: "/energy-performance-certificate",
    },
    {
        name: "Terms and Conditions",
        path: "/terms-and-conditions",
    },
];