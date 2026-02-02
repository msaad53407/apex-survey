"use client";

import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { reviewData } from "@/lib/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useIsMobile } from "@/hooks/useIsMobile";

const Reviews = () => {
  const isMobile = useIsMobile(500);

  // Group reviews based on device: 2 for mobile, 4 for desktop
  const reviewsPerSlide = isMobile ? 2 : 4;
  const groupedReviews = [];
  for (let i = 0; i < reviewData.length; i += reviewsPerSlide) {
    groupedReviews.push(reviewData.slice(i, i + reviewsPerSlide));
  }

  return (
    <section className="px-7 lg:px-11 flex flex-col gap-8 max-w-screen-xl w-full mx-auto">
      <div className="space-y-2 w-full md:w-1/2 mx-auto">
        <h3 className="text-h3 text-center w-full">What Our Customer Says</h3>

        <p className="text-small text-center">
          We are a team of building physicists and engineers, software
          developers, assessors and business management specialists and for
          nearly 40 years we have been Making Buildings Better.
        </p>
        {/* Ratings Summary */}
        <div className="flex flex-col items-center gap-2 py-6">
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-3">
              <span className="text-6xl font-bold text-apex-blue">4.5</span>
              <div className="flex flex-col justify-center">
                <span className="text-base text-apex-blue font-medium">
                  Overall rating
                </span>
                <span className="text-base font-bold text-gray-800">
                  {reviewData.length} total ratings
                </span>
              </div>
            </div>
            <div className="flex gap-1 mt-1">
              {[1, 2, 3, 4].map((star) => (
                <svg
                  key={star}
                  className="w-8 h-8 fill-yellow-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
              <svg className="w-8 h-8" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="halfStar">
                    <stop offset="50%" stopColor="#FBBF24" />
                    <stop offset="50%" stopColor="#E5E7EB" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#halfStar)"
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <Carousel className="w-full">
        <CarouselContent>
          {groupedReviews.map((group, slideIndex) => (
            <CarouselItem key={slideIndex}>
              {isMobile ? (
                // Mobile: Single column layout
                <div className="flex flex-col gap-4">
                  {group.map((review, index) => (
                    <ReviewCard
                      key={`${slideIndex}-${index}`}
                      title={review.name}
                      details={review.description}
                      date={review.date}
                      image={review.image}
                    />
                  ))}
                </div>
              ) : (
                // Desktop: Two column layout with alternating positions
                <div className="flex flex-row gap-2">
                  {/* First column - 2 reviews */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 grid-row min-h-96 mb-12 lg:mb-0 flex-1">
                    {group.slice(0, 2).map((review, index) => (
                      <ReviewCard
                        key={`${slideIndex}-${index}`}
                        title={review.name}
                        details={review.description}
                        date={review.date}
                        image={review.image}
                        className={index % 2 === 0 ? "self-start" : "self-end"}
                      />
                    ))}
                  </div>
                  {/* Second column - 2 reviews */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 lg:mt-0 gap-2 grid-row min-h-96 flex-1">
                    {group.slice(2, 4).map((review, index) => (
                      <ReviewCard
                        key={`${slideIndex}-${index + 2}`}
                        title={review.name}
                        details={review.description}
                        date={review.date}
                        image={review.image}
                        className={index % 2 === 0 ? "self-start" : "self-end"}
                      />
                    ))}
                  </div>
                </div>
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-6" />
        <CarouselNext className="-right-6" />
      </Carousel>
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
