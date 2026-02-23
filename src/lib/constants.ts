//@ts-nocheck
import { z } from "zod";
import { InstantQuoteSchema } from "./schema";
import { Project, SubField } from "@/types";

export const projects: Project[] = [
  {
    slug: "commercial-rewiring-london-office",
    title: "Commercial Rewiring - London Office Complex",
    description:
      "Complete electrical system upgrade for a 5-story office building in central London. Project included installation of modern circuit breakers, LED lighting systems, and smart energy monitoring solutions.",
    thumbnail: `/electrical-installation.jpg`,
    images: [],
    features: [
      "Full building rewiring",
      "Smart energy monitoring installation",
      "LED lighting upgrade",
      "Emergency lighting systems",
      "Fire alarm integration",
    ],
    type: "commercial",
  },
  {
    slug: "residential-solar-installation",
    title: "Residential Solar Integration",
    description:
      "Installation of solar panels and smart electrical systems for a luxury residential property. Included battery storage integration and smart home automation.",
    thumbnail: `/Hero-Banner.png`,
    images: [],
    features: [
      "Solar panel installation",
      "Battery storage system",
      "Smart home integration",
      "Energy consumption monitoring",
      "Backup power solutions",
    ],
    type: "residential",
  },
  {
    slug: "industrial-safety-upgrade",
    title: "Industrial Safety Systems Upgrade",
    description:
      "Major electrical safety upgrade for a manufacturing facility, including new distribution boards, emergency systems, and compliance with latest regulations.",
    thumbnail: `/testing.jpg`,
    images: [],
    features: [
      "Distribution board replacement",
      "Emergency lighting installation",
      "Fire detection systems",
      "Industrial machinery integration",
      "Safety compliance certification",
    ],
    type: "commercial",
  },
  {
    slug: "smart-home-automation",
    title: "Smart Home Electrical Solution",
    description:
      "Comprehensive smart home electrical installation for a new residential development, featuring automated lighting, security systems, and energy management.",
    thumbnail: `/light-repairing.jpg`,
    images: [],
    features: [
      "Smart lighting controls",
      "Automated security systems",
      "Energy management system",
      "Climate control integration",
      "Mobile app control",
    ],
    type: "residential",
  },
  {
    slug: "retail-electrical-fit",
    title: "Retail Complex Electrical Fit-out",
    description:
      "Complete electrical installation for a new retail complex, including specialized lighting, security systems, and energy-efficient solutions.",
    thumbnail: `/electrical-ppm-image.png`,
    images: [],
    features: [
      "Retail lighting design",
      "Security system installation",
      "Energy-efficient solutions",
      "Emergency systems",
      "Public address integration",
    ],
    type: "commercial",
  },
  {
    slug: "apartment-building-upgrade",
    title: "Multi-Unit Residential Upgrade",
    description:
      "Electrical system modernization for a 20-unit apartment building, including individual smart metering and common area improvements.",
    thumbnail: `/fuse-repairing.jpg`,
    images: [],
    features: [
      "Smart metering installation",
      "Common area lighting upgrade",
      "Security access systems",
      "Intercom installation",
      "Energy monitoring solutions",
    ],
    type: "residential",
  },
];

export const reviewData = [
  {
    image: "/people/avatar-placeholder.jpg",
    name: "Alfie, SE23",
    description:
      "Amjad was very good and thorough. Always explained the process and what was necessary. He also fitted a few additional plug sockets when I asked and worked long hours to fit a very tight schedule.",
    date: "2015-08-19",
  },
  {
    image: "/people/avatar-placeholder.jpg",
    name: "Fanny, N17",
    description: "Good quality, fast service, dedicated to deadlines.",
    date: "2015-04-19",
  },
  {
    image: "/people/avatar-placeholder.jpg",
    name: "Richard, SE8",
    description:
      "Amjad did a great job, and I would recommend Fairdeal to anyone needing quality work at a fair price. All so effortless - he turned up on time, got the job done over half a day and did some extra things for us as well, which he offered up himself. He obviously doesn't skimp on quality and takes great pride in his work. I'd use Fairdeal again without hesitation.",
    date: "2015-04-08",
  },
  {
    image: "/people/avatar-placeholder.jpg",
    name: "ravinder, RM6",
    description: "gave an excellent service",
    date: "2015-03-28",
  },
  {
    image: "/people/avatar-placeholder.jpg",
    name: "James, E7",
    description:
      "Amazing service. By far the best quote, fully qualified, talked me through the process and showed me at various points which was very reassuring. Job was done quickly with care and left tidy. Extremely happy with the quality of work. I would definitely use again!",
    date: "2015-03-03",
  },
  {
    image: "/people/avatar-placeholder.jpg",
    name: "Dave, IG8",
    description:
      "Very polite and on time. I have to say i never normally bother with feed back but they were excellent.",
    date: "2015-02-02",
  },
  {
    image: "/people/avatar-placeholder.jpg",
    name: "Lewis, EN2",
    description:
      "He was Fast, efficient and friendly. however felt I had been overcharged for the call out. I got a much better price elsewhere to complete the required works.",
    date: "2014-12-04",
  },
  {
    image: "/people/avatar-placeholder.jpg",
    name: "Kevin, DA16",
    description:
      "Amjad come cross very polite and punctual, carry out A-class professional job and very efficiently, attention to detailed is brilliant. Furthermore the price was the best among the all quotes, really cannot ask anymore, highly recommended.",
    date: "2014-07-08",
  },
  {
    image: "/people/avatar-placeholder.jpg",
    name: "Jonathan, E5",
    description:
      "Mr Amjad responded promptly to my request, assessed the varied problems with confidence, and attended three days later (on a Saturday) with all the right equipment and materials. He seemed brisk and efficient, explained clearly what he had done and charged the agreed amount. I am confident he has done a thorough job and would recommend his services.",
    date: "2014-03-21",
  },
  {
    image: "/people/avatar-placeholder.jpg",
    name: "Joseph, SE9",
    description:
      "Attended very promptly,did the job we wanted then helped us with an assortment of other minor electrical jobs including putting his previous life as an appliance engineer to good use by making repairs to our freezer and oven.he gave us a good price and was very accomodating.will use him again.",
    date: "2014-03-21",
  },
  {
    image: "/people/avatar-placeholder.jpg",
    name: "Joanne, E14",
    description:
      "very efficient, professional and keen to do the work. Would use again",
    date: "2014-03-17",
  },
  {
    image: "/people/avatar-placeholder.jpg",
    name: "Amelia, E9",
    description:
      "Gave a quote the day I placed the ad and completed the job perfectly. Super fast and friendly service would not hesitate to use again !",
    date: "2014-02-06",
  },
  {
    image: "/people/avatar-placeholder.jpg",
    name: "Shirley, RM10",
    description: "punctual, reliable.",
    date: "2014-01-31",
  },
  {
    image: "/people/avatar-placeholder.jpg",
    name: "TEHMINA, NW11",
    description:
      "I was wary of using any tradesman having previously had poor experiences. However, Amjad from Fairdeal restored my confidence. He was punctual, very particular about the quality of his work and reasonable with his charges. Although he had quoted for a job that would last one day he found other electrical issues which he was not happy with so he came for four days until he was satisfied. He only asked for a modest addition to his original quote and I was perfectly happy to pay him that.",
    date: "2014-01-30",
  },
  {
    image: "/people/avatar-placeholder.jpg",
    name: "Kumi, E1W",
    description:
      "Very friendly, polite and straight talking. He came straight away, gave us a quote that evening for lighting work to the bathroom, hallway, kitchen and bedroom. Very reasonable rates, and good quality work. He will definitely be my first call for any future electrical work we may have.",
    date: "2014-01-19",
  },
  {
    image: "/people/avatar-placeholder.jpg",
    name: "Millicent, E1",
    description: "Polite. Responsive. No complain.",
    date: "2014-01-18",
  },
  {
    image: "/people/avatar-placeholder.jpg",
    name: "Angela, RM13",
    description:
      "Mr Amjad was quick to contact us, he arrived to view the work as agreed and completed it the following day. He did a great job, took pride in his work and ensured we were happy with the end result. Will definitely use again. Paul",
    date: "2014-01-08",
  },
  {
    image: "/people/avatar-placeholder.jpg",
    name: "PHILIP, RM11",
    description: "Excellent, friendly and professional service. Recommended.",
    date: "2014-01-07",
  },
  {
    image: "/people/avatar-placeholder.jpg",
    name: "Panayiotis, N22",
    description:
      "Very prompt in responding very good work I feel the price could have been slightly less but at least he turned up and did the work which is what I needed.",
    date: "2014-01-06",
  },
  {
    image: "/people/avatar-placeholder.jpg",
    name: "Eleanor, E3",
    description:
      "Speedy response and turn-around on job. Tenants said he was really helpful, will definitely use again.",
    date: "2014-01-06",
  },
  {
    image: "/people/avatar-placeholder.jpg",
    name: "Richard, IG10",
    description: "Great service, very friendly and helpful",
    date: "2014-01-04",
  },
  {
    image: "/people/avatar-placeholder.jpg",
    name: "jane, E11",
    description:
      "Very trustworthy, reliable, honest. Great job.Very personable would use again without question.",
    date: "2014-01-01",
  },
  {
    image: "/people/avatar-placeholder.jpg",
    name: "David, SE3",
    description: "Arrived promptly; did a good job.",
    date: "2013-12-30",
  },
  {
    image: "/people/avatar-placeholder.jpg",
    name: "Terry, RM13",
    description:
      "Very helpful, very quick, and talked me through what was needed. Look forward to using again in future.",
    date: "2013-12-24",
  },
  {
    image: "/people/avatar-placeholder.jpg",
    name: "Trevor, IG8",
    description:
      "Mr Amjad phoned me within 30 minutes of posting and arrived promptly. Very knowledgeable and professional. Excellent job done very quickly and gave me lighting for Xmas. Definitely using him again.",
    date: "2013-12-20",
  },
  {
    image: "/people/avatar-placeholder.jpg",
    name: "juan, E7",
    description:
      "I highly recommend Fairdeal Electrical Services. He took it very seriously to fix the complicated electrical problems in my house and managed to sort it out. He is very helpful and reliable. He understand that a home without electricity is a real problem and he came out of his way to help and fix it. Thank you. *****FIVE STAR*****",
    date: "2013-12-20",
  },
  {
    image: "/people/avatar-placeholder.jpg",
    name: "Julia, E8",
    description: "quick and thorough, excellent service.",
    date: "2013-12-09",
  },
  {
    image: "/people/avatar-placeholder.jpg",
    name: "Ahmed, RM9",
    description:
      "The engineer responded to my call very quickly. He assessed the fault immediately and gave me a good advice. I would use him again.",
    date: "2013-12-02",
  },
  {
    image: "/people/avatar-placeholder.jpg",
    name: "Peter, SE12",
    description:
      "Fair deal turned up promptly and sorted a difficult job for me good guy would use or recommend again",
    date: "2013-11-23",
  },
  {
    image: "/people/avatar-placeholder.jpg",
    name: "Jane, E8",
    description:
      "Amjad was the only call I received, he came out immediately in the evening to quote. The problem was fixed the next day. I would call Amjad again for electrical services",
    date: "2013-11-23",
  },
  {
    image: "/people/avatar-placeholder.jpg",
    name: "Rikesh, E2",
    description: "Good electrician and reasonably priced.",
    date: "2013-11-23",
  },
  {
    image: "/people/avatar-placeholder.jpg",
    name: "Julianne, E16",
    description:
      "Timely service delivered in a friendly yet professional manner. I will definitely use this company again.",
    date: "2013-11-23",
  },
  {
    image: "/people/avatar-placeholder.jpg",
    name: "niall, E3",
    description:
      "He was polite, punctual, enthusiastic and pleased to help...I really liked him and his work was excellent. I would gladly recommend him to others he struck me as having a really strong work ethic and the job he did reflects that",
    date: "2013-11-21",
  },
  {
    image: "/people/avatar-placeholder.jpg",
    name: "Denis, RM9",
    description:
      "Mr Amjad was a pleasant, helpful man. He diagnosed our problem and charged a reasonable price for the work. I would recommend him to everybody.",
    date: "2013-11-18",
  },
  {
    image: "/people/avatar-placeholder.jpg",
    name: "Lynn, RM13",
    description:
      "Mr Amjad is very pleasnat , i was very pleased with the work he did . I would gladly use him again and recommend him highly, He also did a samll job for my elderly mother who was also very pleased",
    date: "2013-11-17",
  },
  {
    image: "/people/avatar-placeholder.jpg",
    name: "Mark, SE13",
    description:
      "We were very impressed with the service from Amjad. he came to rectify some electrical issues that we had in order for us to get a certificate for the sale of our property. he was very reliable and friendly. and did great work! he was also extremely efficient in terms of turning the certificate around. i can highly recommend going with him. thanks sarah",
    date: "2013-11-17",
  },
  {
    image: "/people/avatar-placeholder.jpg",
    name: "Kene, SE3",
    description:
      "I am happy with the work that Mr Amjad did. He was very punctual, professional and methodical - he did not hurry to finish and get on to the next job. I would gladly use him again and recommend him highly.",
    date: "2013-11-12",
  },
  {
    image: "/people/avatar-placeholder.jpg",
    name: "Joe, RM6",
    description: "very good reliable and professional",
    date: "2013-11-12",
  },
  {
    image: "/people/avatar-placeholder.jpg",
    name: "Clemence, E16",
    description:
      "Quick and efficient. Giving you the lowest price possible. All you ask for!",
    date: "2013-11-08",
  },
  {
    image: "/people/avatar-placeholder.jpg",
    name: "Rosaleen, IG1",
    description: "Good customer care,pleasant and helpful.",
    date: "2013-11-08",
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
    details: "442039942679",
  },
  {
    type: "Email",
    icon: "/icons/mail-white.svg",
    details: "contact@fairdealelectrical.co.uk",
  },
  {
    type: "Address",
    icon: "/icons/mail-white.svg",
    details: `FAIRDEAL ELECTRICAL SERVICES LIMITED
6th Floor, 37 Lombard Street
London
EC3V 9BQ`,
  },
];

export const termsAndConditions = [
  {
    title: "Scope of Work:",
    description:
      "Our services include a comprehensive range of surveying and mapping solutions, tailored to meet the specific needs of each client. This includes but is not limited to boundary assessments, topographic assessments, and construction staking. Detailed project deliverables will be outlined in the individual contract agreement.",
  },
  {
    title: "Client Responsibilities:",
    description:
      "Clients are expected to provide access to the assessment site and any relevant documentation necessary for the completion of the project. This includes property deeds, previous assessment reports, and any specific instructions or requirements related to the assessment.",
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
      "Our liability is limited to the value of the contract. We are not responsible for any indirect or consequential damages arising from the use of our assessment reports. Clients are advised to review the reports thoroughly and notify us of any discrepancies.",
  },
  {
    title: "Disclaimer:",
    description:
      "While we strive for accuracy, assessing inherently involves a degree of estimation and judgment. The information provided in our reports is based on the data available at the time of the assessment. We recommend clients seek independent verification if critical decisions are based on the assessment results.",
  },
];

export const dataPrivacyPoints = [
  {
    title: "1. Introduction",
    description:
      "Fairdeal Electrical Services Limited is committed to protecting the privacy and security of personal data. This Data Protection Policy outlines our approach to ensuring the confidentiality, integrity, and availability of personal information in compliance with the General Data Protection Regulation (GDPR) and other relevant data protection laws.",
  },
  {
    title: "2. Scope",
    description:
      "This policy applies to all employees, contractors, and third-party service providers who have access to personal data held by Fairdeal Electrical Services Limited. It covers all data processing activities, including collection, storage, use, and sharing of personal information.",
  },
  {
    title: "3. Data Protection Principles",
    description:
      "We adhere to the following data protection principles:\n\n" +
      "Lawfulness, Fairness, and Transparency: Personal data will be processed lawfully, fairly, and in a transparent manner.\n" +
      "Purpose Limitation: Data will be collected for specified, explicit, and legitimate purposes and not further processed in a manner that is incompatible with those purposes.\n" +
      "Data Minimization: Only data that is necessary for the specified purposes will be collected and processed.\n" +
      "Accuracy: We will ensure that personal data is accurate and kept up to date.\n" +
      "Storage Limitation: Personal data will be kept in a form that permits identification for no longer than necessary.\n" +
      "Integrity and Confidentiality: We will process data in a manner that ensures appropriate security, including protection against unauthorized or unlawful processing, accidental loss, destruction, or damage.",
  },
  {
    title: "4. Data Collection",
    description:
      "Personal data will be collected only for specific, explicit, and legitimate purposes. The types of personal data we collect may include:\n\n" +
      "Contact information (name, address, phone number, email)\n" +
      "Employment details (job title, employer)\n" +
      "Financial information (bank details, payment information)\n" +
      "Technical data (IP address, login data)",
  },
  {
    title: "5. Data Use",
    description:
      "Personal data will be used only for the purposes for which it was collected, which may include:\n\n" +
      "Providing and managing our services\n" +
      "Communicating with clients and suppliers\n" +
      "Processing payments and financial transactions\n" +
      "Complying with legal and regulatory requirements",
  },
  {
    title: "6. Data Security",
    description:
      "We implement appropriate technical and organizational measures to protect personal data against unauthorized access, alteration, disclosure, or destruction. These measures include:\n\n" +
      "Encryption and secure storage of data\n" +
      "Access controls and authentication mechanisms\n" +
      "Regular security audits and vulnerability assessments\n" +
      "Employee training on data protection best practices",
  },
  {
    title: "7. Data Sharing",
    description:
      "We do not share personal data with third parties unless necessary for the purposes of our business operations or required by law. When we do share data, we ensure that appropriate safeguards are in place to protect the information.",
  },
  {
    title: "8. Data Retention",
    description:
      "Personal data will be retained only for as long as necessary to fulfill the purposes for which it was collected or as required by law. After this period, data will be securely deleted or anonymized.",
  },
  {
    title: "9. Data Subject Rights",
    description:
      "Individuals have the following rights regarding their personal data:\n\n" +
      "The right to access their data\n" +
      "The right to rectify inaccurate or incomplete data\n" +
      "The right to erasure (the right to be forgotten)\n" +
      "The right to restrict processing\n" +
      "The right to data portability\n" +
      "The right to object to processing\n" +
      "The right to withdraw consent at any time",
  },
  {
    title: "10. Breach Notification",
    description:
      "In the event of a data breach, we will notify the relevant supervisory authority and affected individuals without undue delay, in accordance with GDPR requirements.",
  },
  {
    title: "11. Policy Review",
    description:
      "This policy will be reviewed regularly and updated as necessary to ensure continued compliance with data protection laws and best practices.",
  },
];

export const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Contact US",
    path: "/contact-us",
  },
  {
    name: "FAQ",
    path: "/faqs",
  },
  {
    name: "About US",
    path: "/about-us",
  },
];

export const servicesDropdownLinks = [
  {
    name: "Electrical Installation Condition Report (EICR)",
    path: "/services/electrical-installation-condition-report",
  },
  {
    name: "EICR Remedial Work",
    path: "/services/eicr-remedial-work",
  },
  {
    name: "Electrical Portable Appliance Testing (PAT)",
    path: "/services/electrical-portable-appliance-testing",
  },
  {
    name: "Display Energy Certificate (DEC)",
    path: "/services/display-energy-certificate",
  },
  {
    name: "Gas Safety Certificate",
    path: "/services/gas-safety-certificate",
  },
  {
    name: "Fire Risk Assessment",
    path: "/services/fire-risk-assessment",
  },
  {
    name: "Emergency Lighting Test Report",
    path: "/services/emergency-lighting-test-report",
  },
  {
    name: "Fire Alarm Test Report",
    path: "/services/fire-alarm-test-report",
  },
  {
    name: "Commercial EPC",
    path: "/services/commercial-epc",
  },
];
export const contactLinks = [
  {
    web_link: "contact@fairdealelectrical.co.uk",
    web_text: "contact@fairdealelectrical.co.uk",
    web_iconPath: "/icons/mail-white.svg",
  },
  {
    phone_link: "442039942679",
    phone_text: "Call Us Free: +442039942679",
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
    heading: "Electrical Assessment Booked",
    description:
      "Once your order is placed, we will schedule a assessment at your convenience. Our team will reach out to confirm the appointment and gather any additional information needed",
  },
  {
    icon: "/icons/search.svg",
    heading: "Start Electrical Assessment",
    description:
      "Our professional team will conduct a thorough assessment of your property, ensuring all measurements and data are collected precisely and accurately",
  },
  {
    icon: "/icons/certificate.svg",
    heading: "Certificate Issued",
    description:
      "After the assessment is complete, we will issue a detailed certificate. This document will include all relevant data and findings, formally concluding the process.",
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
    id: "electrical-installation-conditional-report-eicr",
    label: "Electrical Installation Conditional Report (EICR)",
    servicePropertyType: ["commercial"],
    subFields: ["property", "consumerUnits", "typeOfSupply", "noOfCircuits"],
  },
  {
    id: "electrical-portable-appliance-test-pat",
    label: "Electrical Portable Appliance Test (PAT)",
    servicePropertyType: ["commercial"],
    subFields: ["property", "noOfElectricalAppliances"],
  },
  {
    id: "commercial-epc",
    label: "Commercial EPC",
    servicePropertyType: ["commercial"],
    subFields: ["property", "propertyArea"],
  },
  {
    id: "emergency-light-test-report-eltr",
    label: "Emergency Light Test Report (ELTR)",
    servicePropertyType: ["commercial"],
    subFields: ["property", "propertyArea"],
  },
];

export const serviceBundles = [
  {
    id: "bundle-one",
    name: "SERVICE BUNDLE ONE",
    price: 120,
    serviceIds: [
      "electrical-installation-conditional-report-eicr",
      "elecrical-portable-appliance-test-pat",
    ],
    propertyType: "residential" as const,
    isPopular: false,
  },
  {
    id: "bundle-two",
    name: "SERVICE BUNDLE TWO",
    price: 120,
    serviceIds: [
      "electrical-installation-conditional-report-eicr",
      "energy-performance-certificate",
    ],
    propertyType: "residential" as const,
    isPopular: false,
  },
  {
    id: "bundle-three",
    name: "SERVICE BUNDLE THREE",
    price: 180,
    serviceIds: [
      "electrical-installation-conditional-report-eicr",
      "elecrical-portable-appliance-test-pat",
      "gas-safety-certificate",
    ],
    propertyType: "residential" as const,
    isPopular: true,
  },
  {
    id: "bundle-four",
    name: "SERVICE BUNDLE FOUR",
    price: 180,
    serviceIds: [
      "electrical-installation-conditional-report-eicr",
      "energy-performance-certificate",
      "gas-safety-certificate",
    ],
    propertyType: "residential" as const,
    isPopular: false,
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
  {
    name: "Data Protection and Privacy",
    path: "/data-protection-and-privacy",
  },
];

export const aboutUsServices = [
  {
    name: "Electrical Inspections:",
    description:
      "Thorough assessments to identify potential hazards and ensure compliance with safety standards.",
  },
  {
    name: "Electrical Installations:",
    description:
      "Safe and efficient installations of electrical systems, appliances, and fixtures.",
  },
  {
    name: "Repairs and Maintenance:",
    description:
      "Prompt and reliable repair services to keep your electrical systems in optimal condition.",
  },
  {
    name: "Upgrades and Renovations:",
    description:
      "Modernizing and enhancing your electrical infrastructure to meet the latest standards and your specific requirements.",
  },
];

export const aboutUsObjectives = [
  {
    name: "Deliver High-Quality Services:",
    description:
      "Provide top-notch electrical installations, repairs, and maintenance services that reflect our commitment to excellence and customer satisfaction.",
  },
  {
    name: "Promote Energy Efficiency:",
    description:
      "Implement energy-efficient solutions and upgrades that reduce energy consumption and costs while maintaining optimal performance.",
  },
  {
    name: "Enhance Property Value:",
    description:
      "Upgrade and modernize electrical systems to increase the overall value and appeal of residential and commercial properties.",
  },
  {
    name: "Customer Education and Support:",
    description:
      "Offer comprehensive support and guidance to our clients, ensuring they understand their electrical systems and feel confident in the safety and reliability of their property's infrastructure.",
  },
  {
    name: "Continuous Improvement:",
    description:
      "Stay at the forefront of industry advancements and continuously improve our services through ongoing training and adoption of the latest technologies and best practices.",
  },
];
