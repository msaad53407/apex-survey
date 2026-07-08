import Link from "next/link";
import React from "react";
import ProgressiveImage from "./ui/ProgressiveImage";

export const serviceCards = [
  {
    image: "/electrical-installation.jpg",
    title: "Electrical Installation Condition Report (EICR)",
    link: "electrical-installation-condition-report",
    description:
      "An EICR certificate is a legal requirement for landlords renting out property in England. Our engineers inspect your wiring, consumer unit, and fixed electrical installations, then issue a full report identifying any faults that need remedial work.",
  },
  {
    image: "/rewiring.jpg",
    title: "EICR Remedial Work",
    link: "eicr-remedial-work",
    description:
      "If your EICR inspection uncovers a C1 or C2 fault, our team can carry out the required remedial repairs quickly, so your property remains compliant without unnecessary delays.",
  },
  {
    image: "/testing.jpg",
    title: "Electrical Portable Appliance Testing (PAT)",
    link: "electrical-portable-appliance-testing",
    description:
      "PAT testing checks the safety of portable electrical appliances in offices, HMOs, and rented properties. We offer flexible commercial and landlord PAT testing packages across London.",
  },
  {
    image: "/fuse-repairing.jpg",
    title: "Display Energy Certificate (DEC) & EPC",
    link: "display-energy-certificate",
    description:
      "An Energy Performance Certificate shows how energy-efficient your property is. We provide domestic and commercial EPC assessments for landlords preparing to rent or sell.",
  },
  {
    image: "/light-repairing.jpg",
    title: "Gas Safety Certificate (CP12)",
    link: "gas-safety-certificate",
    description:
      "A landlord gas safety certificate is a legal obligation for any rented property with gas appliances. Our Gas Safe registered engineers carry out thorough gas safety inspections and issue your CP12 certificate promptly.",
  },
  {
    image: "/smoke-alarms.jpg",
    title: "Fire Risk Assessment",
    link: "fire-risk-assessment",
    description:
      "Our fire risk assessment service identifies fire hazards within residential and commercial buildings, helping property owners meet their legal fire safety obligations.",
  },
  {
    image: "/electrical-ppm-image.png",
    title: "Emergency Lighting Test Report",
    link: "emergency-lighting-test-report",
    description:
      "We test and certify emergency lighting systems, ensuring your building's safety systems function correctly when they're needed most.",
  },
  {
    image: "/Hero-Banner.png",
    title: "Fire Alarm Test Report",
    link: "fire-alarm-test-report",
    description:
      "We test and certify fire alarms, ensuring your building's safety systems function correctly when they're needed most.",
  },
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
              <ProgressiveImage
                lowSrc="/243.jpg"
                highSrc={card.image}
                alt={card.title}
                width={1000}
                height={1000}
                className="object-cover size-full"
              />
            </div>
            <div className="bg-black p-2 rounded-md lg:p-4 absolute -bottom-10 lg:-bottom-14 w-[90%] mx-auto h-max min-h-16 lg:min-h-24 flex items-center justify-center">
              <h5 className="text-small text-wrap sm:w-full w-[85%] font-semibold lg:text-lg text-center text-white">
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

