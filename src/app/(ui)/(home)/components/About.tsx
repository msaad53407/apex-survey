import { aboutUsServices } from "@/lib/constants";
import React from "react";
import ProgressiveImage from "@/components/ui/ProgressiveImage";

const About = () => {
  return (
    <section
      className="px-7 lg:px-11 flex flex-col lg:justify-between lg:flex-row gap-4 my-10 max-w-screen-xl mx-auto"
      id="about"
    >
      <div className="w-full lg:w-[45%] flex items-center justify-center">
        <ProgressiveImage
          lowSrc="/243.jpg"
          highSrc={"/About-us-image.png"}
          alt={"About Us Image"}
          width={1000}
          height={1000}
          className={"object-cover size-full"}
        />
      </div>
      <div className="w-full lg:w-[45%] flex flex-col gap-8">
        <div className="space-y-8">
          <div className="flex flex-col gap-2">
            <p className="text-para text-apex-blue">ABOUT Fairdeal</p>
            <h4 className="text-h4">
              We offer high-quality electrical installations and safe modern
              technology services
            </h4>
            <p className="text-para">
              Fairdeal Electrical Services Limited, based in London, is
              dedicated to providing top-tier electrical services tailored to
              meet the needs of both residential and commercial properties. Our
              team of certified professionals brings years of experience and a
              commitment to excellence in every project we undertake.
            </p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-between">
            {aboutUsServices.map(({ name, description }, index) => (
              <li className="flex flex-row gap-2" key={index}>
                <ProgressiveImage
                  lowSrc="/243.jpg"
                  highSrc={"/icons/check-icon.svg"}
                  alt={"Check Icon"}
                  width={20}
                  height={20}
                  className="size-fit object-contain"
                />
                <div className="flex flex-col gap-2">
                  <h5 className="text-btn">{name}</h5>
                  <p className="text-para">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;

