"use client";

import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { ChevronUp } from "lucide-react";

type MoblileNavbarMenuProps = {
  navLinks: {
    name: string;
    path: string;
  }[];
  serviceDropdownLinks: {
    image: string;
    title: string;
    link: string;
    description: string;
  }[];
};

const MobileNavbarMenu = ({
  navLinks,
  serviceDropdownLinks,
}: MoblileNavbarMenuProps) => {
  const [activeServiceLink, setActiveServiceLink] = React.useState<string[]>(
    []
  );

  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="secondary"
          className="bg-transparent inline-block lg:hidden items-center justify-center active:bg-transparent hover:bg-transparent"
          size="icon"
        >
          <Image
            src={"/icons/hamburger.svg"}
            alt="Hamburger"
            width={20}
            height={20}
            className="object-cover size-1/2"
          />
        </Button>
      </SheetTrigger>
      <SheetContent className="!p-0 !w-full !sm:max-w-full ">
        <SheetHeader className="!w-full">
          <div className="flex flex-row w-full items-center justify-between px-4 lg:px-16 py-3 bg-apex-dark h-max">
            <Link href="/" className="flex items-center justify-center w-44">
              <Image
                src={"/logo.png"}
                alt="Logo"
                width={100}
                height={100}
                className="object-contain size-full"
              />
            </Link>{" "}
            G
          </div>
        </SheetHeader>
        <div className="flex flex-col w-full h-max gap-8 px-14 py-8">
          {navLinks.map((link) => (
            <Link
              href={link.path}
              key={link.path}
              onClick={() => setOpen(false)}
            >
              <p className="text-btn font-normal text-black">
                {link.name.toUpperCase()}
              </p>
            </Link>
          ))}
          <Accordion
            type="multiple"
            value={activeServiceLink}
            onValueChange={(value) => setActiveServiceLink(value)}
          >
            <AccordionItem value="item-1" className="border-0">
              <AccordionTrigger className="my-0 py-0 flex gap-3 items-center justify-start">
                <ChevronUp className="size-6" />
                <p className="text-btn font-normal text-black">Our Services</p>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-4 my-6 ml-10">
                  {serviceDropdownLinks.map(({ title, link }) => (
                    <Link
                      href={`/services/${link}`}
                      key={link}
                      onClick={() => setOpen(false)}
                    >
                      <p className="text-para font-normal text-black">
                        {title?.toUpperCase()}
                      </p>
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbarMenu;
