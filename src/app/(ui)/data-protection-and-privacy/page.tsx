import Banner from "@/components/Banner";
import { dataPrivacyPoints } from "@/lib/constants";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Data Protection & Privacy - Fairdeal Electrical",
};

const DataProtectionAndPrivacy = () => {
  return (
    <>
      <Banner image="/banner-image.png" className="gap-2">
        <Link href="/">
          <p className="text-para text-white">/home</p>
        </Link>
        <h5 className="text-h5 text-white">Data Protection & Privacy</h5>
      </Banner>
      <section className="flex flex-col gap-10 items-center lg:px-11 px-7 my-10 w-full lg:w-9/12 mx-auto  max-w-screen-xl">
        <div className="w-full md:w-1/2 space-y-2">
          <h5 className="text-btn text-center">Data Protection and Privacy</h5>
        </div>
        <div className="flex flex-col gap-4">
          {dataPrivacyPoints.map((term, index) => (
            <div key={index} className="space-y-2">
              <h5 className="text-h5">{term.title}</h5>
              {term.description.split("\n").map((line, idx) => (
                <p key={idx} className="text-para">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default DataProtectionAndPrivacy;
