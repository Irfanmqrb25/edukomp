"use client";

import { useState } from "react";

import CardCourse from "./card-course";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { cn } from "@/lib/utils";
import { recommendedCourses } from "@/data/course";

const SwiperClient = () => {
  const [onSelectedTab, setOnSelectedTab] = useState("design");

  const tabItems = [
    {
      id: "design",
      label: "Graphics Design",
    },
    {
      id: "ui/ux",
      label: "UI/UX Design",
    },
    {
      id: "digital marketing",
      label: "Digital Marketing",
    },
    {
      id: "software development",
      label: "Software Development",
    },
    {
      id: "business management",
      label: "Business Management",
    },
  ];

  const softwareCourses = recommendedCourses.filter(
    (course) => course.type === "software development"
  );

  const designCourses = recommendedCourses.filter(
    (course) => course.type === "design"
  );

  const digitalMarketingCourses = recommendedCourses.filter(
    (course) => course.type === "digital marketing"
  );

  const uiUxCourses = recommendedCourses.filter(
    (course) => course.type === "ui/ux"
  );

  const businessManagementCourses = recommendedCourses.filter(
    (course) => course.type === "business management"
  );

  return (
    <div className="flex flex-col md:flex-row gap-10">
      <div className="flex flex-col gap-y-4 lg:w-[25%] justify-between">
        {tabItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setOnSelectedTab(item.id)}
            className={cn(
              "px-4 py-2 border-2 border-brand rounded-md text-center cursor-pointer hover:bg-brand hover:text-white",
              onSelectedTab === item.id && "text-white bg-brand"
            )}
          >
            {item.label}
          </div>
        ))}
      </div>
      <div className="lg:w-[75%] lg:pl-10">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {onSelectedTab === "design" &&
              designCourses.map((course, i) => (
                <CarouselItem key={i} className="md:basis-1/3 lg:basis-1/3">
                  <CardCourse course={course} />
                </CarouselItem>
              ))}
            {onSelectedTab === "ui/ux" &&
              uiUxCourses.map((course, i) => (
                <CarouselItem key={i} className="md:basis-1/3 lg:basis-1/3">
                  <CardCourse course={course} />
                </CarouselItem>
              ))}
            {onSelectedTab === "digital marketing" &&
              digitalMarketingCourses.map((course, i) => (
                <CarouselItem key={i} className="md:basis-1/3 lg:basis-1/3">
                  <CardCourse course={course} />
                </CarouselItem>
              ))}
            {onSelectedTab === "software development" &&
              softwareCourses.map((course, i) => (
                <CarouselItem key={i} className="md:basis-1/3 lg:basis-1/3">
                  <CardCourse course={course} />
                </CarouselItem>
              ))}
            {onSelectedTab === "business management" &&
              businessManagementCourses.map((course, i) => (
                <CarouselItem key={i} className="md:basis-1/3 lg:basis-1/3">
                  <CardCourse course={course} />
                </CarouselItem>
              ))}
          </CarouselContent>
          <div className="space-x-2 flex items-center justify-center">
            <CarouselPrevious className="static md:absolute mt-6 md:mt-0" />
            <CarouselNext className="static md:absolute mt-6 md:mt-0" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default SwiperClient;
