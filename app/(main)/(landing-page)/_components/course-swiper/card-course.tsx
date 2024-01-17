import Image from "next/image";

import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { Course } from "@prisma/client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CardCourseProps {
  course: Course;
}

const CardCourse: React.FC<CardCourseProps> = ({ course }) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="p-0 border-b">
        <AspectRatio ratio={16 / 9}>
          <Image
            src={course.imageUrl ?? "/product-placeholder.webp"}
            alt={course.title}
            className="w-full h-full object-cover rounded-t-md"
            fill
          />
        </AspectRatio>
      </CardHeader>
      <CardContent className="py-2 px-3 space-y-1 flex-grow">
        <h3 className="font-bold text-lg line-clamp-1">{course.title}</h3>
        <div className="flex items-center gap-2">
          <Avatar className="w-6 h-6">
            <AvatarImage src="https://github.com/shadcn.png" />
          </Avatar>
          <p className="font-medium">edukomp</p>
        </div>
        <p className="line-clamp-1">{course.description}</p>
      </CardContent>
      <CardFooter className="p-0 px-3 pb-3">
        <Link className="w-full" href={`/courses/${course.id}`}>
          <Button size="sm" variant="primary" className="w-full">
            See Detail
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CardCourse;
