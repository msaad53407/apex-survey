import Hero from "./components/Hero";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import ServiceProcedure from "@/components/ServiceProcedure";
import EmailNewsLetter from "@/components/EmailNewsLetter";
import ServiceBundles from "@/components/ServiceBundles";

export default async function Home() {
  return (
    <div className="w-full flex flex-col gap-10">
      <Hero /> <Services />
      <ServiceBundles />
      <Reviews />
      <ServiceProcedure />
      <EmailNewsLetter />
    </div>
  );
}
