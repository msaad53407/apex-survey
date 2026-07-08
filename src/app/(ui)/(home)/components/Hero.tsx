import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import ProgressiveImage from "@/components/ui/ProgressiveImage";

export default function Hero() {
  return (
    <section className="w-full overflow-hidden">
      <div className="relative">
        <div className="relative bg-white px-3 lg:px-5">
          <div className="absolute inset-0">
            <ProgressiveImage
              lowSrc="/243.jpg"
              highSrc="/Hero-Banner.png"
              alt="Empowering Your Property Journey"
              className="size-full object-cover"
              height={1000}
              width={1000}
            />
            <div className="absolute inset-0 bg-black opacity-50" />
          </div>
          
          <div className="relative w-full px-6 lg:px-8 max-w-screen-xl xl:mx-auto min-h-[450px] lg:min-h-[580px] z-10">
            <div className="flex justify-between items-stretch py-12 lg:py-20 lg:flex-row flex-col-reverse gap-8">
              
              {/* Left Column: Content */}
              <div className="flex flex-col space-y-6 w-full lg:w-[50%] xl:w-[55%] text-white">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                  Electrical Safety Certificates London
                </h1>
                <p className="text-lg lg:text-xl font-semibold text-white/90">
                  Trusted EICR, PAT Testing, Gas Safety & Fire Risk Assessments for Landlords and Businesses.
                </p>
                <p className="text-para text-white/80 leading-relaxed max-w-[95%] lg:max-w-[85%] xl:max-w-none">
                  Fairdeal Electrical provides fast, affordable Electrical Safety Certificates in London for landlords, homeowners, and commercial property owners. Whether you need an EICR certificate, a PAT testing report, a gas safety check, or a fire risk assessment, our fully qualified electricians deliver accurate, compliant, and same-day results across every London borough. We understand that electrical compliance can feel confusing, so we've made the process simple: book online, get assessed, and receive your certificate, usually within 24 to 48 hours.
                </p>
                <Button
                  className="bg-apex-blue w-max px-8 py-2 text-btn text-white hover:bg-apex-blue"
                  variant="default"
                  asChild
                >
                  <Link href="tel:+442039942679" className="w-fit">
                    Get Your Instant Quote
                  </Link>
                </Button>
              </div>

              {/* Right Column: Image and Overlays */}
              <div className="w-full lg:w-[45%] xl:w-[40%] flex flex-col justify-between relative min-h-[400px]">
                
                {/* Electrician Image and We Provide Box */}
                <div className="relative w-full flex justify-center lg:justify-end items-end">
                  <ProgressiveImage
                    lowSrc="/243.jpg"
                    highSrc={"/pngwing 1.png"}
                    alt="Hero Image"
                    width={1000}
                    height={1000}
                    className="object-contain size-[75%] md:size-[60%] lg:size-10/12 xl:size-9/12 z-10"
                  />

                  {/* Original "We provide" card restored to solid bg-apex-grey-bluish, placed absolute relative to Right Column */}
                  <div className="hidden lg:inline-block bg-apex-grey-bluish absolute -left-20 xl:-left-24 top-16 py-8 px-6 rounded-lg shadow-lg w-72 z-20">
                    <h4 className="text-btn text-white mb-4">We provide</h4>
                    <p className="text-para text-white mb-2">
                      Accurate Assessment <span className="float-right">93%</span>
                    </p>
                    <Progress
                      className="w-full mb-4 bg-white text-apex-blue"
                      value={93}
                    />
                    <p className="text-para text-white mb-2">
                      Saving Your Time <span className="float-right">92%</span>
                    </p>
                    <Progress className="w-full text-apex-blue" value={92} />
                  </div>
                </div>

                {/* Original experience / client stats bar restored to h-40 px-8 bg-apex-grey-bluish */}
                <div className="bg-apex-grey-bluish w-fit mx-auto lg:w-auto flex gap-8 justify-center items-center h-40 px-8 z-20 mt-6 lg:mt-0 shadow-lg rounded-sm">
                  <div className="flex items-start gap-4 text-white">
                    <ProgressiveImage
                      lowSrc="/243.jpg"
                      highSrc={"/icons/ribbon.svg"}
                      alt="Ribbon"
                      height={20}
                      width={20}
                    />
                    <div className="space-y-1">
                      <span className="text-h5">
                        15<sup>+</sup>
                      </span>
                      <p className="text-para">Years of Experience</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 text-white">
                    <ProgressiveImage
                      lowSrc="/243.jpg"
                      highSrc={"/icons/person-white.svg"}
                      alt="Person"
                      height={20}
                      width={20}
                    />
                    <div className="space-y-1">
                      <span className="text-h5">
                        1k<sup>+</sup>
                      </span>
                      <p className="text-para">Clients Satisfied</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

        <div className="w-full h-max pt-14 pb-6 px-8 bg-apex-blue text-white relative z-10">
          <div className="flex flex-col xs:flex-row gap-4 lg:gap-12 items-end lg:items-center max-w-screen-xl mx-auto">
            <div className="flex gap-4 w-full lg:w-1/4">
              <ProgressiveImage
                lowSrc="/243.jpg"
                highSrc={"/icons/clipboard-white.svg"}
                alt="Clipboard"
                height={10}
                width={10}
                className="h-6 w-6 text-blue-400"
              />
              <div className="ml-4 space-y-5">
                <h4 className="text-btn">Accurate Electrical Assessment</h4>
                <p className="text-para">
                  Our team ensures precise and accurate assessments using the
                  latest technology and methods. Trust us for reliable data
                  every time
                </p>
              </div>
            </div>
            <div className="flex gap-4 w-full lg:w-1/4">
              <ProgressiveImage
                lowSrc="/243.jpg"
                highSrc={"/icons/ribbon.svg"}
                alt="Ribbon"
                height={10}
                width={10}
                className="h-6 w-6 text-blue-400"
              />
              <div className="ml-4 space-y-5">
                <h4 className="text-btn">Best Service</h4>
                <p className="text-para">
                  We pride ourselves on providing top-notch customer service.
                  Our dedicated team is here to support you at every step
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
