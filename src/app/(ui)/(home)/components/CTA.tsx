import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function CTA() {
  return (
    <section className="px-7 lg:px-11 py-16 bg-apex-dark text-white w-full">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center text-center gap-8">
        <h2 className="text-h3 lg:text-h2 font-extrabold max-w-3xl leading-tight">
          Get Your Electrical Safety Certificate Today
        </h2>
        
        <p className="text-para text-white/80 max-w-4xl leading-relaxed">
          If you need an EICR certificate, PAT testing, gas safety inspection, or fire risk assessment in London, Fairdeal Electrical is ready to help. Our accredited engineers make compliance simple, fast, and stress-free for landlords and businesses alike. Get your instant quote today and let our team take care of your electrical safety certificate from start to finish.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Button
            className="bg-apex-blue hover:bg-apex-blue/90 text-white font-bold px-8 py-6 text-btn uppercase tracking-wider rounded-sm shadow-md"
            asChild
          >
            <Link href="/contact-us">
              Get Your Instant Quote
            </Link>
          </Button>
          <Button
            variant="outline"
            className="border-white/20 bg-transparent hover:bg-white/10 text-white hover:text-white font-bold px-8 py-6 text-btn uppercase tracking-wider rounded-sm"
            asChild
          >
            <Link href="tel:+442039942679">
              Call Us: +44 20 3994 2679
            </Link>
          </Button>
        </div>

        <div className="pt-6 border-t border-white/10 w-full max-w-2xl flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-small text-white/60">
          <span>For further guidance on electrical safety standards, refer to</span>
          <Link
            href="https://www.electricalsafetyfirst.org.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apex-blue hover:underline inline-flex items-center gap-1 font-semibold"
          >
            Electrical Safety First
            <ExternalLink className="size-3.5" />
          </Link>
          <span>, the UK's leading electrical safety charity.</span>
        </div>
      </div>
    </section>
  );
}
