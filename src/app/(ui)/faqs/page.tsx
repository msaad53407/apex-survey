import Banner from "@/components/Banner";
import EmailNewsLetter from "@/components/EmailNewsLetter";
import ServiceProcedure from "@/components/ServiceProcedure";
import React from "react";
import FaqsAccordian from "./components/FaqsAccordian";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs - Fairdeal Electrical",
};

const Faqs = () => {
  return (
    <>
      <Banner image="/banner-image.png" className="gap-2">
        <p className="text-para text-white">Contact Us</p>
        <h5 className="text-h5 text-white">For Any Queries</h5>
      </Banner>
      <section className="flex flex-col gap-10 items-center my-6 w-full max-w-screen-xl mx-auto">
        <div className="w-full lg:w-1/2 space-y-2 lg:px-11 px-7">
          <h5 className="text-h5 text-center">Frequently Asked Questions</h5>
          <p className="text-para text-center">
            Below are some of the most asked questions. If you have any more
            question, fell free to reach out to us.
          </p>
        </div>
        <FaqsAccordian />
        <ServiceProcedure />
        <EmailNewsLetter />
      </section>
    </>
  );
};

export default Faqs;
