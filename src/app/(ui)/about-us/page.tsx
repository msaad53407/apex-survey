import Banner from "@/components/Banner";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import AboutSection from "../(home)/components/About";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { aboutUsObjectives } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us - Fairdeal Electrical",
};

const About = () => {
  return (
    <>
      <Banner
        image="/banner-image.png"
        className="size-full items-center justify-center inset-0 mx-auto"
      >
        <h2 className="text-h2 text-white text-center">About US</h2>
      </Banner>
      <section className="w-full flex flex-col gap-10">
        <AboutSection />
        <section className="relative w-full bg-cover bg-center py-32 md:py-48 lg:py-64">
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)]" />
          <div className="container relative z-10 max-w-3xl px-4 md:px-6">
            <div className="space-y-6 text-center text-white">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Our Commitment
              </h2>
              <p className="text-lg leading-relaxed md:text-xl">
                At Fairdeal Electrical Services Limited, we prioritize your
                safety and satisfaction. Our mission is to empower your property
                journey by providing safe, efficient, and reliable electrical
                solutions. We pride ourselves on our attention to detail,
                high-quality workmanship, and exceptional customer service.
                <br />
                <br />
                Empower your property journey with the confidence that comes
                from knowing your electrical systems are in safe hands. If you
                have any questions or need assistance with your electrical
                needs, please do not hesitate to reach out.
              </p>
            </div>
          </div>
          <div
            className="absolute inset-0 bg-[url('/commitment-section-about.jpg')] bg-cover bg-center opacity-30"
            aria-hidden="true"
          />
        </section>
      </section>
      <section className="px-7 lg:px-11 flex flex-col lg:justify-between lg:flex-row gap-4 my-10 max-w-screen-xl mx-auto">
        <div className="px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex w-full items-center justify-center flex-col gap-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About our Aims and Objectives
              </h2>
              <p className="mt-2 text-muted-foreground md:text-lg">
                By adhering to these objectives, Fairdeal Electrical Services
                Limited aims to be the trusted partner in your property journey,
                providing safe, efficient, and reliable electrical solutions
                tailored to your needs.
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold">Our Aims</h3>
                <p className="mt-2 text-muted-foreground md:text-lg">
                  Our aim at Fairdeal Electrical Services Limited is to empower
                  property owners in London by ensuring the highest standards of
                  electrical safety and efficiency. We strive to create secure,
                  reliable, and modern electrical systems that enhance the value
                  and functionality of every property we serve.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">Our Objectives</h3>
                <p className="mt-2 text-muted-foreground md:text-lg">
                  Ensure Safety and Compliance: Conduct thorough electrical
                  inspections and implement necessary measures to guarantee that
                  all systems meet the latest safety regulations and standards.
                </p>
                <ul className="mt-4 space-y-2 md:text-lg grid grid-cols-1">
                  {aboutUsObjectives.map(({ name, description }, index) => (
                    <li key={index} className="flex flex-row gap-2">
                      <CheckIcon className="mr-2 inline-block h-5 w-5" />
                      <div className="flex flex-col gap-2">
                        <h5 className="text-btn">{name}</h5>
                        <p className="text-para text-muted-foreground">
                          {description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-7 lg:px-11 space-y-10 my-10 max-w-screen-xl mx-auto">
        <div className="grid items-center gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-apex-blue text-white px-3 py-2 text-sm">
              Our Mission
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Powering Your World with Expertise
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              At Fairdeal Electrical Services Limited, our mission is to deliver
              exceptional electrical solutions that ensure safety, efficiency,
              and reliability for all our clients. We are dedicated to providing
              the highest quality of service, fostering trust and satisfaction
              through our commitment to excellence, innovation, and customer
              care. Our goal is to empower property owners by enhancing the
              value and functionality of their properties, while promoting
              sustainable and energy-efficient practices.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <BellElectricIcon className="h-32 w-32 text-primary" />
          </div>
        </div>
        <div className="grid items-center gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-20 mt-12">
          <div className="flex items-center justify-center size-full">
            <Image
              src="/people/director.jpg"
              width="500"
              height="500"
              alt="Director"
              quality={100}
              className="object-contain size-[90%]"
            />
          </div>
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-apex-blue text-white px-3 py-2 text-sm">
              A Message from Our Director
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Committed to Your Success
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              As the Director of Fairdeal Electrical Services Limited, I am
              proud to lead a team dedicated to excellence in the electrical
              industry. Our mission is not just about providing services, but
              about creating a safer and more efficient environment for all our
              clients. We understand the critical role that reliable electrical
              systems play in both residential and commercial properties, and we
              are committed to delivering solutions that meet the highest
              standards of safety and performance. <br />
              <br />
              Our approach is rooted in professionalism, integrity, and
              continuous improvement. We invest in the latest technologies and
              training for our team to ensure we stay ahead in an ever-evolving
              industry. This commitment allows us to offer innovative,
              energy-efficient solutions that benefit our clients and the
              environment.
              <br />
              <br />
              Customer satisfaction is at the heart of everything we do. We
              strive to build lasting relationships based on trust,
              transparency, and exceptional service. Whether it&apos;s a routine
              maintenance check or a complex installation project, we treat
              every job with the same level of dedication and attention to
              detail.
              <br />
              <br />
              Looking ahead, we are excited about the opportunities to further
              enhance our services and expand our reach. We are dedicated to
              making Fairdeal Electrical Services Limited a name synonymous with
              quality and reliability in the electrical services industry.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

const CheckIcon = ({ className }: { className?: string }) => {
  return (
    <Image
      src={"/icons/check-icon.svg"}
      alt={"Check Icon"}
      width={20}
      height={20}
      className={cn("size-fit object-contain", className)}
    />
  );
};

const BellElectricIcon = ({ className }: { className?: string }) => {
  return (
    <Image
      src={"/icons/bell-icon.svg"}
      alt={"Bell Icon"}
      width={20}
      height={20}
      className={cn("size-fit object-contain", className)}
    />
  );
};
