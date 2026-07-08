import React from "react";
import { ShieldCheck, Clock } from "lucide-react";

export default function WhyChoose() {
  return (
    <section className="px-7 lg:px-11 py-16 bg-gray-50/50 border-y border-gray-100 w-full">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-12 justify-between items-start">
        {/* Left column: Title & Description */}
        <div className="w-full lg:w-[50%] flex flex-col gap-6">
          <div className="space-y-4">
            <span className="text-small font-bold text-apex-blue uppercase tracking-wider">
              Why Choose Fairdeal
            </span>
            <h2 className="text-h3 lg:text-h2 font-extrabold text-gray-900 leading-tight">
              Why Choose Fairdeal for Your Electrical Compliance Certificates
            </h2>
          </div>
          <p className="text-para text-gray-700 leading-relaxed">
            Choosing the right provider for your electrical safety certificate matters, because a poorly conducted inspection can leave your property non-compliant and your tenants unprotected. Fairdeal Electrical has built its reputation on accuracy, speed, and honest pricing. Our engineers are fully accredited, insured, and experienced in residential, commercial, and HMO properties throughout London. Consequently, whether you're a landlord managing a single flat or a facilities manager overseeing multiple commercial sites, you can rely on us for consistent, fully documented results.
          </p>
        </div>

        {/* Right column: Highlights */}
        <div className="w-full lg:w-[45%] flex flex-col gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm flex gap-4 hover:shadow-md transition-shadow duration-300">
            <div className="size-12 rounded-full bg-apex-blue/10 flex items-center justify-center text-apex-blue flex-shrink-0">
              <ShieldCheck className="size-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-btn font-bold text-gray-900">
                Accurate Assessments Every Time
              </h3>
              <p className="text-small text-gray-600 leading-relaxed">
                Our team uses calibrated testing equipment and follows the latest BS 7671 wiring regulations, so every EICR certificate we issue reflects the true condition of your electrical installation.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm flex gap-4 hover:shadow-md transition-shadow duration-300">
            <div className="size-12 rounded-full bg-apex-blue/10 flex items-center justify-center text-apex-blue flex-shrink-0">
              <Clock className="size-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-btn font-bold text-gray-900">
                Fast Turnaround, No Delays
              </h3>
              <p className="text-small text-gray-600 leading-relaxed">
                We know landlords and businesses often need certificates urgently. That's why we offer same-day and urgent EICR inspection slots across Central and Greater London.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
