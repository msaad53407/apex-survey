import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { reviewData } from "@/lib/constants";

const Reviews = () => {
  const reviewArray1 = reviewData.slice(0, 2);
  const reviewArray2 = reviewData.slice(2, 4);
  return (
    <section className="px-7 lg:px-11 flex flex-col gap-8  max-w-screen-xl mx-auto">
      <div className="space-y-2 w-full md:w-1/2 mx-auto">
        <h3 className="text-h3 text-center w-full">What Our Customer Says</h3>
        <p className="text-small text-center">
          We are a team of building physicists and engineers, software
          developers, surveyors and business management specialists and for
          nearly 40 years we have been Making Buildings Better.
        </p>
      </div>

      <div className="flex flex-row gap-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 grid-row min-h-96 mb-12 lg:mb-0">
          {reviewArray1.map(({ name, description, date, image }, index) => (
            <ReviewCard
              key={index}
              title={name}
              details={description}
              date={date}
              image={image}
              className={index % 2 == 0 ? "self-start" : "self-end"}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 lg:mt-0 gap-2 grid-row min-h-96">
          {reviewArray2.map(({ name, description, date, image }, index) => (
            <ReviewCard
              key={index}
              title={name}
              details={description}
              date={date}
              image={image}
              className={index % 2 == 0 ? "self-start" : "self-end"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

export const ReviewCard = ({
  title,
  details,
  date,
  image,
  className,
}: {
  title: string;
  details: string;
  date: string;
  image: string;
  className?: string;
}) => {
  return (
    <Card className={cn("p-0 shadow-lg border-0", className)}>
      <CardHeader className="p-3 lg:p-6">
        <div className="size-14 flex items-center justify-center">
          <Image
            src={image}
            alt="Review Card"
            width={100}
            height={100}
            className="object-cover size-full rounded-full"
          />
        </div>
        <h4 className="text-btn text-apex-blue">{title}</h4>
        <Image
          src={"/icons/review-stars.svg"}
          alt="Review Stars"
          width={40}
          height={40}
          className="object-contain size-fit"
        />
      </CardHeader>
      <CardContent className="p-3 lg:p-6">
        <p className="text-small text-apex-grey-dark">{details}</p>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-2 items-center justify-between w-full p-3 lg:p-6 pt-0">
        <p className="text-small self-start">{date}</p>
        <div className="flex flex-row gap-2 items-center self-end">
          <Image
            src={"/icons/check-icon.svg"}
            alt={"Check Icon"}
            width={20}
            height={20}
            className=""
          />
          <p className="text-apex-grey-dark text-small">Verified</p>
        </div>
      </CardFooter>
    </Card>
  );
};
