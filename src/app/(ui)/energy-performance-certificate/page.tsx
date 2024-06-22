import Banner from "@/components/Banner";
import Link from "next/link";
import React from "react";

const EnergyPerformanceCertificate = () => {
  return (
    <>
      <Banner image="/banner-image.png" className="gap-2">
        <Link href="/">
          <p className="text-para text-white">/home</p>
        </Link>
        <h5 className="text-h5 text-white">
          Who Need Energy Performance Certificate
        </h5>
      </Banner>
      <section className="flex flex-col gap-8 my-20 min-h-80 items-center w-full lg:w-[80%] mx-auto px-7 lg:px-11  max-w-screen-xl">
        <div className="flex flex-col gap-4">
          <h5 className="text-h5">Who Need Energy Performance Certificate</h5>
          <p className="text-para">
            An Electrical Performance Certificate (EPC), also known as an
            Electrical Safety Certificate, is typically required in various
            situations to ensure the safety and compliance of electrical
            installations. Here&apos;s who typically needs an EICR
          </p>
        </div>
      </section>
    </>
  );
};

export default EnergyPerformanceCertificate;
