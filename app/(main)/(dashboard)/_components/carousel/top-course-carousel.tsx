"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TopCourseCard from "../card/top-course-card";

import { Course } from "@prisma/client";

interface TopCourseCarouselProps {
  topCourses: Course[];
}

const TopCourseCarousel = ({ topCourses }: TopCourseCarouselProps) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <div className="hidden space-x-2 lg:flex items-center justify-center lg:justify-end">
        <CarouselPrevious className="static " />
        <CarouselNext className="static " />
      </div>
      <CarouselContent>
        {topCourses.map((course, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
            <TopCourseCard course={course} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="lg:hidden space-x-2 flex items-center justify-center lg:justify-end">
        <CarouselPrevious className="static mt-6" />
        <CarouselNext className="static mt-6" />
      </div>
    </Carousel>
  );
};

export default TopCourseCarousel;
