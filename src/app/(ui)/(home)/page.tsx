import Hero from "./components/Hero";
import WhyChoose from "./components/WhyChoose";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import ServiceProcedure from "@/components/ServiceProcedure";
import EmailNewsLetter from "@/components/EmailNewsLetter";
import ServiceBundles from "@/components/ServiceBundles";
import Boroughs from "./components/Boroughs";
import CTA from "./components/CTA";

export default async function Home() {
  return (
    <div className="w-full flex flex-col gap-10">
      <Hero />
      <WhyChoose />
      <Services />
      <ServiceBundles />
      <Reviews />
      <ServiceProcedure />
      <Boroughs />
      <CTA />
      <EmailNewsLetter />
    </div>
  );
}
