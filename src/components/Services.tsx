import Image from "next/image";
import Link from "next/link";
import React from "react";

export const serviceCards = [
  {
    image: "/electrical-installation.jpg",
    title: "Electrical Installation Condition Report (EICR)",
    link: "electrical-installation-condition-report",
    description:
      "Our comprehensive EICR service provides a thorough assessment of your property's electrical installations. We identify potential hazards, ensure compliance with current regulations, and provide detailed reports with recommendations for any necessary remedial work.",
  },
  {
    image: "/rewiring.jpg",
    title: "EICR Remedial Work",
    link: "eicr-remedial-work",
    description:
      "Following an EICR inspection, our qualified electricians carry out all necessary remedial work to bring your electrical system up to current safety standards. We address any identified issues efficiently and professionally.",
  },
  {
    image: "/testing.jpg",
    title: "Electrical Portable Appliance Testing (PAT)",
    link: "electrical-portable-appliance-testing",
    description:
      "Our PAT testing service ensures all your portable electrical appliances are safe to use. We provide thorough testing and certification for businesses and landlords, helping you meet your legal obligations and keep your premises safe.",
  },
  {
    image: "/fuse-repairing.jpg",
    title: "Display Energy Certificate (DEC)",
    link: "display-energy-certificate",
    description:
      "We provide Display Energy Certificates for public buildings, showing their energy efficiency rating. Our assessors evaluate your building's energy performance and provide recommendations for improvement.",
  },
  {
    image: "/light-repairing.jpg",
    title: "Gas Safety Certificate",
    link: "gas-safety-certificate",
    description:
      "Our Gas Safe registered engineers conduct thorough gas safety inspections and provide legally required certificates for landlords and property owners. We ensure all gas appliances and installations are safe and compliant.",
  },
  {
    image: "/smoke-alarms.jpg",
    title: "Fire Risk Assessment",
    link: "fire-risk-assessment",
    description:
      "Our comprehensive fire risk assessments identify potential fire hazards in your property. We provide detailed reports with actionable recommendations to ensure compliance with fire safety regulations and protect occupants.",
  },
  {
    image: "/electrical-ppm-image.png",
    title: "Emergency Lighting Test Report",
    link: "emergency-lighting-test-report",
    description:
      "We provide professional testing and certification of emergency lighting systems. Our engineers ensure your emergency lighting meets all regulatory requirements and will function correctly in an emergency.",
  },
  {
    image: "/Hero-Banner.png",
    title: "Fire Alarm Test Report",
    link: "fire-alarm-test-report",
    description:
      "Our fire alarm testing service ensures your fire detection and alarm systems are functioning correctly. We provide comprehensive testing, maintenance, and certification to keep your property safe and compliant.",
  },
  // {
  //   image: "/commercial-epc.jpg",
  //   title: "Commercial EPC",
  //   link: "commercial-epc",
  //   description:
  //     "We provide Energy Performance Certificates for commercial properties. Our qualified assessors evaluate your building's energy efficiency and provide ratings along with recommendations to improve energy performance.",
  // },
];

const Services = () => {
  return (
    <section className="px-7 lg:px-10 flex flex-col gap-4 mb-20 max-w-screen-xl lg:min-w-[1024px] xl:min-w-[1280px] mx-auto">
      <div className="space-y-1">
        <p className="text-para">Popular Services</p>
        <h3 className="text-h4 lg:text-h3">What Services We Offer</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-20 justify-center">
        {serviceCards.map((card, index) => (
          <Link
            key={index}
            href={`/services/${card.link}`}
            className="flex flex-col items-center relative gap-4 mb-20 lg:mb-auto justify-center lg:justify-between flex-nowrap w-full max-h-full h-full"
          >
            <div className="flex items-center justify-center w-full h-full">
              <Image
                src={card.image}
                alt={card.title}
                width={1000}
                height={1000}
                className="object-cover size-full"
              />
            </div>
            <div className="bg-black p-2 lg:p-4 lg:pb-5 absolute -bottom-10 lg:-bottom-14 w-[90%] mx-auto h-max min-h-16 lg:min-h-24 flex items-center justify-center">
              <h5 className="text-small text-wrap sm:w-full w-[85%] font-semibold lg:text-btn text-center text-white">
                {card.title}
              </h5>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;
