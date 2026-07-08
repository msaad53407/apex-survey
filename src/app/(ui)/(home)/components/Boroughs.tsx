import React from "react";
import { MapPin } from "lucide-react";

export default function Boroughs() {
  const boroughs = [
    "Islington",
    "Camden",
    "Hackney",
    "Kensington & Chelsea",
    "Westminster",
    "Greenwich",
    "Tower Hamlets",
    "Southwark",
    "Lambeth",
    "Wandsworth",
    "Hammersmith & Fulham",
    "Richmond upon Thames",
  ];

  return (
    <section className="px-7 lg:px-11 py-16 bg-white w-full max-w-screen-xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
        {/* Left Side: Copy */}
        <div className="w-full lg:w-[50%] space-y-6">
          <span className="text-small font-bold text-apex-blue uppercase tracking-wider">
            Coverage Area
          </span>
          <h2 className="text-h3 lg:text-h2 font-extrabold text-gray-900 leading-tight">
            Electrical Safety Certificates Across Every London Borough
          </h2>
          <p className="text-para text-gray-700 leading-relaxed">
            Fairdeal Electrical proudly serves landlords, homeowners, and businesses throughout London, including Islington, Camden, Hackney, and surrounding boroughs. No matter where your property is located, our team can arrange a convenient appointment and issue your certificate quickly, without compromising on accuracy or compliance.
          </p>
        </div>

        {/* Right Side: Visual listing of Boroughs */}
        <div className="w-full lg:w-[45%] bg-gray-50 p-8 rounded-lg border border-gray-100">
          <h3 className="text-btn font-bold text-gray-900 mb-6 flex items-center gap-2">
            <MapPin className="size-5 text-apex-blue" />
            Popular Areas We Serve in London
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {boroughs.map((borough, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-small text-gray-700 hover:text-apex-blue transition-colors duration-200"
              >
                <div className="size-1.5 rounded-full bg-apex-blue"></div>
                {borough}
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-6 pt-4 border-t border-gray-200">
            * Plus all other Central, Greater, and surrounding London areas.
          </p>
        </div>
      </div>
    </section>
  );
}
