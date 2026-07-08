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
  title: "Electrical Safety Certificates London | Fairdeal Electrical",
  description:
    "Get fast, affordable Electrical Safety Certificates in London. EICR, PAT testing, gas safety & fire risk assessments. Get your instant quote today.",
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
