"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import React from "react";

const faqs = [
  {
    question: "Is it accessible?",
    answer: (
      <div className="w-full flex flex-col gap-2">
        <p className="text-para">
          Yes, our services are accessible to a wide range of clients. We ensure
          that our technology and processes are user-friendly and compliant with
          accessibility standards. This includes providing accommodations for
          individuals with disabilities and ensuring our online platforms are
          easily navigable.
        </p>
      </div>
    ),
  },
  {
    question: "What is the process?",
    answer: (
      <div className="w-full flex flex-col gap-2">
        <p className="text-para">
          The process starts with an initial consultation where we understand
          your requirements and objectives. This is followed by a site visit for
          preliminary assessment. We then conduct detailed surveying using the
          latest technology. Once the data is collected, our team analyzes it
          and prepares a comprehensive report, which is delivered to you along
          with recommendations.
        </p>
      </div>
    ),
  },
  {
    question: "Do you have a team?",
    answer: (
      <div className="w-full flex flex-col gap-2">
        <p className="text-para">
          Yes, we have a dedicated team of experienced professionals. Our team
          includes licensed surveyors, engineers, and technical experts who are
          well-versed in the latest assessment techniques and technologies. They
          work collaboratively to ensure that each project is completed
          accurately and efficiently.
        </p>
      </div>
    ),
  },
  {
    question: "Can I request Additional Services?",
    answer: (
      <div className="w-full flex flex-col gap-2">
        <p className="text-para">
          Absolutely. In addition to our standard surveying services, we offer a
          range of additional services to meet your specific needs. These
          include topographic assessments, construction staking, boundary assessments,
          and more. You can discuss your requirements with our team, and we will
          tailor our services accordingly.
        </p>
      </div>
    ),
  },
];

const FaqsAccordian = () => {
  const [activeFaqs, setActiveFaqs] = React.useState(["item-1"]);

  const handleChangeInFaqs = (value: string[]) => {
    setActiveFaqs(value);
  };

  return (
    <Accordion
      type="multiple"
      defaultValue={["item-1"]}
      value={activeFaqs}
      onValueChange={handleChangeInFaqs}
      className="w-[95%] mx-auto lg:shadow-md lg:rounded-xl lg:p-6 lg:border lg:border-gray-200 lg:px-11 px-7"
    >
      {faqs.map((faq, index) => (
        <AccordionItem value={`item-${index + 1}`} key={index}>
          <AccordionTrigger>
            <h5 className="text-btn text-start">{faq.question}</h5>
            {!activeFaqs.find((faq) => faq === `item-${index + 1}`) ? (
              <PlusCircleIcon className="size-6 shrink-0 transition-transform duration-200" />
            ) : (
              <MinusCircleIcon className="size-6 shrink-0 text-apex-blue transition-transform duration-200" />
            )}
          </AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqsAccordian;
