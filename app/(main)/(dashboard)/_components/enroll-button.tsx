"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import { toast } from "sonner";
import { Course, User, enrollment } from "@prisma/client";
import { ArrowUpRight, RotateCcw } from "lucide-react";
import { enrollCourse, unenrollCourse } from "@/actions/course";

interface EnrollButtonProps {
  course: Course;
  user: User & {
    enrollments: enrollment[];
  };
}

const EnrollButton = ({ course, user }: EnrollButtonProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const isEnrolled = user?.enrollments?.find(
    (enrollment) => enrollment.courseId === course.id
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
    <Button
      variant={isEnrolled ? "destructive" : "primary"}
      onClick={onClick}
      size="sm"
      disabled={isPending}
    >
      {isEnrolled ? "Unenroll" : "Enroll Now"}
      {isEnrolled ? (
        <RotateCcw className="w-4 h-4 ml-2" />
      ) : (
        <ArrowUpRight className="w-4 h-4 ml-2" />
      )}
    </Button>
  );
};

export default EnrollButton;
