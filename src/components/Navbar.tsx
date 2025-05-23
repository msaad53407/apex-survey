"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/constants";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link) => (
        <Link href={link.path} key={link.path}>
          <p
            className={cn(
              "text-para text-white",
              pathname === link.path ? "text-apex-blue" : ""
            )}
          >
            {link.name}
          </p>
        </Link>
      ))}
    </>
  );
};

export default Navbar;
