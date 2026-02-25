"use client";

import { contactLinks, navLinks } from "@/lib/constants";
import Link from "next/link";
import { useState } from "react";
import MobileNavbarMenu from "./MobileNavbarMenu";
import Navbar from "./Navbar";
import { serviceCards } from "./Services";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import ProgressiveImage from "./ui/ProgressiveImage";

const Header = () => {
	const [open, setOpen] = useState(false);

	return (
		<header className="flex flex-col w-full relative z-[60]">
			<div className="flex flex-row w-full items-center justify-between px-4 lg:px-16 py-3 bg-apex-dark h-max">
				<Link
					href="/"
					className="flex items-center justify-center w-44 sm:w-48 ">
					<ProgressiveImage
						lowSrc="/243.jpg"
						highSrc={"/logo.png"}
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
							className="flex flex-row items-center gap-4">
							<ProgressiveImage
								lowSrc="/243.jpg"
								highSrc={link.web_iconPath || link.phone_iconPath || ""}
								alt={link.web_text || link.phone_text || ""}
								width={20}
								height={20}
								className="size-5 object-contain"
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
					<DropdownMenu open={open} onOpenChange={() => setOpen(!open)}>
						<DropdownMenuTrigger className="flex flex-row gap-2 items-center">
							<p className="text-para text-white font-medium">Our Services</p>
							<ProgressiveImage
								lowSrc="/243.jpg"
								highSrc={"/icons/chevron-down.svg"}
								alt={"Chevron Down"}
								width={12}
								height={12}
								className="size-3 object-contain"
							/>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="rounded-sm w-max flex gap-2 flex-col">
							{serviceCards.map(({ title, link }) => (
								<Link
									href={`/services/${link}`}
									key={link}
									onClick={() => setOpen(false)}
									className="hover:bg-apex-blue hover:text-white py-2 px-4">
									<div className="hover:bg-apex-blue hover:text-white cursor-pointer">
										{title}
									</div>
								</Link>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</nav>
		</header>
	);
};

export default Header;

