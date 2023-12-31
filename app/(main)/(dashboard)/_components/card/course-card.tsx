"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import {
  ArrowUpRight,
  BarChart3,
  Clock5,
  Crown,
  RotateCcw,
  Users,
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Course, User } from "@prisma/client";
import { enrollCourse, unenrollCourse } from "@/actions/course";

interface CourseCardProps {
  course: Course & {
    users: User[];
  };
  user: User;
}

const CourseCard = ({ course, user }: CourseCardProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const isEnrolled = course.users.find(
    (userAtCourse) => userAtCourse.id === user.id
  );

  const onClick = () => {
    try {
      if (!user.isPremium && course.isPremium) {
        router.push("/pricing");
        toast.error("You need to be a premium user to enroll in this course.");
        return;
      }

      if (isEnrolled) {
        startTransition(async () => {
          toast.promise(unenrollCourse(course.id), {
            loading: "Unenrolling...",
            success: "Unenrolled!",
            error: "Something went wrong",
          });
        });
      } else {
        startTransition(async () => {
          toast.promise(enrollCourse(course.id), {
            loading: "Enrolling...",
            success: "Enrolled!",
            error: "Something went wrong",
          });
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Card className="flex flex-col lg:flex-row gap-4 py-6 px-7 shadow-md rounded-2xl w-full">
      <CardHeader className="p-0 rounded-2xl overflow-hidden shadow-md w-full h-[160px] lg:h-[130px] lg:w-[160px] hover:-translate-y-1 hover:shadow-lg border transition-all duration-500">
        <Image
          alt={course.title}
          src={course.imageUrl ?? "/blank-user.jpg"}
          width={160}
          height={130}
          className="object-cover h-full w-full"
        />
      </CardHeader>
      <CardContent className="p-0 space-y-6 lg:space-y-4 w-full">
        <div className="flex flex-col gap-2 lg:gap-1">
          <div className="flex items-center gap-2">
            <p
              className={cn(
                "flex items-center gap-[2px] text-[10px] font-medium px-2 py-1 rounded-md w-fit",
                course.isPremium
                  ? "bg-[#FFD700] text-white"
                  : "text-muted-foreground bg-muted"
              )}
            >
              <Crown className={cn("w-3 h-3", !course.isPremium && "hidden")} />
              {course.isPremium ? "Premium" : "Free"}
            </p>
            <p className="bg-brand text-[10px] font-medium px-2 py-1 rounded-md w-fit text-white">
              {course.category}
            </p>
          </div>
          <Link
            href={`/courses/${course.id}`}
            className="font-bold text-lg lg:text-xl hover:text-brand hover:-translate-y-1 transition-all duration-500 line-clamp-1"
          >
            {course.title}
          </Link>
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Users className="w-4 h-4" />
              <p className="">{course.users.length} Students</p>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <BarChart3 className="w-4 h-4" />
              <p className="">{course.difficulty}</p>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock5 className="w-4 h-4" />
              <p className="">{course.duration} Hours</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center text-xl font-bold text-orange-500">
            ${course.price}
          </div>
          {isEnrolled ? (
            <Button
              onClick={onClick}
              disabled={isPending}
              size="sm"
              variant="destructive"
              className="text-sm font-normal"
            >
              Unenroll
              <RotateCcw className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={onClick}
              disabled={isPending}
              size="sm"
              variant="primary"
              className="text-sm font-normal"
            >
              Enroll Now
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
