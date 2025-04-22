import Banner from "@/components/Banner";
import { termsAndConditions } from "@/lib/constants";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Terms & Conditions - Fairdeal Electrical",
};

const TermsAndConditions = () => {
  return (
    <>
      <Banner image="/banner-image.png" className="gap-2">
        <Link href="/">
          <p className="text-para text-white">/home</p>
        </Link>
        <h5 className="text-h5 text-white">Terms & Conditions</h5>
      </Banner>
      <section className="flex flex-col gap-10 items-center lg:px-11 px-7 my-10 w-full lg:w-9/12 mx-auto  max-w-screen-xl">
        <div className="w-full md:w-1/2 space-y-2">
          <h5 className="text-btn text-center">Terms and Conditions</h5>
          <p className="text-para text-center">
            These terms and conditions govern your use of our services. By
            engaging our services, you agree to comply with and be bound by the
            following terms.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {termsAndConditions.map((term, index) => (
            <div key={index} className="space-y-2">
              <h5 className="text-h5">{term.title}</h5>
              <p className="text-para">{term.description}</p>
            </div>
          ))}
        </div>
        <p className="text-para text-center">
          By signing up you agree to our terms and conditions.
        </p>
      </section>
    </>
  );
};

export default TermsAndConditions;
