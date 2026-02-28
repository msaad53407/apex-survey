import type { Metadata } from "next";
import { Lato, Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import toast, { Toaster } from "react-hot-toast";
import { ProjectProvider } from "@/context/ActiveProjectContext";

const lato = Lato({ 
	subsets: ["latin"], 
	weight: ["100", "300", "400", "700", "900"],
	variable: "--font-lato" 
});

const montserrat = Montserrat({ 
	subsets: ["latin"], 
	variable: "--font-montserrat" 
});

export const metadata: Metadata = {
	title: "Fairdeal Electrical",
	description:
		"Fairdeal Electrical offers top-notch electrical services including installations, rewiring, testing, fuse board repair, lighting upgrades, and smoke alarm installations. Our certified electricians ensure safety, efficiency, and compliance with all regulations for residential, commercial, and industrial properties. Contact us for reliable and professional electrical solutions.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					"bg-background font-sans antialiased min-w-full",
					lato.variable,
					montserrat.variable
				)}>
				<ProjectProvider>
					<main className="min-h-screen">
						<Toaster />
						{children}
					</main>
				</ProjectProvider>
			</body>
		</html>
	);
}
