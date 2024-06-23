import Banner from "@/components/Banner";
import InstantQuoteModal from "@/components/dialogs/InstantQuoteModal";
import EmailNewsLetter from "@/components/EmailNewsLetter";
import { PricingCard } from "@/components/PricingCard";
import Reviews from "@/components/Reviews";
import ServiceProcedure from "@/components/ServiceProcedure";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import { serviceCards } from "@/components/Services";
import Head from "next/head";

type ElectricalMaintenanceProps = {
  params: {
    serviceName?: string;
  };
};

const ElectricalMaintenance = ({ params }: ElectricalMaintenanceProps) => {
  const selectedService = serviceCards.find(
    (service) => service.link === params.serviceName
  );

  if (!selectedService) return notFound();

  return (
    <>
      <Head>
        <title>Hello World</title>
      </Head>
      <Banner
        image="/banner-image.png"
        className="size-full items-center justify-center inset-0 mx-auto"
      >
        <h2 className="text-h2 text-white text-center">
          {selectedService.title}
        </h2>
      </Banner>
      <section className="w-full flex flex-col gap-10  max-w-screen-xl mx-auto">
        <div className="my-8 px-7 lg:px-11 w-full h-auto flex flex-col lg:flex-row gap-4 justify-between">
          <div className="w-full lg:w-1/2 flex flex-col gap-4 justify-center">
            <div className="space-y-6">
              <h4 className="text-h4">{selectedService.title}</h4>
              <p className="text-para">{selectedService.description}</p>
            </div>
            <InstantQuoteModal />
          </div>
          <div className="w-full lg:w-1/2 order-first lg:order-last flex items-center justify-center">
            <Image
              src={selectedService.image}
              alt="Electrical PPM"
              height={1000}
              width={1000}
              quality={100}
              className="object-cover size-full"
            />
          </div>
        </div>
        <div className="px-7 lg:px-11 flex flex-col gap-4 mb-4">
          <div>
            <p className="text-para">Pricing</p>
            <h3 className="text-h3">Prices of Services We Offer</h3>
          </div>
          <div className="flex flex-wrap flex-row gap-2">
            <PricingCard />
          </div>
        </div>
        <Reviews />
        <ServiceProcedure />
        <EmailNewsLetter />
      </section>
    </>
  );
};

export default ElectricalMaintenance;
