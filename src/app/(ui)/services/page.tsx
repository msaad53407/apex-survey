import Banner from "@/components/Banner";
import EmailNewsLetter from "@/components/EmailNewsLetter";
import Reviews from "@/components/Reviews";
import ServiceProcedure from "@/components/ServiceProcedure";
import Services from "@/components/Services";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Our Services - Fairdeal Electrical",
};

const ServicesPage = () => {
  return (
    <>
      <Banner
        image="/banner-image.png"
        className="size-full items-center justify-center inset-0 mx-auto"
      >
        <h2 className="text-h2 text-white text-center">Our Services</h2>
      </Banner>
      <section className="w-full flex flex-col gap-10 px-7 lg:px-11 py-10 max-w-screen-xl mx-auto">
        <Services />
        <Reviews />
        <ServiceProcedure />
        <EmailNewsLetter />
      </section>
    </>
  );
};

export default ServicesPage;
