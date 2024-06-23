import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Navbar from "./Navbar";
import MobileNavbarMenu from "./MobileNavbarMenu";
import { contactLinks, navLinks, servicesDropdownLinks } from "@/lib/constants";
import { serviceCards } from "./Services";

const Header = () => {
  return (
    <header className="flex flex-col w-full">
      <div className="flex flex-row w-full items-center justify-between px-4 lg:px-16 py-2 bg-apex-dark h-max">
        <Link href="/" className="flex items-center justify-center w-16">
          <Image
            src={"/logo.png"}
            alt="Logo"
            width={100}
            height={100}
            className="object-contain size-full"
          />
        </Link>
        <div className="hidden lg:flex flex-row items-center gap-x-8 gap-y-2 my-4">
          {contactLinks.map((link) => (
            <Link
              href={
                link.web_link
                  ? `mailto:${link.web_link}`
                  : `tel:+${link.phone_link}`
              }
              target="_blank"
              key={link.web_link || link.phone_link}
              className="flex flex-row items-center gap-4"
            >
              <Image
                src={link.web_iconPath || link.phone_iconPath || ""}
                alt={link.web_text || link.phone_text || ""}
                width={20}
                height={20}
              />
              <p className="text-para text-white">
                {link.web_text || link.phone_text}
              </p>
            </Link>
          ))}
        </div>
        <MobileNavbarMenu
          navLinks={navLinks}
          serviceDropdownLinks={serviceCards}
        />
      </div>
      <nav className="h-max bg-apex-grey-bluish hidden lg:flex flex-col md:flex-row items-center justify-between px-16 py-4 gap-4 sticky top-0 z-50">
        <div className="flex gap-6 w-max items-center">
          <Navbar />
          <DropdownMenu>
            <DropdownMenuTrigger className="flex flex-row gap-2 items-center">
              <p className="text-para text-white">Our Services</p>
              <Image
                src={"/icons/chevron-down.svg"}
                alt={"Chevron Down"}
                width={12}
                height={12}
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="rounded-sm w-max flex gap-2 flex-col">
              {serviceCards.map(({ title, link }) => (
                <Link
                  href={`/services/${link}`}
                  key={link}
                  className="hover:bg-apex-blue hover:text-white py-2 px-4"
                >
                  <div className="hover:bg-apex-blue hover:text-white cursor-pointer">
                    {title}
                  </div>
                </Link>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex w-max gap-4 items-center">
          <Link
            href={"/checkout"}
            className="p-2 flex items-center justify-center"
          >
            <Image
              src={"/icons/cart.svg"}
              alt={"Cart"}
              width={20}
              height={20}
              className="object-cover size-full"
            />
          </Link>
          <Link
            className="bg-apex-blue p-3 rounded-sm hover:bg-apex-blue active:bg-apex-blue"
            href={"/order-now"}
          >
            <p className="text-small font-bold text-white">Order Online</p>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
