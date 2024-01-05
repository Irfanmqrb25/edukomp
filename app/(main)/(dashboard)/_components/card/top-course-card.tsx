"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import { Course } from "@prisma/client";
import { BarChart3, Clock5 } from "lucide-react";

interface TopCourseCardProps {
  course: Course;
}

const TopCourseCard = ({ course }: TopCourseCardProps) => {
  const router = useRouter();
  return (
    <Card
      className="relative rounded-md cursor-pointer group"
      onClick={() => router.push(`/courses/${course.id}`)}
    >
      <AspectRatio ratio={4 / 3}>
        <Image
          src={course.imageUrl ?? ""}
          alt="course image"
          fill
          objectFit="cover"
          className="opacity-90 rounded-md overflow-hidden group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
        />
      </AspectRatio>
      <div className="absolute bottom-2 px-2 space-y-1">
        <h5 className="line-clamp-1 text-sm font-medium text-white group-hover:text-brand group-hover:-translate-y-2 transition-all duration-500">
          {course.title}
        </h5>
        <div className="flex items-center gap-4">
          <div className="flex font-medium text-white items-center gap-1 text-sm group-hover:text-brand group-hover:-translate-y-2 transition-all duration-500">
            <BarChart3 className="w-4 h-4" />
            <p className="">{course.difficulty}</p>
          </div>
          <div className="flex font-medium text-white items-center gap-1 text-sm group-hover:text-brand group-hover:-translate-y-2 transition-all duration-500">
            <Clock5 className="w-4 h-4" />
            <p className="">{course.duration} Hours</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TopCourseCard;
