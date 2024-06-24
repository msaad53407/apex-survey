import Image from "next/image";
import Link from "next/link";
import {
  usefulLinks,
  socialLinks,
  footerNavLinks,
  contactInformation,
} from "@/lib/constants";

export default function Footer() {
  const phoneNumber = contactInformation.filter((contact) =>
    contact.icon.includes("phone")
  )[0].details;
  const email = contactInformation.filter(
    (contact) => contact.type === "Email"
  )[0].details;
  return (
    <footer className="bg-apex-dark w-full px-8 py-3 lg:px-16 lg:py-6">
      <div className="flex flex-col gap-12 max-w-screen-xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-y-6">
          <div className="flex flex-col gap-4 w-full lg:w-32 xl:w-40 py-4">
            <Link href="/" className="flex items-center justify-center w-1/2 mx-auto">
              <Image
                src={"/logo.png"}
                alt="Logo"
                width={100}
                height={100}
                className="object-contain size-full"
              />
            </Link>
            <p className="text-para text-white">
              At Fairdeal, we are dedicated to providing high-quality electrical
              installations and safe modern technology services. Our experienced
              team uses state-of-the-art technology to ensure precision and
              accuracy in every project.{" "}
            </p>
          </div>
          <div className="flex flex-1 lg:flex-row flex-col justify-between lg:justify-evenly gap-10">
            <div className="flex flex-row gap-4 justify-between">
              <nav className="flex flex-col gap-6 flex-1 lg:flex-auto">
                <h5 className="text-btn text-white">Quick Links</h5>
                <div className="flex flex-col gap-4">
                  {footerNavLinks.map((link) => (
                    <Link href={link.path} key={link.path}>
                      <p className="text-para text-white">{link.name}</p>
                    </Link>
                  ))}
                </div>
              </nav>
              <nav className="flex flex-col gap-6 flex-1 lg:flex-auto">
                <h5 className="text-btn text-white">Useful Links</h5>
                <div className="flex flex-col gap-4">
                  {usefulLinks.map((link) => (
                    <Link href={link.path} key={link.path}>
                      <p className="text-para text-white lg:w-fit">
                        {link.name}
                      </p>
                    </Link>
                  ))}
                </div>
              </nav>
            </div>
            <nav className="flex flex-col gap-6 w-full lg:w-1/3">
              <div className="flex flex-col gap-6">
                <h5 className="text-btn text-white">Make an Appointment</h5>
                <p className="text-para text-white w-fit">
                  Contact us today to schedule your electrical assessment and safe
                  modern technology services. Our friendly and knowledgeable
                  staff are ready to assist you with all your assessment needs.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="bg-apex-blue p-3 h-max self-start rounded-sm">
                  <Image
                    src={"/icons/phone.svg"}
                    alt={"Phone"}
                    width={20}
                    height={20}
                  />
                </div>
                <Link href={`tel:+${phoneNumber}`}>
                  <h4 className="text-h4 text-white">Call Us Today</h4>
                  <p className="text-white text-para">{phoneNumber}</p>
                </Link>
              </div>
            </nav>
          </div>
        </div>
        <div className="flex w-full flex-col lg:flex-row items-center justify-between lg:justify-end gap-6 lg:gap-64">
          <p className="text-small text-center md:text-start order-last lg:order-first md:text-para lg:text-btn text-white">
            Copyright © {new Date().getFullYear()} Fairdeal. All Rights
            Reserved.
          </p>
          <div className="flex lg:hidden flex-col gap-4 items-center">
            <div className="flex items-center gap-4">
              <Image
                src={"/icons/web.svg"}
                alt={"Web"}
                width={12}
                height={12}
                className="object-contain size-fit text-white"
              />
              <p className="text-para text-white">{email}</p>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src={"/icons/phone.svg"}
                alt={"Phone"}
                width={12}
                height={12}
                className="object-contain size-fit text-white"
              />
              <p className="text-para text-white">Call Us Free:{phoneNumber}</p>
            </div>
          </div>
          <div className="w-max flex gap-4 items-center self-center md:self-auto order-first lg:order-last">
            {socialLinks.map((link) => (
              <Link href={link.path} key={link.name}>
                <Image
                  src={link.iconPath}
                  alt={link.name}
                  width={18}
                  height={18}
                  style={{ color: "white" }}
                  className="object-contain size-fit text-white"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
