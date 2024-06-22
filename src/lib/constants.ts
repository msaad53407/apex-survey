import { z } from "zod";
import { InstantQuoteSchema } from "./schema";
import { SubField } from "@/types";

export const reviewData = [
  {
    image: "/people/andre-styles.jpg",
    name: "Andrea Styles",
    description:
      "Excellent service from start to finish. The team was professional and efficient, making the process smooth and stress-free. Highly recommend!",
    date: "2024-01-06",
  },
  {
    image: "/people/Review-card.png",
    name: "Jonas Jonasson",
    description:
      "Quick and reliable! The entire process was straightforward, and the survey was completed faster than I expected. Great experience overall.",
    date: "2024-05-17",
  },
  {
    image: "/people/michael-dam-mEZ3PoFGs_k-unsplash.jpg",
    name: "Michael Dam",
    description:
      "Outstanding customer service! The staff was friendly and helpful, and the final report was detailed and easy to understand. Very satisfied!",
    date: "2024-04-09",
  },
  {
    image: "/people/usman-yousaf-yIOViGQmjJ4-unsplash.jpg",
    name: "Usman Yousaf",
    description:
      "Top-notch service! The online ordering was easy, the surveyors were punctual and thorough, and the certificate was delivered promptly. Would definitely use again.",
    date: "2024-06-22",
  },
];

export const revenueData = [
  { name: "06", revenue: 300 },
  { name: "07", revenue: 400 },
  { name: "08", revenue: 450 },
  { name: "09", revenue: 500 },
  { name: "10", revenue: 350 },
  { name: "11", revenue: 600 },
  { name: "12", revenue: 400 },
  { name: "13", revenue: 500 },
  { name: "14", revenue: 450 },
  { name: "15", revenue: 550 },
  { name: "16", revenue: 600 },
  { name: "17", revenue: 650 },
  { name: "18", revenue: 500 },
  { name: "19", revenue: 550 },
  { name: "20", revenue: 700 },
  { name: "21", revenue: 800 },
];

export const viewData = [
  { name: "Apr", uv: 4000, pv: 2400, amt: 2400 },
  { name: "May", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Jun", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Jul", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Aug", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Sep", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Oct", uv: 3490, pv: 4300, amt: 2100 },
];

export const dashboardQuotes = [
  {
    name: "Yoda Man",
    email: "yoda@domain.com",
    phone: "+1 555-236-777",
    postcode: "55498",
    surveyType: "Electrical Maintenance/PM",
    address: "Lorem Ipsum Address",
    cardNumber: "Approved",
  },
  {
    name: "Jacob Mark",
    email: "you@domain.com",
    phone: "+1 555-236-777",
    postcode: "55498",
    surveyType: "Gas Safety Checks/CP12",
    address: "Lorem Ipsum Address",
    cardNumber: "Approved",
  },
  {
    name: "John Doe",
    email: "you@domain.com",
    phone: "+1 555-236-777",
    postcode: "55498",
    surveyType: "Gas Safety Checks/CP12",
    address: "Lorem Ipsum Address",
    cardNumber: "Approved",
  },
  {
    name: "Nate Smith",
    email: "you@domain.com",
    phone: "+1 555-236-777",
    postcode: "55498",
    surveyType: "Electrical Installation",
    address: "Lorem Ipsum Address",
    cardNumber: "Cancel",
  },
  {
    name: "Jacob Mark",
    email: "you@domain.com",
    phone: "+1 555-236-777",
    postcode: "55498",
    surveyType: "Building Survey",
    address: "Lorem Ipsum Address",
    cardNumber: "Approved",
  },
  {
    name: "John Matt",
    email: "you@domain.com",
    phone: "+1 555-236-777",
    postcode: "55498",
    surveyType: "Fire Risk Assessment",
    address: "Lorem Ipsum Address",
    cardNumber: "Approved",
  },
];

export const dashboardLinks = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: "/icons/blocks.svg",
  },
  {
    name: "Quotes",
    href: "/dashboard/quotes",
    icon: "/icons/clipboard.svg",
  },
  {
    name: "Add Pricing",
    href: "/dashboard/pricing",
    icon: "/icons/plus.svg",
  },
];

export const contactInformation = [
  {
    type: "Client Support",
    icon: "/icons/phone.svg",
    details: "004432412357",
  },
  {
    type: "Email",
    icon: "/icons/mail-white.svg",
    details: "contact@fairdealelectrical.co.uk",
  },
  {
    type: "Main Office",
    icon: "/icons/mail-white.svg",
    details: `
Fairdeal Electrical services Ltd
47 Vicarage Lane
Ilford
IG1 4AG
London`,
  },
];

export const termsAndConditions = [
  {
    title: "Scope of Work:",
    description:
      "Our services include a comprehensive range of surveying and mapping solutions, tailored to meet the specific needs of each client. This includes but is not limited to boundary surveys, topographic surveys, and construction staking. Detailed project deliverables will be outlined in the individual contract agreement.",
  },
  {
    title: "Client Responsibilities:",
    description:
      "Clients are expected to provide access to the survey site and any relevant documentation necessary for the completion of the project. This includes property deeds, previous survey reports, and any specific instructions or requirements related to the survey.",
  },
  {
    title: "Contract Duration:",
    description:
      "The duration of the contract will be defined by the scope of work and project requirements. Estimated timelines will be provided at the start of the project, and any changes to the schedule will be communicated promptly to the client.",
  },
  {
    title: "Payment:",
    description:
      "Payment terms will be outlined in the individual contract agreement. Generally, a deposit is required upon signing the contract, with the balance due upon completion of the project. Payment methods accepted include bank transfer, credit card, and checks",
  },
  {
    title: "Warranty:",
    description:
      "We stand by the quality of our work and offer a warranty period of six months from the date of project completion. Any errors or omissions identified within this period will be rectified at no additional cost to the client",
  },
  {
    title: "Liability:",
    description:
      "Our liability is limited to the value of the contract. We are not responsible for any indirect or consequential damages arising from the use of our survey reports. Clients are advised to review the reports thoroughly and notify us of any discrepancies.",
  },
  {
    title: "Disclaimer:",
    description:
      "While we strive for accuracy, surveying inherently involves a degree of estimation and judgment. The information provided in our reports is based on the data available at the time of the survey. We recommend clients seek independent verification if critical decisions are based on the survey results.",
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
    web_link: "contact@fairdealelectrical.co.uk",
    web_text: "contact@fairdealelectrical.co.uk",
    web_iconPath: "/icons/mail-white.svg",
  },
  {
    phone_link: "004432412357",
    phone_text: "Call Us Free: +004432412357",
    phone_iconPath: "/icons/phone.svg",
  },
];

export const serviceSteps = [
  {
    icon: "/icons/cart.svg",
    heading: "Place Order Online",
    description:
      "Browse our services and easily place your order online through our user-friendly platform. Ensure all required details are filled out accurately to avoid any delays",
  },
  {
    icon: "/icons/clipboard-check.svg",
    heading: "Survey Booked",
    description:
      "Once your order is placed, we will schedule a survey at your convenience. Our team will reach out to confirm the appointment and gather any additional information needed",
  },
  {
    icon: "/icons/search.svg",
    heading: "Start Land Survey",
    description:
      "Our professional surveyors will conduct a thorough survey of your property, ensuring all measurements and data are collected precisely and accurately",
  },
  {
    icon: "/icons/certificate.svg",
    heading: "Certificate Issued",
    description:
      "After the survey is complete, we will issue a detailed certificate. This document will include all relevant data and findings, formally concluding the process.",
  },
];

export const services: z.infer<typeof InstantQuoteSchema>["services"] = [
  {
    id: "electrical-installation-conditional-report-eicr",
    label: "Electrcal Installation Conditional Report (EICR)",
    servicePropertyType: ["residential"],
    subFields: ["property", "noOfBedrooms", "consumerUnits"],
  },
  {
    id: "energy-performance-certificate",
    label: "Energy Performance Certificate",
    servicePropertyType: ["residential"],
    subFields: ["property", "noOfBedrooms"],
  },
  {
    id: "elecrical-portable-appliance-test-pat",
    label: "Eelctrical Portable Appliance Test (PAT)",
    servicePropertyType: ["residential"],
    subFields: ["property", "noOfElectricalAppliances"],
  },
  {
    id: "gas-safety-certificate",
    label: "Gas Safety Certificate",
    servicePropertyType: ["residential", "commercial"],
    subFields: ["property", "noOfGasAppliances"],
  },
  {
    id: "boiler-service",
    label: "Boiler Service",
    servicePropertyType: ["residential"],
    subFields: ["property"],
  },
  {
    id: "fire-alarm-test-report",
    label: "Fire Alarm Test Report",
    servicePropertyType: ["residential", "commercial"],
    subFields: ["property", "noOfBedrooms"],
  },
  {
    id: "fire-risk-assessment",
    label: "Fire Risk Assessment",
    servicePropertyType: ["residential", "commercial"],
    subFields: ["property", "noOfBedrooms", "noOfFloors", "propertyArea"],
  },
  {
    id: "emergency-light-test-report-eltr",
    label: "Emergency Light Test Report (ELTR)",
    servicePropertyType: ["residential"],
    subFields: ["property", "noOfBedrooms"],
  },
  {
    id: "legionella-risk-assessement",
    label: "Legionella Risk Assessment",
    servicePropertyType: ["residential"],
    subFields: ["property", "noOfBedrooms"],
  },
  {
    id: "sap-assessement",
    label: "SAP Assessement",
    servicePropertyType: ["residential"],
    subFields: ["property", "noOfBedrooms"],
  },
  {
    id: "floor-plans",
    label: "Floor Plans",
    servicePropertyType: ["residential"],
    subFields: ["property", "noOfBedrooms"],
  },
  {
    id: "building-surveys-rics-lvl3",
    label: "Building Surveys (RICS Level 3)",
    servicePropertyType: ["residential"],
    subFields: ["property", "noOfBedrooms", "propertyAge"],
  },
  {
    id: "house-valuation-survey",
    label: "House Valuation Survey",
    servicePropertyType: ["residential"],
    subFields: ["property", "noOfBedrooms"],
  },
  {
    id: "home-buyer-report-rics-lvl2",
    label: "Home Buyer Report (RICS Level 2)",
    servicePropertyType: ["residential"],
    subFields: ["property", "noOfBedrooms", "propertyAge", "propertyValue"],
  },
  {
    id: "management-asbestos-survey",
    label: "Management Asbestos Survey",
    servicePropertyType: ["residential"],
    subFields: ["property", "noOfBedrooms"],
  },
  {
    id: "electrical-installation-conditional-report-ceicr",
    label: "Electrical Installation Conditional Report (CEICR)",
    servicePropertyType: ["commercial"],
    subFields: ["property", "consumerUnits", "typeOfSupply", "noOfCircuits"],
  },
  {
    id: "electrical-portable-appliance-test-cpat",
    label: "Electrical Portable Appliance Test (CPAT)",
    servicePropertyType: ["commercial"],
    subFields: ["property", "noOfElectricalAppliances"],
  },
  {
    id: "display-energy-certificate",
    label: "Display Energy Certificate",
    servicePropertyType: ["commercial"],
    subFields: ["property", "propertyArea"],
  },
  {
    id: "commercial-epc",
    label: "Commercial EPC",
    servicePropertyType: ["commercial"],
    subFields: ["property", "propertyArea"],
  },
  {
    id: "emergency-light-test-report-celtr",
    label: "Emergency Light Test Report (CELTR)",
    servicePropertyType: ["commercial"],
    subFields: ["property", "propertyArea"],
  },
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
  },
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
];

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
];

export const floorOptions = [
  {
    id: "1",
    label: "1 Floor",
  },
  {
    id: "2",
    label: "2 Floors",
  },
  {
    id: "3",
    label: "3 Floors",
  },
  {
    id: "4+",
    label: "4+ Floors",
  },
];

export const typeOfSupply = [
  {
    id: "single",
    label: "Single Phase",
  },
  {
    id: "3",
    label: "Three Phase",
  },
  {
    id: "not-sure",
    label: "Not Sure",
  },
];

export const noOfCircuits = [
  {
    id: "10",
    label: "upto 10 Circuits",
  },
  {
    id: "20",
    label: "upto 20 Circuits",
  },
  {
    id: "30+",
    label: "upto 30+ Circuits",
  },
];

export const propertyAge = [
  {
    id: "pre-1940",
    label: "Pre 1940",
  },
  {
    id: "post-1940",
    label: "Post 1940",
  },
];

export const propertyPrice = [
  {
    id: "100k",
    label: "Upto 100k",
  },
];

export const propertyArea = [
  {
    id: "50",
    label: "Upto 50m²",
  },
  {
    id: "100",
    label: "Upto 100m²",
  },
  {
    id: "200",
    label: "Upto 200m²",
  },
  {
    id: "300",
    label: "Upto 300m²",
  },
  {
    id: "500",
    label: "Upto 500m²",
  },
  {
    id: "750",
    label: "Upto 750m²",
  },
  {
    id: "1000",
    label: "Upto 1000m²",
  },
  {
    id: "1250",
    label: "Upto 1250m²",
  },
  {
    id: "1500",
    label: "Upto 1500m²",
  },
  {
    id: "1750",
    label: "Upto 1750m²",
  },
  {
    id: "2000",
    label: "Upto 2000m²",
  },
  {
    id: "2500",
    label: "Upto 2500m²",
  },
  {
    id: "3000",
    label: "Upto 3000m²",
  },
  {
    id: "3500",
    label: "Upto 3500m²",
  },
  {
    id: "4000",
    label: "Upto 4000m²",
  },
  {
    id: "5000+",
    label: "5000m² +",
  },
];

export const subFields: SubField[] = [
  {
    label: "Property Type",
    id: "property",
    options: properties,
    fieldType: "checkbox",
  },
  {
    label: "Property Age",
    id: "propertyAge",
    options: propertyAge,
    fieldType: "checkbox",
  },
  {
    label: "Property Value",
    id: "propertyPrice",
    options: propertyPrice,
    fieldType: "checkbox",
  },
  {
    label: "Number of Floors",
    id: "noOfFloors",
    options: floorOptions,
    fieldType: "checkbox",
  },
  {
    label: "Number of Gas Appliances (CP12)",
    id: "noOfGasAppliances",
    options: gasAppliancesOptions,
    fieldType: "checkbox",
  },
  {
    label: "Number of Electrical Appliances (PAT)",
    id: "noOfElectricalAppliances",
    options: electricalAppliancesOptions,
    fieldType: "checkbox",
  },
  {
    label: "Number of Bedrooms",
    id: "noOfBedrooms",
    options: bedroomOptions,
    fieldType: "checkbox",
  },
  {
    label: "Type of Supply",
    id: "typeOfSupply",
    options: typeOfSupply,
    fieldType: "checkbox",
  },
  {
    label: "Number of Circuits",
    id: "noOfCircuits",
    options: noOfCircuits,
    fieldType: "checkbox",
  },
  {
    label: "Consumer Unit(s)",
    id: "consumerUnits",
    options: [],
    fieldType: "counter",
  },
  {
    label: "Property Area m²",
    id: "propertyArea",
    options: propertyArea,
    fieldType: "dropdown",
  },
];

export const socialLinks = [
  {
    name: "Facebook",
    path: "https://www.facebook.com/",
    iconPath: "/icons/facebook.svg",
  },
  {
    name: "Mail",
    path: "https://twitter.com/",
    iconPath: "/icons/mail-white.svg",
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
    path: "/services",
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
