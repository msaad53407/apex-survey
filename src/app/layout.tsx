import { ProjectProvider } from "@/context/ActiveProjectContext";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Lato, Montserrat } from "next/font/google";
import Script from "next/script";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Fairdeal Electrical",
  description:
    "Fairdeal Electrical offers top-notch electrical services including installations, rewiring, testing, fuse board repair, lighting upgrades, and smoke alarm installations. Our certified electricians ensure safety, efficiency, and compliance with all regulations for residential, commercial, and industrial properties. Contact us for reliable and professional electrical solutions.",
  verification: { google: "Stn0Y17qTEgTB3H6r888OsAfMGcv1UBDAkNeaz38sDo" },
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
          montserrat.variable,
        )}
      >
        <ProjectProvider>
          <main className="min-h-screen">
            <Toaster />
            {children}
          </main>
        </ProjectProvider>

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-HZW5NJW5RX"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments)}
			gtag('js', new Date());
			gtag('config', 'G-HZW5NJW5RX');
  		`}
        </Script>
      </body>
    </html>
  );
}
