import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Wrapper from "../../_components/wrapper";
import EnrollButton from "../../_components/enroll-button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import db from "@/lib/db";
import { cn } from "@/lib/utils";
import getCurrentUser from "@/actions/getCurrentUser";
import { BarChart3, Clock5, Crown, Users } from "lucide-react";

const DetailCoursePage = async ({
  params,
}: {
  params: { courseId: string };
}) => {
  const user = await getCurrentUser();
  const course = await db.course.findUnique({
    where: {
      id: params.courseId,
    },
    include: {
      users: true,
    },
  });

  return (
    <Wrapper>
      <div className="space-y-4 lg:pb-10">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold">
          {course?.title}
        </h2>
        <div className="flex items-center gap-2">
          <p
            className={cn(
              "flex items-center gap-[2px] text-sm font-medium px-2 py-1 rounded-md w-fit",
              course?.isPremium
                ? "bg-[#FFD700] text-white"
                : "text-muted-foreground bg-muted"
            )}
          >
            <Crown className={cn("w-4 h-4", !course?.isPremium && "hidden")} />
            {course?.isPremium ? "Premium" : "Free"}
          </p>
          <p className="bg-brand text-sm font-medium px-2 py-1 rounded-md w-fit text-white">
            {course?.category}
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-10">
          <div className="w-full lg:w-[60%] lg:h-96 rounded-md">
            <AspectRatio ratio={4 / 3}>
              <Image
                src={course?.imageUrl || ""}
                alt={course?.title as string}
                fill
                className="object-cover rounded-md"
              />
            </AspectRatio>
          </div>
          <div className="flex items-center justify-between lg:justify-normal lg:items-start lg:flex-col lg:gap-4">
            <div>
              <p className="font-medium text-lg hidden lg:block">Price</p>
              <p className="text-2xl font-bold text-orange-500">
                ${course?.price}
              </p>
            </div>
            <EnrollButton course={course!} user={user!} />
          </div>
        </div>
        <div className="flex items-center justify-between lg:justify-start gap-10 flex-wrap pt-3 lg:pt-40">
          <div className="flex items-center gap-2 text-sm text-muted-foreground leading-3">
            <Users className="w-6 h-6 lg:w-8 lg:h-8" />
            <div>
              <p className="text-[10px] lg:text-[12px]">Students</p>
              <p className="text-[12px] lg:text-sm font-semibold">
                {course?.users.length}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground leading-3">
            <BarChart3 className="w-6 h-6 lg:w-8 lg:h-8" />
            <div>
              <p className="text-[10px] lg:text-[12px]">Level</p>
              <p className="text-[12px] lg:text-sm font-semibold lowercase">
                {course?.difficulty}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground leading-3">
            <Clock5 className="w-6 h-6 lg:w-8 lg:h-8" />
            <div>
              <p className="text-[10px] lg:text-[12px]">Duration</p>
              <p className="text-[12px] lg:text-sm font-semibold lowercase">
                {course?.duration}H
              </p>
            </div>
          </div>
        </div>
        <Accordion type="single" collapsible className="w-full lg:w-[60%]">
          <AccordionItem value="description" className="border-b-2">
            <AccordionTrigger>Description</AccordionTrigger>
            <AccordionContent className="space-y-3">
              <p>{course?.description}</p>
              <p className="font-semibold">By {course?.mentor}</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Wrapper>
  );
};

export default DetailCoursePage;
