"use client";

import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const MentorCarousel = () => {
  const mentorsData = [
    {
      id: 1,
      name: "Alex Smith",
      image: "https://github.com/shadcn.png",
      role: "UI/UX Designer",
    },
    {
      id: 2,
      name: "Russel Carter",
      image: "https://github.com/shadcn.png",
      role: "Senior Developer",
    },
    {
      id: 3,
      name: "Harry Miller",
      image: "https://github.com/shadcn.png",
      role: "Graphics Designer",
    },
    {
      id: 4,
      name: "Alex Smith",
      image: "https://github.com/shadcn.png",
      role: "Digital Marketing",
    },
    {
      id: 5,
      name: "Adam Austin",
      image: "https://github.com/shadcn.png",
      role: "Frontend Developer",
    },
    {
      id: 6,
      name: "George Brown",
      image: "https://github.com/shadcn.png",
      role: "Business Analyst",
    },
  ];

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {mentorsData.map((mentor) => (
          <CarouselItem key={mentor.id} className="md:basis-1/3 lg:basis-1/4">
            <div className="p-1">
              <Card>
                <CardHeader className="p-0 border-b-2">
                  <AspectRatio>
                    <Image
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-full h-full object-cover rounded-t-md"
                      fill
                    />
                  </AspectRatio>
                </CardHeader>
                <CardContent className="text-center mt-4">
                  <h3 className="font-bold text-xl">{mentor.name}</h3>
                  <p className="text-muted-foreground">{mentor.role}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="space-x-2 flex items-center justify-center">
        <CarouselPrevious className="static md:absolute mt-6 md:mt-0" />
        <CarouselNext className="static md:absolute mt-6 md:mt-0" />
      </div>
    </Carousel>
  );
};

export default MentorCarousel;
