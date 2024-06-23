import Image from "next/image";
import Link from "next/link";
import React from "react";

export const serviceCards = [
  {
    image: "/electrical-installation.jpg",
    title: "Electrical Installations",
    link: "electrical-installations",
    description:
      "Our expert electricians provide professional installation services for a wide range of electrical systems. From residential homes to commercial and industrial properties, we ensure every installation meets safety standards and regulatory compliance, guaranteeing reliable and efficient electrical performance.",
  },
  {
    image: "/rewiring.jpg",
    title: "Electrical Rewiring",
    link: "electrical-rewiring",
    description:
      "We offer comprehensive rewiring services to modernize your electrical system. Perfect for older properties or those undergoing renovation, our rewiring solutions improve safety, increase capacity, and enhance overall energy efficiency, ensuring your electrical infrastructure is up to date with current standards.",
  },
  {
    image: "/testing.jpg",
    title: "Electrical Testing",
    link: "electrical-testing",
    description:
      "Our detailed electrical testing services identify potential hazards and ensure your electrical systems are functioning correctly. We conduct thorough inspections and tests, providing you with a detailed report and recommendations to maintain a safe and efficient electrical environment.",
  },
  {
    image: "/fuse-repairing.jpg",
    title: "Fuse Board Repair and Upgrade",
    link: "fuse-board-repair-and-upgrade",
    description:
      "Specializing in fuse board repairs and upgrades, we enhance the safety and performance of your electrical distribution. Our services ensure your fuse board complies with the latest safety regulations, preventing electrical faults and improving overall system reliability.",
  },
  {
    image: "/light-repairing.jpg",
    title: "Lighting Repairs and Upgrades",
    link: "lighting-repairs-and-upgrades",
    description:
      "Our lighting repair and upgrade services help you achieve better energy efficiency and lighting quality. Whether it's fixing faulty lights or upgrading to the latest energy-saving technologies, we enhance both the functionality and aesthetics of your lighting systems.",
  },
  {
    image: "/smoke-alarms.jpg",
    title: "Smoke Alarms Installations",
    link: "smoke-alarms-installations",
    description:
      "We install high-quality smoke alarms to protect your property and its occupants. Our installation services ensure compliance with all fire safety regulations, providing you with peace of mind knowing that you are well-protected against potential fire hazards.",
  },
];

const Services = () => {
  return (
    <section className="px-7 lg:px-10 flex flex-col gap-4 mb-auto lg:mb-20 max-w-screen-xl mx-auto">
      <div className="space-y-1">
        <p className="text-para">Popular Services</p>
        <h3 className="text-h4 lg:text-h3">What Services We Offer</h3>
      </div>
      <div className="flex flex-row flex-wrap gap-x-4 gap-y-0 lg:gap-y-20 justify-center ">
        {serviceCards.map((card, index) => (
          <Link
            key={index}
            href={`/services/${card.link}`}
            className="flex flex-col items-center relative gap-4 mb-20 lg:mb-auto justify-center lg:justify-between flex-nowrap w-full sm:w-[48%] lg:w-[24%]"
          >
            <div className="flex items-center justify-center w-full">
              <Image
                src={card.image}
                alt={card.title}
                width={1000}
                height={1000}
                className="object-cover size-full"
              />
            </div>
            <div className="bg-black p-2 lg:p-4 lg:pb-5 absolute -bottom-14 w-[90%] mx-auto h-max min-h-20 flex items-center gap-2 justify-center">
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
