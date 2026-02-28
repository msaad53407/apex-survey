"use client";

import React, { useState } from "react";
import { serviceBundles, services } from "@/lib/constants";
import { Button } from "./ui/button";
import { Check, Star } from "lucide-react";
import InstantQuoteModal from "./dialogs/InstantQuoteModal";
import { useRouter } from "next/navigation";

const ServiceBundles = () => {
  const [openModalId, setOpenModalId] = useState<string | null>(null);
  const router = useRouter();

  return (
    <section className="px-7 lg:px-10 py-16 flex flex-col gap-8 max-w-screen-xl lg:min-w-[1024px] xl:min-w-[1280px] mx-auto bg-white">
      <div className="space-y-2">
        <div className="w-16 h-1 bg-apex-blue mb-3"></div>
        <h2 className="text-h3 lg:text-h2 font-bold">Services Bundle Offers</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
        {serviceBundles.map((bundle) => {
          // Get service objects from service IDs
          const bundleServices = services.filter((service) =>
            bundle.serviceIds.includes(service.id),
          );

          return (
            <div
              key={bundle.id}
              className="bg-white border border-gray-200 rounded-sm shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col relative"
            >
              {/* Popular Badge */}
              {bundle.isPopular && (
                <div className="absolute max-[390px]:-top-6 -top-3 md:-top-3 lg:-top-6 left-1/2 -translate-x-1/2 bg-apex-blue px-4 py-1 rounded-sm flex items-center gap-1">
                  <Star className="size-4 fill-white text-white" />
                  <span className="text-white text-small font-bold uppercase">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Card Header */}
              <div className="bg-gray-800 text-white p-4 text-center">
                <h3 className="text-btn font-bold uppercase tracking-wide">
                  {bundle.name}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Price */}
                <div className="mb-6">
                  <p className="text-small text-gray-600 mb-1">from only</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-gray-600 text-h5">£</span>
                    <span className="text-5xl font-bold text-apex-blue">
                      {bundle.price}
                    </span>
                  </div>
                </div>

                {/* Services List */}
                <div className="space-y-3 mb-6 flex-1">
                  {bundleServices.map((service, idx) => (
                    <div
                      key={`${bundle.id}-service-${idx}`}
                      className="flex items-start gap-2"
                    >
                      <Check className="size-5 text-apex-blue flex-shrink-0 mt-0.5" />
                      <span className="text-small text-gray-700">
                        {service.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                {/* <InstantQuoteModal
                  open={openModalId === bundle.id}
                  onOpenChange={(open) =>
                    setOpenModalId(open ? bundle.id : null)
                  }
                  prefilledData={{
                    propertyType: bundle.propertyType,
                    serviceIds: bundle.serviceIds,
                  }}
                  trigger={
                    <Button
                      className={`w-full py-6 font-bold text-small uppercase tracking-wide ${
                        bundle.isPopular
                          ? "bg-apex-blue hover:bg-apex-blue/90 text-black"
                          : "bg-gray-800 hover:bg-gray-700 text-white"
                      }`}
                    >
                      Get Instant Quote
                    </Button>
                  }
                /> */}
                <Button
                      className={`w-full py-6 font-bold text-small uppercase tracking-wide ${
                        bundle.isPopular
                          ? "bg-apex-blue hover:bg-apex-blue/90 text-black"
                          : "bg-gray-800 hover:bg-gray-700 text-white"
                      }`}
                      onClick={()=>router.push("/contact-us")}
                    >
                      Get Instant Quote
                    </Button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceBundles;
